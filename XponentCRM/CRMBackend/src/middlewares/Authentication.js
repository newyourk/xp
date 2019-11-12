const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv');

module.exports = (req, res, next) => {
  let error;
  const token = req.header ('auth-token');
  try {
    if (!token) throw Error ('No auth token');
    else {
      const verified = jwt.verify (token, 'secretkey');
      req.user = verified;
      next ();
    }
  } catch (err) {
    error = new Error (err);
    error.httpStatusCode = 400;
    if (!error.message) error.message = 'Invalid Token!';
    return next (error);
  }
};

// const jwt = require ('jsonwebtoken');
// const dotenv = require ('dotenv');

// dotenv.config ();

// module.exports = (req, res, next) => {
//   let error;
//   const bearerHeader = req.headers['auth-token'];
//   if (typeof bearerHeader !== undefined) {
//     try {
//       const bearer = bearerHeader.split (' ');
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       const verified = jwt.verify (token, process.env.TOKEN_SECRET);
//       req.user = verified;
//     } catch (err) {
//       error = new Error (err);
//       error.httpStatusCode = 400;
//       error.message = 'Invalid Token!';
//       return next (error);
//     }
//   } else {
//     console.log ('Bad Token!');
//   }
// };
