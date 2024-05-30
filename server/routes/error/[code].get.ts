interface Response {
  statusCode: number;
  message: string;
}

interface ErrorCodeLibrary {
  [key: number]: Response;
}

const errorCodeLibrary: ErrorCodeLibrary = {
  200: {
    statusCode: 200,
    message: "OK",
  },
  201: {
    statusCode: 201,
    message: "Created",
  },
  202: {
    statusCode: 202,
    message: "Accepted",
  },
  204: {
    statusCode: 204,
    message: "No Content",
  },
  400: {
    statusCode: 400,
    message: "Bad Request",
  },
  401: {
    statusCode: 401,
    message: "Unauthorized",
  },
  403: {
    statusCode: 403,
    message: "Forbidden",
  },
  404: {
    statusCode: 404,
    message: "Not Found",
  },
  500: {
    statusCode: 500,
    message: "Internal Server Error",
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
