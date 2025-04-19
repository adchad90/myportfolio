// components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
    const scrollToSkills = () => {
        const skillsSection = document.getElementById('skills-section');
        skillsSection?.scrollIntoView({ behavior: 'smooth' });
      };
      
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50 border-b border-green-500/30 shadow-md shadow-green-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-green-400 font-bold text-xl tracking-wider">
              <span className="text-green-500">&lt;</span>
              AC
              <span className="text-green-500">/&gt;</span>
            </div>
          </Link>
          <div className="flex space-x-15">
          <Link href="/" className="text-green-400 hover:text-green-300 hover:scale-110 hover:underline transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-green-400 hover:text-green-300 hover:underline transition-colors">
              About Me
            </Link>
            <button onClick={scrollToSkills} className="text-green-400 hover:text-green-300 hover:underline transition-colors">
              Skills
            </button>
            <Link href="/projects" className="text-green-400 hover:text-green-300 hover:underline transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-green-400 hover:text-green-300 hover:underline transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
  );
}
