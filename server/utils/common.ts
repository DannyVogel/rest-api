import type { HttpStatus } from "~/types";

export const serverResponse = (
  statusCode: number,
  message?: string,
  payload?: any[] | object | null
) => {
  return {
    statusCode,
    statusMessage: httpStatus[statusCode].statusMessage,
    message,
    payload,
  };
};

export const waitSeconds = async (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const httpStatus: HttpStatus = {
  200: {
    statusCode: 200,
    statusMessage: "OK",
    description: "The request has succeeded.",
  },
  201: {
    statusCode: 201,
    statusMessage: "Created",
    description:
      "The request has been fulfilled and has resulted in a new resource being created.",
  },
  202: {
    statusCode: 202,
    statusMessage: "Accepted",
    description:
      "The request has been accepted for processing, but the processing has not been completed.",
  },
  204: {
    statusCode: 204,
    statusMessage: "No Content",
    description:
      "The server has successfully fulfilled the request and there is no additional content to send in the response payload body.",
  },
  400: {
    statusCode: 400,
    statusMessage: "Bad Request",
    description:
      "The server could not understand the request due to invalid syntax.",
  },
  401: {
    statusCode: 401,
    statusMessage: "Unauthorized",
    description: "The request requires user authentication.",
  },
  403: {
    statusCode: 403,
    statusMessage: "Forbidden",
    description:
      "The server understood the request, but it refuses to authorize it.",
  },
  404: {
    statusCode: 404,
    statusMessage: "Not Found",
    description: "The server can't find the requested resource.",
  },
  409: {
    statusCode: 409,
    statusMessage: "Conflict",
    description:
      "The request could not be completed due to a conflict with the current state of the target resource.",
  },
  429: {
    statusCode: 429,
    statusMessage: "Too Many Requests",
    description:
      "The user has sent too many requests in a given amount of time.",
  },
  500: {
    statusCode: 500,
    statusMessage: "Internal Server Error",
    description:
      "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  },
  503: {
    statusCode: 503,
    statusMessage: "Service Unavailable",
    description:
      "The server is currently unable to handle the request due to a temporary overload or scheduled maintenance.",
  },
};
