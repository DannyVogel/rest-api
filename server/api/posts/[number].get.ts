import type { Response } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const number = getRouterParam(event, "number");
  const response = {} as Response;
  let data;

  if (!number) {
    data = await $fetch(`https://jsonplaceholder.typicode.com/posts`);
  } else if (isNaN(Number(number))) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad request",
    });
  } else if (Number(number) < 1 || Number(number) > 100) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  } else {
    data = await $fetch(`https://jsonplaceholder.typicode.com/posts/${number}`);
    response.statusCode = 200;
    response.message = "Got the post";
    response.payload = [data];
    return response;
  }
  throw createError({
    statusCode: 400,
    statusMessage: "Bad request",
  });
});
