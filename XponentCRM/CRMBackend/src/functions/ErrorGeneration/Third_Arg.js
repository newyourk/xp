module.exports = (err, httpStatusCode1, httpStatusCode2) => {
  var error = new Error (err);
  if (httpStatusCode1) error.httpStatusCode = httpStatusCode1;
  else error.httpStatusCode = httpStatusCode2;

  return error;
};
