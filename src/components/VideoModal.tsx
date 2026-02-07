"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e14]/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="h-1 w-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-20"
              animate={{ y: ["-100vh", "100vh"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>

          <motion.div
            className="relative w-full max-w-5xl bg-[#131920] border-2 border-[#00ff88] shadow-2xl font-[family-name:var(--font-jetbrains)]"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0e14] border-b border-[#1f2937]">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer" onClick={onClose}></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <span className="text-[#71717a] text-sm font-mono">{'//'} video:</span>
                <span className="text-[#00ff88] text-sm font-mono">{title}.mp4</span>
              </div>
              <button
                onClick={onClose}
                className="text-[#71717a] hover:text-[#00ff88] transition-colors text-xl font-mono"
              >
                ✕
              </button>
            </div>

            {/* Video Container */}
            <div className="relative bg-black">
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff88] z-10"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00d9ff] z-10"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#bd00ff] z-10"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ffeb3b] z-10"></div>

              <video
                ref={videoRef}
                src={videoUrl}
                controls
                loop
                className="w-full h-auto max-h-[70vh] object-contain"
                controlsList="nodownload"
              />
            </div>

            {/* Terminal Footer */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#0a0e14] border-t border-[#1f2937] text-xs font-mono text-[#71717a]">
              <div className="flex items-center gap-4">
                <span>
                  <span className="text-[#00ff88]">ESC</span> to close
                </span>
                <span>
                  <span className="text-[#00d9ff]">SPACE</span> to play/pause
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-[#00ff88] rounded-full"
                  animate={{ 
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span>PLAYING</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
