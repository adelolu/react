import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/profile"> Profile </Link>
        </li>

        <li>Login</li>

        <li>
          <Link to="/profile/temi">Temi</Link>
        </li>
        <li>
          <Link to="/profile/tola">Tola</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
