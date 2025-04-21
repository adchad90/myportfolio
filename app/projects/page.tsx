'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  useEffect(() => {
    // Animate cards appearing one after another
    const timers = visibleCards.map((_, index) => {
      return setTimeout(() => {
        setVisibleCards(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 300 * (index + 1));
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const projects = [
    {
      title: "JoBBit: an AI Interview prep website",
      description: "A web application that helps users prepare for interviews using Vapi.",
      image: "/assets/proj4.png",
      techStack: ["Next.js", "TailwindCSS", "Firebase", "Vapi", "Vercel"],
      github: "https://github.com/username/ai-image-generator",
      website: "https://ai-image-generator.vercel.app"
    },
    {
      title: "College Gate Management System",
      description: "A smart solution that helps maintain records of people, vehicles entering and exiting campus. Instead of maintaing multiple registers, everything is contained in a single database",
      image: "/assets/proj2.png", 
      techStack: ["Next.js", "Express", "PostgreSQL", "RESTful API"],
      github: "https://github.com/Tanish2207/vjti-gms",
      website: "https://vjti-gms.vercel.app"
    },
    {
      title: "Gaming Chronicles",
      description: "A website for gaming enthusiasts to share their experiences and reviews.",
      image: "/assets/proj3.png",
      techStack: ["React.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/aitwehrrg/Web-Dev-Assignment-6",
      website: "https://gaming-chronicles.vercel.app"
    },
    {
      title: "Restaurant billing system",
      description: "An application to generate bills in a restaurant.",
      image: "/assets/proj5.png",
      techStack: ["Python", "SQLite", "tkinter"],
      github: "https://github.com/username/ai-image-generator",
      website: "https://ai-image-generator.vercel.app"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navbar />
      
      <main className="container mx-auto pt-24 pb-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-green-500">&lt;</span> My Projects <span className="text-green-500">/&gt;</span>
        </h1>
        
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`border border-green-500/30 rounded-lg overflow-hidden bg-gray-900/50 shadow-lg transition-all duration-700 ease-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Project Image */}
              <div className="w-full h-64 relative border-b border-green-500/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-green-300">{project.title}</h3>
                
                <p className="mb-4 text-green-200/80">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm text-green-500 mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 border border-green-500 hover:bg-green-500/20 transition-all duration-300 rounded flex items-center text-sm"
                  >
                    <span className="mr-2">&#60;/&#62;</span> GitHub Repo
                  </a>
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-green-500/20 border border-green-500 hover:bg-green-500/30 transition-all duration-300 rounded flex items-center text-sm"
                  >
                    <span className="mr-2">▶</span> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        body {
          background-color: #000;
          color: #4ade80;
          font-family: 'Share Tech Mono', monospace;
        }

        ::selection {
          background-color: rgba(74, 222, 128, 0.3);
        }
      `}</style>
    </div>
  );
}