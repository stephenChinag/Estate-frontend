import "./navbar.scss";
import logo from "../../assets/logo.svg";
import React from "react";

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
        <a href="/agent">Agent</a>
        <a href="/sign">Sign</a>
        <a href="/signout" className="register">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
