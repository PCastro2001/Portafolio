"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function SkillsNode() {
  const s = portfolioData.skillsTerminal;

  return (
    <section id="stack" className="py-20 bg-[#090e1a]/20 border-t border-border-dark/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl font-mono font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-neon-cyan">[03.]</span> Arsenal Técnico
        </h2>

        {/* Tech Terminal Frame */}
        <div className="border border-border-dark rounded-xl bg-card-dark overflow-hidden shadow-2xl relative hud-corners">
          
          {/* Header */}
          <div className="bg-[#0b0e17] border-b border-border-dark px-6 py-4 flex justify-between items-center select-none">
            <span className="font-mono text-sm text-neon-cyan font-bold tracking-widest uppercase text-glow-cyan">
              // CORE TECH MATRIX v1.6.0
            </span>
            <div className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-border-dark inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-border-dark inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-neon-pink/50 inline-block animate-ping"></span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-dark/80">
            {s.categories.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="p-6 space-y-6 hover:bg-[#060910]/40 transition duration-300 group"
              >
                {/* Title */}
                <h3 className="font-mono text-base font-bold text-white flex items-center gap-2">
                  <span className="text-neon-pink">{cat.prefix}</span>
                  {cat.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3 font-mono text-sm text-gray-300">
                  {cat.skills.map((skill, skIdx) => (
                    <li
                      key={skIdx}
                      className="flex items-center space-x-2 pl-2 border-l border-transparent hover:border-neon-cyan hover:text-neon-cyan hover:text-glow-cyan transition-all duration-300"
                    >
                      <span className="text-gray-500 font-bold select-none">{cat.prefix}</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Horizontal Transversal Layer */}
          <div className="bg-[#0b0e17] border-t border-border-dark/80 px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="p-2 bg-neon-pink/10 border border-neon-pink/30 text-neon-pink rounded">
                  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    🛡️ CAPAS TRANSVERSALES DE CONTROL
                  </h4>
                  <p className="text-[10px] text-gray-400 font-mono">
                    Estándares globales de arquitectura y despliegue del sistema
                  </p>
                </div>
              </div>

              {/* Transversal Tags */}
              <div className="flex flex-wrap gap-3">
                {s.transversales.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-[#04060a] border border-border-dark px-4 py-2 rounded text-xs font-mono font-bold text-neon-cyan hover:border-neon-pink hover:text-neon-pink transition duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan inline-block animate-pulse"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
