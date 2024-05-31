import type { Response, ErrorCodeLibrary } from "~/types/common.interfaces";

const errorCodeLibrary: ErrorCodeLibrary = {
  200: {
    statusCode: 200,
    message: "All good",
  },
  201: {
    statusCode: 201,
    message: "Welcome to Creation",
  },
  202: {
    statusCode: 202,
    message: "Acceptable...",
  },
  204: {
    statusCode: 204,
    message: "Got nothing for you",
  },
  400: {
    statusCode: 400,
    message: "Because you're bad at requesting",
  },
  401: {
    statusCode: 401,
    message: "Uh uh, you don't belong here",
  },
  403: {
    statusCode: 403,
    message: "Definitely not allowed here",
  },
  404: {
    statusCode: 404,
    message: "Nothing to see here",
  },
  500: {
    statusCode: 500,
    message: "Everything is broken",
  },
};

export default defineEventHandler(async (event) => {
  const response = {} as Response;
  const code = Number(getRouterParam(event, "code"));
  if (code >= 200 && code < 300) {
    response.statusCode = code;
    response.message = errorCodeLibrary[code].message;
    return response;
  } else {
    throw createError({
      statusCode: code,
      statusMessage: errorCodeLibrary[code].message,
    });
  }
});
