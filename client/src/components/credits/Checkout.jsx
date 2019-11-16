import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ payment, amount }) => {
  return (
    <StripeCheckout
      name="Emaily"
      description={`Add ${payment} credits to your account.`}
      // cents
      amount={amount}
      currency="USD"
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      // callback after successful payment
      token={token => console.log(token)}
    >
      <button className="btn">{`Add ${payment} Credits`}</button>
    </StripeCheckout>
  );
};

export default Checkout;
