export const serverResponse = (
  statusCode: number,
  message?: string,
  payload?: any[] | object | null
) => {
  return {
    statusCode,
    statusMessage: httpStatus[statusCode].statusMessage,
    message,
    payload,
  };
};

export const waitSeconds = async (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));
