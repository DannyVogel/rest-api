import { postSchema } from "~/server/validator/posts";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body) return throwError(400);
  // Validate the body against the schema
  const { error } = postSchema.validate(body);
  if (error) return throwError(400, error.details[0].message);
  body.post_id = "101";
  await waitSeconds(1);
  return serverResponse(200, "Post created", [body]);
});
