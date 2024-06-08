import type { Response } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const code = Number(getRouterParam(event, "code"));
  const isCodeInLibrary = Object.keys(httpStatus).includes(code.toString());
  if (!isCodeInLibrary) {
    throw createError({ statusCode: code });
  }
  return throwError(code);
});
