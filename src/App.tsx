import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import UserDasboard from "./pages/UserDashboard/UserDasboard";
import SignUp from "./pages/Signup/Signup";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <UserDasboard />,
    },

    { path: "/login", element: <Login /> },
    { path: "/Signup", element: <SignUp /> },
    { path: "*", element: <Navigate to="/login" /> },
  ]);
  return <RouterProvider router={route} />;
}
