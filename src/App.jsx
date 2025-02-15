import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ProblemSolving from './components/ProblemSolving'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationSection from './components/EducationSection'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative h-full antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Navbar />
        <Hero />
        <Projects/>
        <ProblemSolving />
        <Skills />
        {/* <WorkExperience /> */}
        <EducationSection />
        <Contact />
      </div>
    </div>
  )
}

export default App