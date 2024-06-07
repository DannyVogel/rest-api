import { Post } from "~/types/common.interfaces";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (isNaN(Number(id)) || !body) return throwError(400);

  let posts;

  try {
    posts = (await storage.getItem("posts.json")) as Post[];
  } catch (error) {
    return throwError(500);
  }
  if (!posts) return throwError(404);

  let post = posts.find((post) => post.post_id == id);
  if (!post) return throwError(404);

  post = { ...post, ...body };

  return serverResponse(200, "Post updated successfully", [post]);
});
