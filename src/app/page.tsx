import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Formation from "@/components/sections/Formation";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Formation />
      <Certifications />
      <Projects />
      <CaseStudies />
      <Contact />
    </main>
  );
}