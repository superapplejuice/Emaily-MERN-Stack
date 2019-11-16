import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Payments from "./Payments";

const Header = ({ auth }) => {
  const credits = 0;

  const loginStatus = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <Fragment>
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
            <li>
              <a href="/auth/facebook">Login with Facebook</a>
            </li>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <li>
              <Link>Credits: {credits}</Link>
            </li>
            <li>
              <Payments />
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="left brand-logo" to={auth ? "/dashboard" : "/"}>
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
