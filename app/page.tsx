'use client';

import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { OtherExperience } from "@/components/OtherExperience";
import { Contact } from "@/components/Contact";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="fixed  w-full h-full pointer-events-none z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className=""
        />
      </div>
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <OtherExperience />
        <Contact />
      </div>
    </div>
  );
}
