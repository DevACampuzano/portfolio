"use client";

import { useEffect, useState } from "react";
import {
  AboutMe,
  AnimatedBackground,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Hero,
} from "@/components/schema";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500">
      <AnimatedBackground />

      <Header isVisible={isVisible} />

      <Hero isVisible={isVisible} />

      <AboutMe />
      {/* <Skills /> */}

      <Experience />

      <Education />

      {/* <Projects /> */}

      <Contact />

      <Footer />
    </div>
  );
}
