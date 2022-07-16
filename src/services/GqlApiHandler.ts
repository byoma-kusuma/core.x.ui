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

  private getCombinedGQLError(res: T): string {
    try {
      return (
        res.error?.graphQLErrors.reduce((acc, cur) => {
          return (acc += `${
            (cur.extensions.response as { message: Array<string> }).message
          }\n`);
        }, "") || ""
      );
    } catch (e) {
      return "Some error occured! Please contact system administrator!";
    }
  }

  public onSuccess(successFn: ({ res }: { res: T }) => void) {
    if (this.res.data) {
      successFn({ res: this.res });
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
      notiErr: () => void;
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
        notiErr: () =>
          enqueueSnackbar(upperFirst(errorString as string), {
            variant: "error",
            persist: false
          })
      });
    }

    return this;
  }
}
