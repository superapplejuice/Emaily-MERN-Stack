const { stripeSecretKey } = require("../config/keys");
const stripe = require("stripe")(stripeSecretKey);

module.exports = app => {
  // token goes here after user makes a payment
  app.post("/api/stripe", (req, res) => {
    const { amount, token } = req.body;

    stripe.charges.create({
      amount: amount,
      currency: "usd",
      source: token.id,
      description: `Charge for ${token.email}`
    });
  });
};
