import "./navbar.scss";
import logo from "../../assets/logo.svg";
import React from "react";
import menu from "/menu.png";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="estate logo" />
          <span>Zama dev</span>
        </a>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/others"> Agents</a>
      </div>
      <div className="right">
        <a href="/sign">Sign In</a>
        <a href="/signout" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img src={menu} alt="burgerIcon" />
        </div>
        <div className="menu">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/others"> Agents</a>
          <a href="/agent">Agent</a>
          <a href="/sign">Sign In</a>
          <a href="/signout" className="register">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
