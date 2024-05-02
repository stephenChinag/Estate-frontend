import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";

export default function App() {
  const root = createBrowserRouter([
    { path: "/", element: <span> Hello</span> },
  ]);
  return (
    <div className="layout">
      <Navbar />
      <RouterProvider router={root} />
    </div>
  );
}
