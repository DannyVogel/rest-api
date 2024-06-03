interface Response {
  statusCode: number;
  message: string;
}

export default defineEventHandler(async (event) => {
  const response = {} as Response;
  const authHeader = getRequestHeader(event, "Authorization");
  if (!authHeader) {
    throw createError({
      statusCode: 401,
      statusMessage: "Just a simple hi for you",
    });
  } else {
    response.statusCode = 200;
    response.message = "Welcome to RESTful Test!";
    return response;
  }
});
