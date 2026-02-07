"use client";
import { getPath } from "@/utils/path";
import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  "AI-Associate",
  "Associate",
  "JavaScript-Developer",
  "OmniStudio-Developer",
  "Platform-Developer-I",
  "Salesforce-Certified-Administrator",
  "Salesforce-Certified-Platform-App-Builder-Badge",
];

export function Experience() {
  // Duplicamos las certificaciones para crear el efecto de bucle infinito
  const certsDupe = [...certs, ...certs, ...certs];

  return (
    <div id="experience" className="flex flex-col justify-center bg-[#131920] w-full h-full mt-5 border-l-4 border-[#ffeb3b] shadow-xl mx-4 font-[family-name:var(--font-jetbrains)]">
      {/* Section Header */}
      <div className="flex items-center gap-3 px-6 pt-6 mb-4">
        <span className="text-[#ffeb3b] text-sm font-mono">{'['}</span>
        <h2 className="text-[#e4e4e7] text-base sm:text-lg uppercase tracking-widest font-bold">
          Certifications
        </h2>
        <span className="text-[#ffeb3b] text-sm font-mono">{']'}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-[#ffeb3b] to-transparent"></div>
      </div>

      {/* Scrolling Certifications */}
      <div className="relative overflow-hidden w-full px-3 pb-6">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#131920] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#131920] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {certsDupe.map((cert, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                {/* Certificate border frame */}
                <div className="absolute inset-0 border border-[#1f2937] group-hover:border-[#ffeb3b] transition-colors duration-300"></div>
                
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#ffeb3b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#ffeb3b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#ffeb3b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#ffeb3b] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="bg-[#0a0e14] p-2">
                  <Image
                    src={getPath(`/images/certis/${cert}.webp`)}
                    alt={cert}
                    width={72}
                    height={72}
                    className="w-16 h-16 sm:w-18 sm:h-18 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Status Bar */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a]">
          <span className="text-[#ffeb3b]">{'// '}</span>
          <span>Loading certifications from API...</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            █
          </motion.span>
        </div>
        <div className="mt-2 h-1 bg-[#1f2937] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#ffeb3b] via-[#00ff88] to-[#00d9ff]"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
