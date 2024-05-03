import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/homePage";
import "./layout.scss";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <span> Hello World</span> },
    { path: "/home", element: <span> Home Page</span> },
    { path: "/about", element: <span> About Us</span> },
    { path: "/contact", element: <span> Contact Us</span> },
    { path: "/others", element: <span> Other Info</span> },
    { path: "/agent", element: <span> Agent Info</span> },
    { path: "/sign", element: <span> Sign In</span> },
    { path: "/signout", element: <span> Sign Out</span> },
  ]);

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}
