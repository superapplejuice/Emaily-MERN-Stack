// middleware to require login on specific routes
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must be logged in to do that!" });
  }

  // call next() when the middleware has completed running
  next();
};
