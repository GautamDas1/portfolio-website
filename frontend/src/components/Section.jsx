import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    // 🔴 NOTICE: We use <motion.section>, NOT just <section>
    <motion.section 
      id={id} 
      className={`py-20 px-4 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {subtitle && (
            <span className="block text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase mb-2">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {children}
      </div>
    </motion.section>
  );
};

export default Section;