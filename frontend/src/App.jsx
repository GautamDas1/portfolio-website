import React, { useEffect, useState } from 'react';
import { client } from './client';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';       // Moved Up // Moved Up
import Skills from './components/Skills';  
import Certificates from './components/Certificates';           // Moved Up
import Projects from './components/Projects';         // Moved Down
import Achievements from './components/Achievements'; // Moved Down
import Contact from './components/Contact';

const App = () => {
  const [data, setData] = useState({
    about: null,
    projects: [],
    skills: [],
    education: [],
    certificates: [],
    achievements: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `{
      "about": *[_type == "about" && defined(name)][0],
      "projects": *[_type == "projects"],
      "skills": *[_type == "skills"],
      "education": *[_type == "education"] | order(startDate desc),
      "certificates": *[_type == "certificates"] | order(date desc),
      "achievements": *[_type == "achievements"]
    }`;

    client.fetch(query)
      .then((fetchedData) => {
        console.log("🔥 DATA:", fetchedData);
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">Loading...</div>;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />
      
      <main>
        {/* 1. About (Hero Section) */}
        <Hero about={data.about} />

         

        {/* 2. Education & Certificates */}
        <Education education={data.education} />

        {/* 3. Skills */}
        <Skills skills={data.skills} />
        
        <Certificates certificates={data.certificates} />

        
        {/* 4. Projects */}
        <Projects projects={data.projects} />
        
        {/* 5. Achievements */}
        <Achievements achievements={data.achievements} />
        
        {/* 6. Contact */}
        <Contact about={data.about} />
      </main>
    </div>
  );
};

export default App;