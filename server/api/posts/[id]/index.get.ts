import type { Response, Post } from "~/types/common.interfaces";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (isNaN(Number(id))) return throwError(400);

  let posts;

  try {
    posts = (await storage.getItem("posts.json")) as Post[];
  } catch (error) {
    return throwError(500);
  }
  if (!posts) return throwError(404);

  const post = posts.find((post) => post.post_id === id);
  if (!post) return throwError(404, `No post found with id: ${id}`);
  await waitSeconds(1);
  return serverResponse(200, "Post found", post);
});
