import Header from "../Header/Header";
import React from "react";
import Hero from "../Hero/Hero";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />

      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
}
