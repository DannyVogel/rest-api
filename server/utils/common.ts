export const serverResponse = (
  statusCode: number,
  message: string,
  payload: any[] | object | null = null
) => {
  return {
    statusCode,
    message,
    payload,
  };
};

export const waitSeconds = async (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));
