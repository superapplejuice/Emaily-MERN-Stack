import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'

import { handleTokenAction } from '../../redux/actions'

const Checkout = props => {
  const { payment, amount, handleTokenAction } = props

  return (
    <div>
      <StripeCheckout
        name='Emaily'
        description={`Add ${payment} credits to your account.`}
        // cents
        amount={amount}
        currency='USD'
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        // callback after successful payment
        token={token => handleTokenAction({ token, amount })}
      >
        <button className='btn'>{`Add ${payment} Credits`}</button>
      </StripeCheckout>
    </div>
  )
}

export default connect(undefined, { handleTokenAction })(Checkout)
