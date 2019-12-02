const { stripeSecretKey } = require('../config/keys')
const stripe = require('stripe')(stripeSecretKey)
const requireLogin = require('../middleware/requireLogin')

module.exports = app => {
  // token goes here after user makes a payment
  // ensure that the user is authenticated before they can access this route
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const { amount, token } = req.body

    // stripe methods return a promise
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token.id,
      description: `Charged ${amount} cents to ${token.email} for survey credits.`
    })

    // `req.user` accesses the current user model (initialized by passport)
    switch (amount) {
      case 499:
        req.user.credits += 5
        break

      case 949:
        req.user.credits += 10
        break

      case 1799:
        req.user.credits += 20

      default:
        req.user.credits += 0
    }

    // save and overwrite the current user's model with the updated one
    const User = await req.user.save()

    // respond to the request with the updated user
    res.send(User)
  })
}
