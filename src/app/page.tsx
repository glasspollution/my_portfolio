import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { NavigationDock } from "@/components/NavigationDock";

export default function Home() {
  return (
    <main className="bg-white relative">
      <Hero />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <Contact />
      <NavigationDock />
    </main>
  );
}
