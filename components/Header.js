"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import navItems from "@/constants/navItems";
export function Header() {

    // const navItems = [
    //     {
    //       name: "Home",
    //       link: "/",
        
    //     },
    //     {
    //       name: "About",
    //       link: "/about",
         
    //     },
    //     {
    //       name: "Contact",
    //       link: "/contact",
         
    //     },
    //   ];

  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>)
  );
}
const DummyContent = () => {
  return (
      (<div
        >
        <div className="inset-11 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />

    </div>)
  );
};
