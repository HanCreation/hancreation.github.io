import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import EducationExperience from './components/EducationExperience';
import SkillsAndProjects from './components/SkillsAndProjects';
import Section from './components/Section';

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-[#1D1D1D] text-[#EAE0D5]">
        <Hero />
        <Navbar />
        <EducationExperience />
        <SkillsAndProjects />
        <Section title="Certificates, Courses, and Webinar Attended" />
      </div>
    </ParallaxProvider>
  );
}

export default App;