/** @format */
const errorMessageList = {
  400: "Bad request",
  401: "Not authorized",
  403: "Firbidden",
  404: "Not found",
  409: "Conflict",
};

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
