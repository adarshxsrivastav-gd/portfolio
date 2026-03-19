import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AIToolkit from "@/components/AIToolkit";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <ScrollyCanvas frameCount={120} />
        {/* Overlay is fixed to viewport and controls its own opacity based on scroll */}
        <Overlay />
      </div>
      
      {/* CV Content Sections */}
      <About />
      <Expertise />
      <Experience />
      <Skills />
      <AIToolkit />
      <Contact />
    </main>
  );
}
