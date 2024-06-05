import type { Response } from "~/types/common.interfaces";
import { errorCodeLibrary } from "~/server/utils/errors";

export default defineEventHandler(async (event): Promise<Response> => {
  const code = Number(getRouterParam(event, "code"));
  const isCodeInLibrary = Object.keys(errorCodeLibrary).includes(
    code.toString()
  );
  if (!isCodeInLibrary) {
    throw createError({ statusCode: code });
  }

  if (code >= 200 && code < 300) {
    setResponseStatus(event, code);
    return serverResponse(code, errorCodeLibrary[code].message);
  } else {
    return throwError(code);
  }
});
