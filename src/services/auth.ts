import { makeOperation, gql } from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import { enqueueSnackbar } from "notistack";
import { errorExchange } from "urql";
import { history } from "../App";

const LOCAL_TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refreshToken";

const NO_AUTH_CODE = "UNAUTHENTICATED";

export function hardLogout(
  showReloginMessage?: boolean,
  message?: string
): void {
  clearAuth();
  history.push("/login");
  if (showReloginMessage) {
    enqueueSnackbar(
      message ||
        "Your session has expired. Please login again to continue using the app.",
      {
        variant: "error",
        autoHideDuration: 5000,
        preventDuplicate: true
      }
    );
  }
}

export function clearAuth(): void {
  localStorage.removeItem(LOCAL_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function setLocalToken(token: string): string | null {
  localStorage.setItem(LOCAL_TOKEN_KEY, token);
  return localStorage.getItem(LOCAL_TOKEN_KEY);
}

export function setRefreshToken(token: string): string | null {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function getLocalToken(): string | null {
  return localStorage.getItem(LOCAL_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshCredentials($refreshToken: JWT!) {
    refreshToken(token: $refreshToken) {
      refreshToken
      accessToken
    }
  }
`;

type AuthState = { refreshToken: string; token: string };

export const errorExcConfig = errorExchange({
  onError: (error) => {
    const isAuthError = error.graphQLErrors.some(
      (e) => e.extensions?.code === NO_AUTH_CODE
    );
    if (isAuthError) {
      hardLogout(true);
    }
  }
});

export const authExcConfig = authExchange({
  // get auth internal
  async getAuth({ authState, mutate }) {
    if (!authState) {
      const token = getLocalToken();
      const refreshToken = getRefreshToken();
      if (token && refreshToken) {
        return { token, refreshToken };
      }
      return null;
    }

    const result = await mutate(REFRESH_TOKEN_MUTATION, {
      refreshToken: (authState as AuthState).refreshToken
    });

    if (result.data?.refreshToken) {
      setLocalToken(result.data.refreshToken.accessToken);
      setRefreshToken(result.data.refreshToken.refreshToken);
      return {
        token: result.data.refreshToken.accessToken,
        refreshToken: result.data.refreshToken.refreshToken
      };
    }

    hardLogout(true);

    return null;
  },

  // add auth to requests
  addAuthToOperation({ authState, operation }) {
    if (!authState || !(authState as AuthState).token) {
      return operation;
    }

    const fetchOptions =
      typeof operation.context.fetchOptions === "function"
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${(authState as AuthState).token}`
        }
      }
    });
  },

  // condition on which token expiry error occurs
  didAuthError({ error }) {
    return error.graphQLErrors.some((e) => e.extensions?.code === NO_AUTH_CODE);
  }
});
