export const throwError = (errorCode: number, message: string = "") => {
  const error = { ...httpStatus[errorCode] };
  if (message) error.message = message;
  throw createError(error);
};
