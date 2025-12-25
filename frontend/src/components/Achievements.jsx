import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Achievements = ({ achievements }) => {
  return (
    <Section id="achievements" title="Achievements" subtitle="Highlights">
      <div className="grid md:grid-cols-2 gap-6">
        {achievements?.map((item, index) => (
          <motion.div 
            key={item._id} 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex items-start gap-5 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Hover Gradient (Yellow for Achievements) */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Icon Box */}
            <div className="relative z-10 shrink-0">
              <div className="w-14 h-14 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-2xl border border-yellow-100 dark:border-yellow-800 group-hover:border-yellow-500/30 transition">
                🏆
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;