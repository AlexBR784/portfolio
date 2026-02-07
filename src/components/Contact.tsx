"use client";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center bg-[#131920] w-full h-full mt-5 mb-5 border-l-4 border-[#00ff88] shadow-xl mx-4 font-[family-name:var(--font-jetbrains)] p-5 gap-4 sm:gap-0">
      {/* Contact Header */}
      <div className="flex items-center gap-3">
        <span className="text-[#00ff88] text-sm font-mono">{'// '}</span>
        <h2 className="text-[#e4e4e7] text-base uppercase tracking-widest font-bold">
          Contact.ts
        </h2>
        <motion.span 
          className="text-[#00ff88] text-sm"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          _
        </motion.span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {/* GitHub */}
        <motion.button
          onClick={() => window.open("https://github.com/alexbr784", "_blank")}
          className="group relative bg-[#0a0e14] border border-[#1f2937] hover:border-[#00ff88] p-2.5 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#71717a] group-hover:text-[#00ff88] transition-colors duration-300"
          >
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0a0e14] border border-[#00ff88] px-2 py-1 text-[#00ff88] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            GitHub
          </div>
        </motion.button>

        {/* LinkedIn */}
        <motion.button
          onClick={() =>
            window.open(
              "https://linkedin.com/in/alejandro-bernardo-rupérez-810905227/",
              "_blank"
            )
          }
          className="group relative bg-[#0a0e14] border border-[#1f2937] hover:border-[#00d9ff] p-2.5 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#71717a] group-hover:text-[#00d9ff] transition-colors duration-300"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0a0e14] border border-[#00d9ff] px-2 py-1 text-[#00d9ff] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            LinkedIn
          </div>
        </motion.button>

        {/* Status indicator */}
        <div className="hidden sm:flex items-center gap-2 ml-2 text-xs font-mono text-[#71717a]">
          <motion.div
            className="w-2 h-2 bg-[#00ff88] rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(0, 255, 136, 0.7)',
                '0 0 0 4px rgba(0, 255, 136, 0)',
              ]
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <span>Available</span>
        </div>
      </div>

      {/* Bottom terminal line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30"></div>
    </footer>
  );
}
