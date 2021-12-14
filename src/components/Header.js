import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";

function Header() {
  return (
    <div id="header">
      <div id="title">Cocktail Assistant</div>
      <NavBar />
      <Login />
    </div>
  );
}

export default Header;
