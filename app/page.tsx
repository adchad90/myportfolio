'use client';

import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../public/assets/me.jpeg'; // make sure this path is correct

export default function Home() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [matrixColumns, setMatrixColumns] = useState<any[]>([]);
  const fullText = 'hello world;\nI am Aditya Chavan';

  useEffect(() => {
    const photoTimer = setTimeout(() => setShowPhoto(true), 2000);
    const textTimer = setTimeout(() => setShowText(true), 3500);
    const matrixTimer = setTimeout(() => setShowMatrix(true), 6900);
    const buttonTimer = setTimeout(() => setShowButton(true), 8500); // Show button after all other animations

    return () => {
      clearTimeout(photoTimer);
      clearTimeout(textTimer);
      clearTimeout(matrixTimer);
      clearTimeout(buttonTimer);
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

  useEffect(() => {
    if (!showMatrix) return;

    const initColumns = () => {
      const windowWidth = window.innerWidth;
      const columnWidth = 20;
      const numColumns = Math.floor(windowWidth / columnWidth);

      const newColumns = [];
      for (let i = 0; i < numColumns; i++) {
        newColumns.push({
          id: i,
          x: i * columnWidth,
          chars: generateMatrixChars(),
          speed: 2 + Math.random() * 3,
        });
      }
      setMatrixColumns(newColumns);
    };

    const generateMatrixChars = () => {
      const length = 10 + Math.floor(Math.random() * 15);
      const chars = [];
      for (let i = 0; i < length; i++) {
        const charType = Math.random();
        let char;
        if (charType < 0.4) {
          char = String.fromCharCode(33 + Math.floor(Math.random() * 94));
        } else if (charType < 0.7) {
          char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        } else {
          const digits = '0123456789+-*/=><[]{}|~^';
          char = digits[Math.floor(Math.random() * digits.length)];
        }
        chars.push({
          value: char,
          opacity: 0.2 + Math.random() * 0.8,
          highlighted: Math.random() < 0.1,
        });
      }
      return chars;
    };

    initColumns();
    const resizeHandler = () => initColumns();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [showMatrix]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Matrix Rain */}
      {showMatrix && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {matrixColumns.map(column => (
            <div
              key={column.id}
              className="absolute top-0 font-mono text-sm"
              style={{
                left: `${column.x}px`,
                animationDuration: `${column.speed}s`,
              }}
            >
              {column.chars.map((char, idx) => (
                <div
                  key={idx}
                  className={char.highlighted ? 'text-green-300' : 'text-green-500'}
                  style={{
                    opacity: char.opacity,
                    textShadow: char.highlighted
                      ? '0 0 8px #0f0, 0 0 5px #0f0'
                      : '0 0 2px #0f0',
                    animation: 'matrix-fall linear infinite',
                    animationDuration: `${column.speed}s`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  {char.value}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

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
                src={myPhoto}
                alt="Aditya Chavan"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Typing Text */}
        <div
          className={`font-mono text-green-400 text-2xl md:text-4xl tracking-wider transition-opacity duration-500 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            textShadow: '0 0 5px #0f0, 0 0 10px #0f0',
            fontFamily: '"Share Tech Mono", "Courier New", monospace',
            whiteSpace: 'pre-line',
            textAlign: 'center',
          }}
        >
          {typedText}
          <span className="inline-block w-2 h-6 bg-green-400 ml-1 animate-pulse"></span>
        </div>
        
        {/* Click Me Button */}
        <div className={`mt-12 transition-all duration-1000 ease-out ${
          showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <Link href="/about">
            <button 
              className="bg-transparent border-2 border-green-400 hover:bg-green-500 hover:bg-opacity-20 text-green-400 font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 font-mono"
              style={{
                textShadow: '0 0 5px #0f0',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)'
              }}
            >
              Click Me
            </button>
          </Link>
        </div>
      </div>

      {/* Global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(200vh);
          }
        }
      `}</style>
    </main>
  );
}