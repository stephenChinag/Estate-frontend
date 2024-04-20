import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span> Welcome to Labisi Food .cm</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            className="flex-1 font-bold bg-orange-500"
          >
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
