import { upperFirst } from "lodash";
import { enqueueSnackbar } from "notistack";
import { CombinedError } from "urql";

// this service exposes graphql errors and network errors
// and provides an easy way to handle those errors
// typically you use this service whenever a graphql mutation is called and in other cases depending on the use case
export default class GqlApiHandler<
  T extends { error?: CombinedError; data?: unknown }
> {
  public res: T;

  constructor(data: T) {
    this.res = data;
    return this;
  }

  public static getErrorMessage(error?: CombinedError) {
    if (!error) return "";
    return (
      error?.graphQLErrors.reduce((acc, cur) => {
        return (acc += `${cur.message}\n`);
      }, "") || ""
    );
  }

  private getCombinedGQLError(res: T): string {
    try {
      return GqlApiHandler.getErrorMessage(res.error);
    } catch (e) {
      return "Some error occured! Please contact system administrator!";
    }
  }

  public onSuccess(
    successFn: ({
      res,
      notiSuccess
    }: {
      res: T;
      notiSuccess: (msg: string) => void;
    }) => void
  ) {
    if (this.res.data) {
      successFn({
        res: this.res,
        notiSuccess: (msg) =>
          enqueueSnackbar(msg, {
            variant: "success",
            persist: false
          })
      });
    }
    return this;
  }

  public onError(
    errFn: ({
      res,
      combinedError,
      notiErr
    }: {
      res: T;
      combinedError?: null | string;
      notiErr: (msg?: string) => void;
    }) => void
  ) {
    let errorString: string | null | undefined = "";

    if (this.res.error) {
      if (this.res.error.graphQLErrors.length) {
        errorString = this.getCombinedGQLError(this.res);
      }
      if (this.res.error.networkError) {
        errorString = `${this.res.error.networkError.message}. Please check your network connection or contact system administrator!`;
      }
      errFn({
        res: this.res,
        combinedError: errorString,
        notiErr: (msg?) =>
          enqueueSnackbar(msg || upperFirst(errorString as string), {
            variant: "error",
            persist: false
          })
      });
    }

    return this;
  }
}
