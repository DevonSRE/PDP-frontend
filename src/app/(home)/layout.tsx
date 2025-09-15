import { Footer } from "@/features/home/components/footer";
import { NavBar } from "@/features/home/components/nav-bar";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-poppins">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

