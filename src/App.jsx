
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteering from './components/Volunteering';
import Skills from './components/Skills';
import Contact from './components/Contact';

import NavbarV2 from './components/NavbarV2';

function App() {
  return (
    <div className="text-slate-200 min-h-screen selection:bg-blue-500/30">
      <NavbarV2 />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Volunteering />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
