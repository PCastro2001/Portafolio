"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export default function HeroNode() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const rawLines = [
    `Initializing core_system_v16.0...`,
    `Establishing VR connection node... STABLE`,
    `STATUS: ${portfolioData.meta.status}`,
    `LOCATION: ${portfolioData.meta.location}`,
    `SPEC: ${portfolioData.meta.specialization}`,
    `KERNEL: ${portfolioData.meta.kernel}`,
    `UPTIME: ${portfolioData.meta.uptime}`,
    `Entering VR interface mode._`
  ];

  useEffect(() => {
    if (currentLineIndex < rawLines.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, rawLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <section
      id="inicio"
      className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[85vh] justify-center"
    >
      {/* Left Column: Intro Texts & CTAs */}
      <div className="md:w-1/2 space-y-6">
        <div className="inline-block px-3 py-1 font-mono text-xs font-bold text-neon-pink bg-neon-pink/10 border border-neon-pink/30 tracking-widest rounded animate-pulse">
          {portfolioData.hero.systemHeader}
        </div>
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white leading-tight">
          Hola, soy <span className="text-neon-pink text-glow-pink">{portfolioData.owner}</span>.
        </h1>
        <h2 className="text-xl md:text-2xl font-mono text-neon-cyan text-glow-cyan font-semibold">
          {portfolioData.role}
        </h2>
        <p className="text-gray-300 leading-relaxed font-sans text-base md:text-lg">
          {portfolioData.hero.intro}
        </p>

        {/* Buttons / CTAs */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={portfolioData.hero.ctas.primary.link}
            className="px-6 py-3 font-mono font-bold text-white bg-neon-pink rounded hover:bg-neon-pink/90 hover:shadow-[0_0_20px_rgba(236,72,153,0.55)] active:translate-y-[1px] transition duration-300"
          >
            {portfolioData.hero.ctas.primary.text}
          </a>
          <a
            href={portfolioData.hero.ctas.secondary.link}
            className="px-6 py-3 font-mono font-bold text-neon-cyan border border-neon-cyan/50 rounded hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.35)] active:translate-y-[1px] transition duration-300"
          >
            {portfolioData.hero.ctas.secondary.text}
          </a>
        </div>
      </div>

      {/* Right Column: Cyberpunk Terminal & Profile Frame */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <div className="w-full bg-card-dark border border-border-dark rounded-lg overflow-hidden shadow-2xl relative crt-overlay">
          
          {/* Terminal Window Header */}
          <div className="bg-[#0b0e17] border-b border-border-dark px-4 py-3 flex justify-between items-center select-none">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-neon-pink/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-neon-cyan/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-cyber-purple/80 inline-block"></span>
            </div>
            <span className="font-mono text-xs text-gray-500">guest@pablo-terminal:~</span>
            <div className="w-8"></div>
          </div>

          {/* Terminal Content Grid */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[300px] font-mono text-xs">
            {/* Terminal logs */}
            <div className="lg:col-span-3 space-y-2 text-[#a2afc3] select-all">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-neon-cyan mr-2">&gt;</span>
                  <span
                    className={
                      line.includes("STABLE") || line.includes("ACTIVE")
                        ? "text-neon-pink font-bold"
                        : line.includes("interface")
                        ? "text-neon-cyan terminal-caret"
                        : ""
                    }
                  >
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* Profile Scan Visual */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center border border-border-dark/80 bg-[#060910] p-4 rounded relative group overflow-hidden hud-corners">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none animate-[pulse_2.5s_infinite]"></div>
              
              {/* Holographic photo border */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded overflow-hidden border border-neon-cyan/40 group-hover:border-neon-pink/80 transition duration-500">
                <Image
                  src="/Foto-Titulacion.png"
                  alt="Pablo Castro Profile Photo"
                  fill
                  sizes="(max-width: 768px) 128px, 144px"
                  priority
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-color group-hover:bg-transparent transition duration-500"></div>
              </div>
              <span className="mt-3 text-[10px] text-neon-cyan font-bold tracking-widest uppercase text-glow-cyan">
                SYS_USER: PABLO.SYS
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                ACCESS_LEVEL: VR_01
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
