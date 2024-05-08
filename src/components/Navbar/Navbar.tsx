import "./navbar.scss";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import menu from "/menu.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false); // Ensure type safety

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          {" "}
          {/* Replace 'a' with 'Link' */}
          <img src={logo} alt="estate logo" />
          <span>Zama dev</span>
        </Link>
        <Link to="/">Home</Link> {/* Replace 'a' with 'Link' */}
        <Link to="/about">About</Link> {/* Replace 'a' with 'Link' */}
        <Link to="/contact">Contact</Link> {/* Replace 'a' with 'Link' */}
        <Link to="/others">Agents</Link> {/* Replace 'a' with 'Link' */}
      </div>
      <div className="right">
        <Link to="/sign">Sign In</Link> {/* Replace 'a' with 'Link' */}
        <Link to="/signout" className="register">
          Sign up
        </Link>{" "}
        {/* Replace 'a' with 'Link' */}
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src={menu} alt="burgerIcon" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/home">Home</Link> {/* Replace 'a' with 'Link' */}
          <Link to="/about">About</Link> {/* Replace 'a' with 'Link' */}
          <Link to="/contact">Contact</Link> {/* Replace 'a' with 'Link' */}
          <Link to="/others">Agents</Link> {/* Replace 'a' with 'Link' */}
          <Link to="/agent">Agent</Link> {/* Replace 'a' with 'Link' */}
          <Link to="/sign">Sign In</Link> {/* Replace 'a' with 'Link' */}
          <Link to="/signout">Sign up</Link> {/* Replace 'a' with 'Link' */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
