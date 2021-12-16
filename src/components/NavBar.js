import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">
            My Bar
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/build">
            Bar <br />Builder
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/cocktails">
            My <br />Cocktails
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/drink">
            Find a <br />Cocktial
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/random">
            Random <br /> Cocktail
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
