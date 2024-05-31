import type { Response } from "~/types/common.interfaces";

export default defineEventHandler(async (event): Promise<Response> => {
  const response = {} as Response;
  const data = await $fetch(`https://jsonplaceholder.typicode.com/posts`);
  response.statusCode = 200;
  response.message = "Got the post";
  response.payload = data as any[];
  return response;
});
