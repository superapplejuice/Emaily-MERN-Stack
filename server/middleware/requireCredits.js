// middleware to require credits on specific routes
module.exports = (req, res, next) => {
  if (req.user.credits <= 0) {
    return res.status(403).send({ error: 'You need credits to do that!' })
  }

  // call next() when the middleware has completed running
  next()
}
