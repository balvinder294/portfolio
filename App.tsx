
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative antialiased">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="py-20 bg-slate-900">
          <About />
        </section>

        <section id="skills" className="py-20 bg-slate-950">
          <Skills />
        </section>

        <section id="experience" className="py-20 bg-slate-900">
          <Experience />
        </section>

        <section id="projects" className="py-20 bg-slate-950">
          <Projects />
        </section>

        <section id="contact" className="py-20 bg-slate-900">
          <Contact />
        </section>
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Balvinder Singh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
