import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { OtherExperience } from "@/components/OtherExperience";
import { Contact } from "@/components/Contact";

import AnimatedBackground from "@/components/react-bits/AnimatedBackground";

export default function Home() {
  return (
    <AnimatedBackground>
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <OtherExperience />
        <Contact />
      </div>
    </AnimatedBackground>
  );
}
