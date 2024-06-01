import type { Response, Post } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const response = {} as Response;
  let data;
  try {
    data = (await storage.getItem("posts.json")) as Post[];
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: "No posts found",
    });
  }
  response.statusCode = 200;
  response.message = "Got all posts";
  response.payload = data;
  return response;
});
