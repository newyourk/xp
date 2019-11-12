module.exports = Role => {
  return (req, res, next) => {
    if (Role.includes (res.locals.authenticated.access_level)) {
      next ();
    } else {
      res.status (403).json ({
        error: 'Forbidden content.',
      });
    }
  };
};
