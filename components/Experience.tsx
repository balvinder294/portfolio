
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={exp.id}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-900 -translate-x-1/2 z-10 hidden sm:block" />
            
            <div className="flex-1 w-full pl-8 md:pl-0">
              <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/60 transition-all hover:border-blue-500/30 group">
                <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-bold rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
            
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
