export const serverResponse = (
  statusCode: number,
  message: string,
  payload: any[] | null = null
) => {
  return {
    statusCode,
    message,
    payload,
  };
};
