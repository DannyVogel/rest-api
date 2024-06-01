export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body) return throwError(400);
  return serverResponse(200, "Post created", body);
});
