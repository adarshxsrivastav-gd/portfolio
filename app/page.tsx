import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AIToolkit from "@/components/AIToolkit";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <ScrollyCanvas frameCount={120} />
        {/* Overlay is fixed to viewport and controls its own opacity based on scroll */}
        <Overlay />
      </div>
      
      <Stats />
      
      {/* CV Content Sections */}
      <About />
      <Brands />
      <SelectedWork />
      <Expertise />
      <Experience />
      <Skills />
      <AIToolkit />
      <Contact />
    </main>
  );
}

