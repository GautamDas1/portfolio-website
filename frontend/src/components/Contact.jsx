import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Contact = ({ about }) => {
  if (!about) return null;

  return (
    <Section 
      id="contact" 
      title="Let's Work Together" 
      subtitle="Get in Touch"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 mt-10">
        
        {/* Left Side: Premium Contact Cards */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out! I'm always open to discussing new projects and opportunities.
          </p>

          {/* Email Card */}
          <ContactCard 
            href={`mailto:${about.email}`}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
            title="Email"
            value={about.email}
            color="text-blue-600 dark:text-blue-400"
            bgColor="bg-blue-50 dark:bg-blue-900/20"
          />

          {/* LinkedIn Card */}
          {about.linkedin && (
            <ContactCard 
              href={about.linkedin}
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
              title="LinkedIn"
              value="Connect on LinkedIn"
              color="text-blue-700 dark:text-blue-400"
              bgColor="bg-blue-50 dark:bg-blue-900/20"
            />
          )}

           {/* GitHub Card */}
           {about.github && (
            <ContactCard 
              href={about.github}
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
              title="GitHub"
              value="View Projects"
              color="text-gray-700 dark:text-gray-300"
              bgColor="bg-gray-100 dark:bg-gray-800"
            />
          )}
        </motion.div>

        {/* Right Side: Form (Styled Container) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
        >
          {/* Subtle Form Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <form action="https://formspree.io/f/xlgrkawp" method="POST" className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input type="text" name="subject" required placeholder="What's this about?" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea name="message" rows="4" required placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:scale-[1.02] transition duration-300">Send Message</button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

// Reusable Premium Card Component for Contact Links
const ContactCard = ({ href, icon, title, value, color, bgColor }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="group relative flex items-center gap-5 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
  >
    {/* Hover Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

    <div className={`relative z-10 shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${bgColor} ${color} border border-transparent group-hover:border-blue-500/30 transition`}>
      {icon}
    </div>
    <div className="relative z-10 flex-1">
      <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{value}</p>
    </div>
    <div className="relative z-10 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1 duration-300">
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </div>
  </motion.a>
);

export default Contact;