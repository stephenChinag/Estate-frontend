import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import UserDasboard from "./pages/UserDashboard/UserDasboard";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <UserDasboard />,
    },
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "*", element: <Navigate to="/login" /> },
  ]);
  return <RouterProvider router={route} />;
}
