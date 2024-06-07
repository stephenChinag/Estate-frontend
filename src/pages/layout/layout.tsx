import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./layout.scss";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export default function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  // const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to={"/login"} />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
