import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/homePage";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/SinglePage";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/login/login";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "login", element: <Login /> },
        { path: "/profile", element: <Profile /> },
        { path: "/register", element: <Register /> },
      ],
    },

    { path: "/signout", element: <span> Sign Out</span> },
  ]);

  return <RouterProvider router={router} />;
}
