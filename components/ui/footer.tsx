// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="py-8 border-t border-green-500/30 text-center text-green-400/70">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Aditya Chavan. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/adchad90" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">GitHub</a>
            <a href="https://www.linkedin.com/in/aditya-chavan-7927a8289/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">Twitter</a>
          </div>
        </div>
      </footer>

    );
  }
  