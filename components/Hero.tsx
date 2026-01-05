
import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center bg-slate-950">
      {/* Background Parallax Layers */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">
              Available for Hire
            </span>
          </div>
          
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
              {PERSONAL_INFO.name.split(' ')[0]} <br/>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name.split(' ')[1]}
              </span>
            </h1>
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
            I am a <span className="text-white font-medium">{PERSONAL_INFO.title}</span> with 8+ years of experience crafting high-performance digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 flex items-center gap-2"
            >
              Get In Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border border-slate-700 hover:bg-slate-900/50 text-white rounded-xl font-bold transition-all flex items-center gap-2"
            >
              Recent Works
            </a>
          </div>
        </div>

        <div 
          className="flex-1 flex justify-center relative"
          style={{ transform: `translateY(${offsetY * -0.05}px)` }}
        >
          <div className="relative group animate-float">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl">
              {/* Reference your local image here. Simply place a file named 'hero.jpg' in your root directory. */}
              <img 
                src="hero.jpg" 
                alt={PERSONAL_INFO.name}
                className="w-72 h-80 md:w-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                // onError={(e) => {
                //   // This fallback kicks in if hero.jpg is not found
                //   (e.target as HTMLImageElement).src = "https://picsum.photos/seed/balvinder_singh/600/800";
                // }}
              />
              
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Status Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-white text-sm font-bold tracking-tight">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Explore</span>
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-1.5 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
