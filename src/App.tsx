import React, { useRef } from "react";
import Hero from "./Sections/Hero";
import AboutMe from "./Sections/AboutMe";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import WhatIDo from "./Sections/WhatIDo";

export default function App() {
  // Properly type the ref as a section element
  const whatIDoRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-white">
        {/* Pass the ref down to Hero */}
        <Hero nextSectionRef={whatIDoRef} />
        <WhatIDo ref={whatIDoRef} />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
