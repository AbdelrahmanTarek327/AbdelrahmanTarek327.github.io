import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import LoadingScreen from "@/components/common/LoadingScreen";
import CustomCursor from "@/components/common/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
