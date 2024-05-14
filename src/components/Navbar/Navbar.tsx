import "./navbar.scss";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";
import step from "../../assets/steph.jpg";
import { Link } from "react-router-dom";
import menu from "/menu.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="estate logo" />
          <span>Zama dev</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/others">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={step} />
            <span> Stephen Chinag</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Sign up</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/sign">Sign In</Link>
            <Link to="/signout" className="register">
              Sign up
            </Link>
          </>
        )}

        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src={menu} alt="burgerIcon" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/others">Agents</Link>
          <Link to="/agent">Agent</Link>
          <Link to="/sign">Sign In</Link>
          <Link to="/signout">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
