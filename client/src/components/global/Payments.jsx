import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payments = () => {
  return (
    <StripeCheckout
      name="Emaily"
      description="5 credits"
      label="Add Credits"
      panelLabel="Pay"
      // cents
      amount={500}
      currency="USD"
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      // callback after successful payment
      token={token => console.log(token)}
    />
  );
};

export default Payments;
