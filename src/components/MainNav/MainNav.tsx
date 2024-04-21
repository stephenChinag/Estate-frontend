import Hero from "../Hero/Hero";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function MainNav() {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate("/login");
        }}
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button>
    </>
  );
}
