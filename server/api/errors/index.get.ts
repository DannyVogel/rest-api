export default defineEventHandler(async (event) => {
  const errorCodes = Object.keys(httpStatus).filter(
    (code) => Number(code) >= 400
  );
  const errorInfo = errorCodes.map((code) => httpStatus[Number(code)]);

  await waitSeconds(1);
  return serverResponse(
    200,
    "Got list of common error status codes successfully!",
    errorInfo
  );
});
