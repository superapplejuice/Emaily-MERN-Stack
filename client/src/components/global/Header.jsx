import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="left brand-logo" to="/">
          Emaily
        </Link>
        <ul className="right">
          <li>
            <a>Login with Google</a>
          </li>
          <li>
            <a>Login with Facebook</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
