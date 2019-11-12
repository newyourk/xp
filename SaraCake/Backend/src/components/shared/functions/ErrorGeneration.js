module.exports = (httpStatusCode, message) => {
  let error = new Error ();
  error.message = message;
  error.httpStatusCode = httpStatusCode;

  return error;
};
