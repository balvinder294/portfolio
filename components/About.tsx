
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Professional Summary
          </h3>
          <p className="text-slate-300 leading-relaxed text-lg italic">
            "{PERSONAL_INFO.summary}"
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-500/30">
              <span className="text-2xl font-bold text-blue-400">8+</span>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">Years of Experience</h4>
              <p className="text-slate-400">Successfully delivering software for startups and MNCs.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center border border-indigo-500/30">
              <span className="text-2xl font-bold text-indigo-400">20+</span>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">Projects Completed</h4>
              <p className="text-slate-400">From Banking modernization to Open Source crypto tools.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-500/30">
              <span className="text-xl font-bold text-purple-400">Full</span>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">Stack Expertise</h4>
              <p className="text-slate-400">Proficient in React, Node.js, and Java/Spring Boot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
