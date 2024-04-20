import "./App.css";
//import { Button } from "./components/ui/button";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import RootLayout from "./components/Layout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "user-profile", element: <User /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
