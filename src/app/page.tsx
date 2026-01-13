"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import MouseFollower from "@/components/ui/MouseFollower";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <MouseFollower />

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 glass-panel border-x-0 border-b-0">
        <p>© {new Date().getFullYear()} Shruti Dhameliya. Crafted with passion & code.</p>
      </footer>
    </main>
  );
}