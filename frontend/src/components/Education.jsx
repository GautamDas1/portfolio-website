import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Education = ({ education }) => {
  return (
    <Section id="education" title="Education" subtitle="ACADEMIC JOURNEY">
      <div className="space-y-10 max-w-4xl mx-auto">
        {education?.map((edu, index) => (
          <div key={edu._id} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            
            {/* Animated Timeline Dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900 shadow-lg"
            ></motion.div>
            
            {/* Premium Card Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content Layer */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {edu.institution}
                </h3>
                
                <p className="text-blue-600 dark:text-cyan-400 font-bold text-lg mt-1 mb-4">
                  {edu.degree}
                </p>
                
                <div className="flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono flex items-center gap-2">
                      <span className="opacity-70">📅</span> 
                      {edu.startDate} - {edu.endDate || 'Present'}
                    </p>
                    
                    {edu.grade && (
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                        GPA: {edu.grade}
                    </span>
                    )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;