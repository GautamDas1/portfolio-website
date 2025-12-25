import React, { useState } from 'react';
import { urlFor } from '../client';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ about }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Prevent scrolling on the body when modal is open
  if (typeof window !== 'undefined') {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  if (!about) return null;

  return (
    <>
      <section id="hero" className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-fade-in relative z-10">
        
        {/* Dynamic Profile Picture */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          {about.profileImage && (
              <img 
              src={urlFor(about.profileImage).width(400).url()} 
              alt={about.name} 
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
          )}
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{about.name}</span>
        </h1>
        
        <p className="text-2xl font-medium text-gray-600 dark:text-gray-300">
          {about.role}
        </p>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          {about.bio}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          
          <a href="#contact" className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/50">
            Contact Me
          </a>

          {/* View Resume Button (Triggers Popup) */}
          {about.resumeURL && (
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </button>
          )}

          <a href="#projects" className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            View Work
          </a>
        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* 📄 FULL SCREEN RESUME POPUP MODAL */}
      {/* ------------------------------------------- */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 md:p-4"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
              // 👇 THIS LINE MAKES IT FULL SIZE (95% of screen width and height)
              className="bg-white dark:bg-gray-900 w-[80vw] h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shrink-0">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                  📄 {about.name}'s Resume
                </h3>
                
                <div className="flex gap-4">
                  {/* Download Button */}
                  <a 
                    href={`${about.resumeURL}?dl=${about.name}_Resume.pdf`}
                    className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download
                  </a>

                  {/* Close Button */}
                  <button 
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 text-gray-500 hover:text-white hover:bg-red-500 rounded-full transition duration-300"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              </div>

              {/* PDF Previewer - Takes up all remaining space */}
              <div className="flex-1 bg-gray-200 dark:bg-gray-900 relative w-full h-full">
                <iframe 
                  src={`${about.resumeURL}#view=FitH`} // Tries to fit width
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;