import React, { useState } from 'react';
import Section from './Section';
import { urlFor } from '../client';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects" title="Featured Projects" subtitle="My Portfolio">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project, index) => (
          <motion.div 
            layoutId={`project-${project._id}`}
            key={project._id} 
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Project Image */}
            <div className="h-48 overflow-hidden bg-gray-200 relative z-10">
              {project.image && (
                <img 
                  src={urlFor(project.image).width(500).url()} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {/* Overlay Hint */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold border border-white px-4 py-2 rounded-full backdrop-blur-md">View Details</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech?.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP MODAL (Same as before, keeps functionality) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={`project-${selectedProject._id}`}
              className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full transition backdrop-blur-md"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="overflow-y-auto">
                {selectedProject.image && (
                  <img src={urlFor(selectedProject.image).width(800).url()} alt={selectedProject.title} className="w-full h-64 md:h-80 object-cover"/>
                )}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech?.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                    {selectedProject.projectLink && <a href={selectedProject.projectLink} target="_blank" rel="noreferrer" className="flex-1 text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">View Live Demo 🚀</a>}
                    {selectedProject.repoLink && <a href={selectedProject.repoLink} target="_blank" rel="noreferrer" className="flex-1 text-center px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg transition">GitHub Repo 💻</a>}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;