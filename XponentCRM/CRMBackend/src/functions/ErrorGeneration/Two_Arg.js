module.exports = (err, httpStatusCode) => {
  var error = new Error (err);
  error.httpStatusCode = httpStatusCode;

  return error;
};
