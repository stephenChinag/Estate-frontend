import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/homePage";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/SinglePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
      ],
    },

    { path: "/others", element: <span> Other Info</span> },
    { path: "/agent", element: <span> Agent Info</span> },
    { path: "/sign", element: <span> Sign In</span> },
    { path: "/signout", element: <span> Sign Out</span> },
  ]);

  return <RouterProvider router={router} />;
}
