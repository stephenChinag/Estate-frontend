import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <SignUp /> },
  ]);
  return <RouterProvider router={route} />;
}
