import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-arctic-bg">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
