import "./navbar.scss";
import logo from "../../assets/logo.svg";
import React, { useContext, useState } from "react";
import noAvatar from "../../assets/noavatar.jpg";
import { Link } from "react-router-dom";
import menu from "/menu.png";
import { AuthContext } from "../../context/AuthContext";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  console.log(currentUser);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="estate logo" />
          <span>Zama Houses</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/others">Agents</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || noAvatar} alt="user avatar" />
            <span> {currentUser.username}</span>

            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/register" className="register">
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
          <Link to="/login">Sign In</Link>
          <Link to="/signout">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
