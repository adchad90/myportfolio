'use client';

import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import '@/app/globals.css';


export default function ContactPage() {
  return (
    <>
      <section id="contact" className="py-20 px-4 bg-black text-green-400">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-green-500">&lt;</span> Contact Me <span className="text-green-500">/&gt;</span>
          </h2>
          <p className="mb-8 opacity-100 text-green-300">
            Feel free to reach out if you're interested in working together or just want to connect!
          </p>
          <form
            action={process.env.NEXT_PUBLIC_FORM_ENDPOINT} 
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-transparent border border-green-400 rounded placeholder-green-300"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-transparent border border-green-400 rounded placeholder-green-300"
            />
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-transparent border border-green-400 rounded placeholder-green-300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

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
    </>
  );
}
