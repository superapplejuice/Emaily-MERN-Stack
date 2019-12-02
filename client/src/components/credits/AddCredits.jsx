import React from 'react'

import Checkout from './Checkout'

const AddCredits = () => {
  const mainStyle = { textAlign: 'center' }

  return (
    <div style={mainStyle}>
      <h4>Select payment:</h4>
      <Checkout payment={5} amount={499} />
      <Checkout payment={10} amount={949} />
      <Checkout payment={20} amount={1799} />
    </div>
  )
}

export default AddCredits
