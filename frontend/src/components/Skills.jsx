import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  const getSkillsByCategory = (categoryKey) => {
    return skills?.filter((skill) => skill.category === categoryKey) || [];
  };

  const categories = [
    { title: 'Programming Languages', key: 'languages' },
    { title: 'Web Technologies', key: 'web' },
    { title: 'Tools & Platforms', key: 'tools' },
    { title: 'Specializations', key: 'specializations' },
  ];

  return (
    <Section id="skills" title="Skills & Technologies" subtitle="Expertise" className="bg-gray-50 dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, index) => {
          const categorySkills = getSkillsByCategory(category.key);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div 
              key={category.key} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h3 className="relative z-10 text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-blue-500">⚡</span> {category.title}
              </h3>
              
              <div className="relative z-10 space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill._id}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        {/* Optional: If you added icons to skills, you could show them here */}
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden border border-gray-200 dark:border-gray-600">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full" 
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;