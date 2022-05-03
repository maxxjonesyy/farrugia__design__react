import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="homepage logo" />
      <nav id="nav">
        <ul id="nav__links">
          <li>
            <Link className="nav__link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/news"}>
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
