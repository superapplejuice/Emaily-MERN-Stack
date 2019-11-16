import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const loginStatus = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <Fragment>
            <li>
              <Link to="/auth/google">Login with Google</Link>
            </li>
            <li>
              <Link to="/auth/facebook">Login with Facebook</Link>
            </li>
          </Fragment>
        );
      default:
        return (
          <li>
            <Link to="/api/logout">Logout</Link>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="left brand-logo" to="/">
          Emaily
        </Link>
        <ul className="right">{loginStatus()}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
