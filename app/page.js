import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import navItems from "@/constants/navItems";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-clip mx-auto ">
      <div className="w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <About />
        <Project/>
        <Skills />
        <Experience />
        <Blogs />
        <Contact />
      </div>
    </main>
  );
}
