'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';

export default function Home() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showText, setShowText] = useState(false);
  const [typedText, setTypedText] = useState('');
  const skillsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const photoTimer = setTimeout(() => setShowPhoto(true), 1000);
    const textTimer = setTimeout(() => setShowText(true), 2000);

  

    return () => {
      clearTimeout(photoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (showText) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showText]);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-24 flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="z-10 relative flex flex-col items-center justify-center">
          {/* Image */}
          <Link href="/about">
            <div
              className={`mb-8 transition-all duration-1000 ease-out ${
                showPhoto ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <div className="rounded-full overflow-hidden border-2 border-green-400 shadow-lg shadow-green-500/50 h-32 w-32">
                <Image
                  src="/assets/me.jpeg"
                  alt="Aditya Chavan"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Link>


          {/* Description */}
          <div className="mt-8 max-w-2xl text-center text-green-300 opacity-80 transition-opacity duration-1000 delay-1000">
            <p className="mb-6">
              I'm a full-stack developer passionate about building innovative web applications and solving real-world problems.
            </p>
            <p className="mb-6">
              I specialize in creating responsive and user-friendly interfaces using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p className="mb-6">
              I am enthusiastic about Machine learning, deep learning and Generative AI.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/projects" className="px-6 py-2 border border-green-500 hover:bg-green-500/20 transition-all duration-300 rounded">
                View Projects
              </Link>
              <Link href="/contact" className="px-6 py-2 bg-green-500/20 border border-green-500 hover:bg-green-500/30 transition-all duration-300 rounded">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-black border-t border-green-500/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
            <span className="text-green-500">&lt;</span> My Skills <span className="text-green-500">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-900/50 border border-green-500/30 p-6 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> React & Next.js</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> TypeScript</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Tailwind CSS</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Redux</li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-900/50 border border-green-500/30 p-6 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Node.js & Express</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Python, Flask</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> RESTful APIs</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> MongoDB, MySQL, PostgreSQL</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-gray-900/50 border border-green-500/30 p-6 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Tools & Other</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Git & GitHub</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Docker</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> AWS & Vercel</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global CSS */}
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
