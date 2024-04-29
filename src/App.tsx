// import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./styles/main.scss";
import Siderbar from "./components/Sidebar/Siderbar";
import UserDasboard from "./pages/UserDashboard/UserDasboard";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Documents from "./pages/Document/Documents";
import Shared from "./pages/Shared/Shared";
import Setting from "./pages/Setting/Setting";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  const route = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/Signup", element: <SignUp /> },
    {
      path: "/",
      element: <UserDasboard />,

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
