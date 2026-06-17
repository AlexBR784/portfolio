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
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="linear-panel relative w-full max-w-5xl overflow-hidden"
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-linear-hairline px-4 py-3 sm:px-5">
              <div>
                <p className="text-sm font-medium text-linear-ink">{title}</p>
                <p className="mt-1 text-xs text-linear-ink-subtle">Demo de proyecto</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="linear-button-secondary inline-flex items-center px-3"
              >
                Cerrar
              </button>
            </div>

            <div className="bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                loop
                className="h-auto max-h-[72vh] w-full object-contain"
                controlsList="nodownload"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
