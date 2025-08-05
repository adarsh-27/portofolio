"use client"
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import PercentageLoader from "@/components/PercentageLoader";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import navItems from "@/constants/navItems";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

   if (isLoading) {
    return <PercentageLoader />;
  }

  return (
    <main className="bg-black text-white overflow-clip mx-auto ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Project />
        <Skills />
        <Experience />
        <Blogs />
        <Contact />
      </div>
    </main>
  );
}
