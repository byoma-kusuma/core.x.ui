import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange
} from "urql";
import {
  authExcConfig as authExchange,
  errorExcConfig as errorExchange
} from "services/auth";

export const gqlClient = createClient({
  url: process.env.REACT_APP_BASE_URL as string,
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    errorExchange,
    authExchange,
    fetchExchange
  ]
});
