const { stripeSecretKey } = require("../config/keys");
const stripe = require("stripe")(stripeSecretKey);

module.exports = app => {
  // token goes here after user makes a payment
  app.post("/api/stripe", async (req, res) => {
    const { amount, token } = req.body;

    // stripe methods return a promise
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      source: token.id,
      description: `Charged ${amount} cents to ${token.email} for survey credits.`
    });

    console.log(charge);
  });
};
