// src/components/Hero.jsx
import React from 'react';
import { urlFor } from '../client';

// 1. Changed ({ data }) to ({ about }) to match App.jsx
const Hero = ({ about }) => {
  
  // 2. Updated the safety check
  if (!about) return null;

  return (
    <section id="hero" className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-fade-in">
      {/* Dynamic Profile Picture */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        {/* 3. Added a check to ensure image exists before trying to load it */}
        {about.profileImage && (
            <img 
            src={urlFor(about.profileImage).width(400).url()} 
            alt={about.name} 
            className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
            />
        )}
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {/* 4. Changed data.name to about.name */}
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{about.name}</span>
      </h1>
      
      <p className="text-2xl font-medium text-gray-600 dark:text-gray-300">
        {about.role}
      </p>
      
      <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
        {about.bio}
      </p>

      <div className="flex gap-4 mt-4">
        <a href="#contact" className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/50">
          Contact Me
        </a>
        <a href="#projects" className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          View Work
        </a>
      </div>
    </section>
  );
};

export default Hero;