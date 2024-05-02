import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import React from "react";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="estate logo" />
          <span>Zama dev</span>
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/others">Others</Link>
      </div>
      <div className="right">
        <Link to="/agent">Agent</Link>
        <Link to="/sign">Sign</Link>
        <Link to="/signout">Sign Out</Link>
      </div>
    </nav>
  );
};

export default Navbar;
