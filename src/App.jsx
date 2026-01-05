import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProblemSolving from "./components/ProblemSolving";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import LightRays from "./ui/LightRays";

function App() {
  return (
    <div className="relative h-full antialiased">
      {/* <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div> */}
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div
        className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto"
      >
        <Navbar />
        <Hero />
        <Projects />
        <ProblemSolving />
        <Skills />
        <WorkExperience />
        <EducationSection />
        <Contact />
      </div>
    </div>
  );
}

export default App;
