import type { Response } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const errorCodes = [400, 401, 403, 404, 409, 429, 500, 503];
  const randomCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];

  return throwError(randomCode);
});
