import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto flex-1 py-10">
        <Outlet />
      </div>
    </div>
  );
}
