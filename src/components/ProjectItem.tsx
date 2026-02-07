"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

interface TechItem {
  techName: string;
  color: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  link: string;
  tech: TechItem[];
}



export function ProjectItem({
  title,
  description,
  imageUrl,
  videoUrl,
  link,
  tech,
}: ProjectItemProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (videoUrl) {
      setIsVideoModalOpen(true);
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <motion.div
        className="group relative flex flex-col sm:flex-row items-center justify-between hover:cursor-pointer bg-[#0a0e14] border border-[#1f2937] hover:border-[#00ff88] transition-all duration-300 overflow-hidden font-[family-name:var(--font-jetbrains)]"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 4 }}
      >
        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ff88] via-[#00d9ff] to-[#bd00ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full p-4 sm:p-5">
          {/* Project Image/Video Preview */}
          <div className="relative flex-shrink-0">
            <div className="relative w-16 h-16 border-2 border-[#1f2937] group-hover:border-[#00d9ff] transition-colors duration-300 overflow-hidden">
              {videoUrl && isHovered ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={imageUrl}
                  alt={`${title} thumbnail`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {/* Video badge */}
            {videoUrl && (
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-[#00ff88] border border-[#0a0e14] rounded-full p-1"
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="10" 
                  height="10" 
                  viewBox="0 0 24 24" 
                  fill="#0a0e14"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
            )}
            
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Project Info */}
          <div className="flex flex-col gap-3 flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
              <h3 className="text-[#e4e4e7] font-semibold text-sm sm:text-base uppercase tracking-wider group-hover:text-[#00ff88] transition-colors duration-300">
                <span className="text-[#00d9ff] mr-2">{'{'}</span>
                {title}
                <span className="text-[#00d9ff] ml-2">{'}'}</span>
              </h3>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-[#0a0e14] text-[0.65rem] font-mono px-2 py-0.5 border border-transparent font-semibold uppercase tracking-wide"
                    style={{
                      backgroundColor: item.color,
                    }}
                  >
                    {item.techName}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[#71717a] text-xs sm:text-sm font-mono group-hover:text-[#e4e4e7] transition-colors duration-300">
              <span className="text-[#00ff88] mr-1">{'//'}</span>
              {description}
            </p>
          </div>

          {/* Action Icon - Desktop */}
          <div className="hidden sm:flex items-center justify-center flex-shrink-0 px-3">
            {videoUrl ? (
              <motion.div
                className="text-[#71717a] group-hover:text-[#00ff88] transition-all duration-300"
                animate={{ scale: isHovered ? 1.2 : 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </motion.div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#71717a] group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>

          {/* Tap/Play indicator - Mobile */}
          <div className="flex sm:hidden items-center gap-1 absolute top-2 right-2 text-[#71717a]">
            {videoUrl ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-60"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-60"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>

          {/* External link button for video projects */}
          {videoUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(link, "_blank");
              }}
              className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto hidden sm:block bg-[#0a0e14] border border-[#1f2937] hover:border-[#00d9ff] p-2 transition-colors group/link"
              title="Visit project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#71717a] group-hover/link:text-[#00d9ff] transition-colors"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          )}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff88]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
      </motion.div>

      {/* Video Modal */}
      {videoUrl && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={videoUrl}
          title={title}
        />
      )}
    </>
  );
}
