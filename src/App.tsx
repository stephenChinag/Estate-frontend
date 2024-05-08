import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/homePage";
import "./layout.scss";
import ListPage from "./pages/listPage/listPage";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/list", element: <ListPage /> },
    { path: "/others", element: <span> Other Info</span> },
    { path: "/agent", element: <span> Agent Info</span> },
    { path: "/sign", element: <span> Sign In</span> },
    { path: "/signout", element: <span> Sign Out</span> },
  ]);

  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
}
