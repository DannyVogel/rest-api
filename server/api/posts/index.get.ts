import type { Response, Post } from "~/types";

export default defineEventHandler(async (event): Promise<Response> => {
  let data;
  try {
    data = (await storage.getItem("posts.json")) as Post[];
  } catch (error) {
    throw throwError(500, "Something went wrong");
  }
  if (!data) {
    throw throwError(404, "No posts found");
  }
  await waitSeconds(1);
  return serverResponse(200, "Got all posts", data);
});
