import type { Response, Post } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const response = {} as Response;
  try {
    const data = (await storage.getItem("posts.json")) as Post[];
    response.statusCode = 200;
    response.message = "Got all posts";
    response.payload = data;
    return response;
  } catch (error) {
    response.statusCode = 500;
    response.message = `Failed to get all posts: ${error}`;
    response.payload = [];
    return response;
  }
});
