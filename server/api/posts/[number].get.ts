import type { Response, Post } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const number = getRouterParam(event, "number");
  const response = {} as Response;
  let data;

  if (isNaN(Number(number))) {
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
    const posts = (await storage.getItem("posts.json")) as Post[];
    data = posts.find((post) => post.id === number);
    response.statusCode = 200;
    response.message = `Got the post #${number}`;
    response.payload = [data];
    return response;
  }
});
