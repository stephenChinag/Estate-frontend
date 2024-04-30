// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Documents from "./pages/Document/Documents";
import Shared from "./pages/Shared/Shared";
import Setting from "./pages/Setting/Setting";
import Dashboard from "./pages/Dashboard/Dashboard";
import Siderbar from "./components/Sidebar/Siderbar";

export default function App() {
  const route = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/Signup", element: <SignUp /> },
    {
      path: "/",
      element: <Siderbar />,

      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "document",
          element: <Documents />,
        },
        {
          path: "shared",
          element: <Shared />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}
