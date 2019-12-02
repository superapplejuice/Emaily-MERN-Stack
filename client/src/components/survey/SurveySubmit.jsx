import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import history from '../history'

const SurveySubmit = () => {
  const mainStyle = { textAlign: 'center' }

  useEffect(() => {
    setTimeout(() => {
      history.push('/dashboard')
    }, 5 * 1000)
  }, [])

  return (
    <div style={mainStyle}>
      <h3>Survey sent!</h3>
      <div>
        Thanks for using Emaily. Your recipients will receive your survey
        shortly...
      </div>
      <Link to='/dashboard'>
        Click here if you're not automatically redirected to the Dashboard
      </Link>
    </div>
  )
}

export default SurveySubmit
