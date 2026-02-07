"use client";
import { useState, useEffect } from "react";

export function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#131920] rounded-none border-l-4 border-[#00ff88] shadow-lg mx-4 font-[family-name:var(--font-jetbrains)]">
      <div className="flex items-center gap-3">
        <span className="text-[#00ff88] text-sm font-semibold">{'>'}</span>
        <p className="text-sm text-[#e4e4e7] tracking-wide font-mono">
          <span className="text-[#00d9ff]">node</span>
          <span className="text-[#71717a] mx-1">•</span>
          <span className="text-[#00ff88]">portfolio</span>
          <span className="text-[#71717a]">/</span>
          <span className="glitch-text">index.js</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden sm:block text-[#71717a] text-xs">[{time}]</span>
        <span className="terminal-cursor text-[#00ff88] font-bold">█</span>
      </div>
    </nav>
  );
}
