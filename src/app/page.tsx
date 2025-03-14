import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <Contact />
    </main>
  );
}
