import "./App.css";
//import { Button } from "./components/ui/button";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  createBrowserRouter([{ path: "/", element: <Home /> }]);
  return <div>Hello</div>;
}

export default App;
