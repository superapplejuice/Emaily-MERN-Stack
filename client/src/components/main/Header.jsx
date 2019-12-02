import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  const loginStatus = () => {
    switch (auth) {
      case null:
        return

      case false:
        return (
          <Fragment>
            <li>
              <a href='/auth/google'>Login with Google</a>
            </li>
            <li>
              <a href='/auth/facebook'>Login with Facebook</a>
            </li>
          </Fragment>
        )

      default:
        return (
          <Fragment>
            <li>
              <Link to='/add_credits'>Credits: {auth.credits}</Link>
            </li>
            <li>
              <a href='/api/logout'>Logout</a>
            </li>
          </Fragment>
        )
    }
  }

  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper'>
          <Link
            className='left brand-logo'
            to={auth ? '/dashboard' : '/'}
            style={{ padding: '0 15px' }}
          >
            Emaily
          </Link>
          <ul className='right'>{loginStatus()}</ul>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
