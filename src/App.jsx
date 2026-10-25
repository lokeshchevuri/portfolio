import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CommunityLogs from './components/CommunityLogs';
import ExperienceEducation from './components/ExperienceEducation';
import TerminalContact from './components/TerminalContact';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark class on documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0c] text-[#ededed]' : 'bg-[#fbfbfb] text-[#111215]'}`}>
      {/* Top Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Area */}
      <main>
        {/* Section 00: Hero & Biometrics */}
        <Hero />

        {/* Section 01: Engineering Manifesto & Linux Workflow */}
        <Reveal>
          <Philosophy />
        </Reveal>

        {/* Section 02: Projects & Architecture (Dhwani Sutra, Bus Pass, Agrimitra, Dark Maze) */}
        <Reveal>
          <Projects />
        </Reveal>

        {/* Section 03: Skills Matrix & Stack Breakdown */}
        <Reveal>
          <Skills />
        </Reveal>

        {/* Section 04: Engineering Logs & LinkedIn Dissections */}
        <Reveal>
          <CommunityLogs />
        </Reveal>

        {/* Section 05: Experience, Education (Sri Vasavi Eng, CGPA 8.89) & Credentials */}
        <Reveal>
          <ExperienceEducation />
        </Reveal>

        {/* Section 06: Terminal CLI & Direct Contact */}
        <Reveal>
          <TerminalContact />
        </Reveal>
      </main>

      {/* Footer & System Status */}
      <Footer />
    </div>
  );
}
