export default defineEventHandler(async (event) => {
  console.log("New request: " + getRequestURL(event));
  console.log("From origin: " + getRequestHeader(event, "Origin"));
  // TODO: log to actual database (supabase?)
});
