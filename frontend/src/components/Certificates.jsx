import React from 'react';
import Section from './Section';
import { urlFor } from '../client';
import { motion } from 'framer-motion';

const Certificates = ({ certificates }) => {
  return (
    <Section id="certificates" title="Certificates" subtitle="Credentials">
      <div className="grid md:grid-cols-2 gap-6">
        {certificates?.map((cert, index) => (
          <motion.a 
            key={cert._id} 
            href={cert.link} 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex items-center gap-5 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Hover Gradient Background (Subtle Glow) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Left Side: Certificate Image */}
            <div className="relative z-10 shrink-0">
              <div className="w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-900 p-2 border border-gray-100 dark:border-gray-700 group-hover:border-blue-500/30 transition">
                {cert.image ? (
                  <img 
                    src={urlFor(cert.image).width(100).url()} 
                    alt={cert.title} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl">📜</div>
                )}
              </div>
            </div>

            {/* Middle: Content */}
            <div className="relative z-10 flex-1">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                {cert.issuer}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded">
                  {cert.date}
                </span>
              </div>
            </div>

            {/* Right: External Link Arrow (Animates on Hover) */}
            <div className="relative z-10 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1 duration-300">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
            
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;