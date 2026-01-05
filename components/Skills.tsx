
import React, { useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['All', 'Frontend', 'Backend', 'Cloud/DevOps', 'Tools'] as const;
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Technical Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div 
            key={skill.name}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-all group"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-semibold text-lg">{skill.name}</span>
              <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full transition-all duration-1000 group-hover:scale-x-105 origin-left"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="text-slate-500 text-xs mt-3 uppercase tracking-widest">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
