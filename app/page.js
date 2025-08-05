"use client";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import navItems from "@/constants/navItems";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import GSAPPercentageLoader from "@/components/GSAPPercentageLoader";
import { motion } from "framer-motion";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // preload Spline component as soon as loader starts
    Spline.preload?.();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // return <PercentageLoader />;
    return <GSAPPercentageLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="bg-black text-white overflow-clip mx-auto ">
      <motion.div
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-full"
      >
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Project />
        <Skills />
        <Experience />
        <Blogs />
        <Contact />
      </motion.div>
    </main>
  );
}
