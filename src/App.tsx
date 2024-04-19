import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <Button
      onClick={() => {
        console.log("Clicked");
      }}
    >
      {" "}
      Click Me
    </Button>
  );
}

export default App;
