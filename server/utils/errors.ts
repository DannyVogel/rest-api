import { ErrorCodeLibrary } from "~/types/common.interfaces";

export const throwError = (errorCode: number, message: string = "") => {
  const error = { ...errorCodeLibrary[errorCode] };
  if (message) error.message = message;
  throw createError(error);
};

export const errorCodeLibrary: ErrorCodeLibrary = {
  200: {
    statusCode: 200,
    statusMessage: "OK",
  },
  201: {
    statusCode: 201,
    statusMessage: "Created",
  },
  202: {
    statusCode: 202,
    statusMessage: "Accepted",
  },
  204: {
    statusCode: 204,
    statusMessage: "No Content",
  },
  400: {
    statusCode: 400,
    statusMessage: "Bad Request",
  },
  401: {
    statusCode: 401,
    statusMessage: "Unauthorized",
  },
  403: {
    statusCode: 403,
    statusMessage: "Forbidden",
  },
  404: {
    statusCode: 404,
    statusMessage: "Not Found",
  },
  409: {
    statusCode: 409,
    statusMessage: "Conflict",
  },
  429: {
    statusCode: 429,
    statusMessage: "Too Many Requests",
  },
  500: {
    statusCode: 500,
    statusMessage: "Internal Server Error",
  },
  503: {
    statusCode: 503,
    statusMessage: "Service Unavailable",
  },
};
