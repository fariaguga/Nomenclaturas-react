import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/servers">Servers</Link>
        </li>
        <li>
          <Link to="/databases">Databases</Link>
        </li>
        { /*
        <li>
          <Link to="/hour_control">Control Panel</Link>
        </li>
        */ }
      </ul>
    </nav>
  );
}

export default Navbar;