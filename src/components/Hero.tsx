"use client";
import Image from "next/image";
import { getPath } from "../utils/path";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Alejandro Bernardo";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="#home" className="flex flex-col items-center justify-center px-4 bg-[#131920] w-full h-full mt-5 border-l-4 border-[#00d9ff] shadow-xl mx-4 font-[family-name:var(--font-jetbrains)]">
      <div className="w-full h-full p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[#00ff88] text-xs font-mono">// Role</span>
            <p className="text-[#e4e4e7] text-xs sm:text-sm tracking-wider font-mono">
              SOFTWARE_DEVELOPER
            </p>
          </div>
          <div className="bg-[#00d9ff]/10 border border-[#00d9ff] text-[#00d9ff] rounded px-3 py-1 text-xs font-mono uppercase tracking-wider">
            <span className="inline-block w-2 h-2 bg-[#00d9ff] rounded-full mr-2 animate-pulse"></span>
            NTT_DATA
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-8 mt-8">
          <div className="flex flex-col items-center sm:items-start justify-center gap-4 flex-1">
            {/* Terminal-style output */}
            <div className="code-block w-full max-w-md mx-auto sm:mx-0">
              <div className="flex items-center gap-2 mb-3 text-xs text-[#71717a]">
                <span className="text-[#00ff88]">{'// '}</span>
                <span>developer.ts</span>
              </div>
              <div className="space-y-2">
                <div className="text-[#e4e4e7] text-base sm:text-lg font-mono">
                  <span className="text-[#bd00ff]">interface </span>
                  <span className="text-[#00d9ff]">Developer</span>
                  <span className="text-[#71717a]"> </span>
                  <span className="text-[#ffeb3b]">&#123;</span>
                </div>
                <motion.div 
                  className="ml-4 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-[#bd00ff]">name</span>
                  <span className="text-[#71717a]">: </span>
                  <span className="text-[#ffeb3b]">string</span>
                  <span className="text-[#71717a]">;</span>
                </motion.div>
                <motion.div 
                  className="ml-4 text-xs sm:text-sm text-[#e4e4e7]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-[#bd00ff]">degree</span>
                  <span className="text-[#71717a]">: </span>
                  <span className="text-[#ffeb3b]">string</span>
                  <span className="text-[#71717a]">;</span>
                </motion.div>
                <motion.div 
                  className="ml-4 text-xs sm:text-sm text-[#e4e4e7]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="text-[#bd00ff]">stack</span>
                  <span className="text-[#71717a]">: </span>
                  <span className="text-[#ffeb3b]">string</span>
                  <span className="text-[#71717a]">[];</span>
                </motion.div>
                <div className="text-[#e4e4e7] text-sm sm:text-base">
                  <span className="text-[#ffeb3b]">&#125;</span>
                </div>

                {/* Implementation */}
                <motion.div 
                  className="text-[#e4e4e7] text-base sm:text-lg font-mono mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="text-[#71717a]">const </span>
                  <span className="text-[#00d9ff]">alejandro</span>
                  <span className="text-[#71717a]">: Developer = &#123;</span>
                </motion.div>
                <motion.div 
                  className="ml-4 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  <span className="text-[#bd00ff]">name</span>
                  <span className="text-[#71717a]">: </span>
                  <span className="text-[#00ff88] glow-green">&quot;{displayText}</span>
                  {displayText.length < fullText.length && (
                    <span className="terminal-cursor text-[#00ff88]">█</span>
                  )}
                  {displayText.length === fullText.length && (
                    <span className="text-[#00ff88]">&quot;</span>
                  )}
                  <span className="text-[#71717a]">,</span>
                </motion.div>
                <motion.div 
                  className="ml-4 text-xs sm:text-sm text-[#e4e4e7]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <span className="text-[#bd00ff]">degree</span>
                  <span className="text-[#71717a]">: </span>
                  <span className="text-[#00ff88]">&quot;Ing. Multimedia&quot;</span>
                  <span className="text-[#71717a]">,</span>
                </motion.div>
                <motion.div 
                  className="ml-4 text-xs sm:text-sm text-[#e4e4e7]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                >
                  <span className="text-[#bd00ff]">stack</span>
                  <span className="text-[#71717a]">: [</span>
                  <span className="text-[#00ff88]">&quot;Salesforce&quot;</span>
                  <span className="text-[#71717a]">, </span>
                  <span className="text-[#00ff88]">&quot;React&quot;</span>
                  <span className="text-[#71717a]">]</span>
                </motion.div>
                <div className="text-[#e4e4e7] text-sm sm:text-base">
                  <span className="text-[#ffeb3b]">&#125;</span>
                  <span className="text-[#71717a]">;</span>
                </div>
              </div>
            </div>
            
            {/* Download CV Button */}
            <motion.div 
              className="flex w-full justify-center sm:justify-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
            >
              <a
                download="CV_Alejandro_Bernardo_Ruperez.pdf"
                href={getPath("/CV/CV_Alejandro_Bernardo_Ruperez.pdf")}
                className="group relative bg-[#0a0e14] border-2 border-[#00ff88] px-6 py-3 text-[#00ff88] font-mono text-sm hover:bg-[#00ff88] hover:text-[#0a0e14] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{'npm run '}</span>
                  <span className="tracking-wider">download:cv</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#00ff88]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 0 }}
                />
              </a>
            </motion.div>
          </div>

          {/* Profile Image with Terminal Frame */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative p-1 bg-gradient-to-br from-[#00ff88] via-[#00d9ff] to-[#bd00ff]">
              <div className="bg-[#0a0e14] p-2">
                <Image
                  src={getPath("/images/profile-pic.png")}
                  alt="Alejandro Bernardo"
                  width={120}
                  height={120}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff88]"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00d9ff]"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#bd00ff]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff88]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
