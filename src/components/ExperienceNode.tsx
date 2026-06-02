"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceNode() {
  const exp = portfolioData.experience;

  return (
    <section id="experiencia" className="py-16 px-6 max-w-6xl mx-auto border-t border-border-dark/40">
      <h2 className="text-3xl font-mono font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-neon-cyan">[01.5]</span> Registro de Operaciones
      </h2>

      {/* Experience Terminal Window */}
      <div className="bg-card-dark border border-border-dark rounded-xl overflow-hidden shadow-2xl relative hover:border-neon-pink/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition duration-300 hud-corners">
        
        {/* Terminal Header */}
        <div className="bg-[#0b0e17] border-b border-border-dark px-6 py-4 flex justify-between items-center select-none">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-neon-pink inline-block animate-pulse"></span>
            <span className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider">
              OPERATIONAL_LOG // FREELANCE_REGISTRY
            </span>
          </div>
          <span className="font-mono text-[10px] text-neon-cyan font-bold tracking-widest text-glow-cyan">
            {exp.timeline}
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {exp.role}
              </h3>
              <p className="text-neon-cyan text-xs mt-1 font-bold">
                @ {exp.company}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-neon-pink/10 text-neon-pink border border-neon-pink/30 text-xs rounded uppercase font-bold tracking-widest">
                VERIFIED_DEPLOYMENTS
              </span>
            </div>
          </div>

          {/* Description Block with a terminal dashboard look */}
          <div className="bg-[#060910] border border-border-dark p-6 rounded-lg text-gray-300 font-sans space-y-4">
            <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-border-dark pb-2">
              &gt; DESCRIPCIÓN DE MISIONES Y LOGROS:
            </div>
            <p className="leading-relaxed text-sm">
              {exp.focus}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border-dark font-mono text-[10px] text-gray-500">
              <div>
                <span className="block text-neon-cyan font-bold">CICLO DE VIDA:</span>
                Entregas Continuas (CI/CD)
              </div>
              <div>
                <span className="block text-neon-cyan font-bold">DESPLIEGUES:</span>
                Responsivos de Alta Fidelidad
              </div>
              <div>
                <span className="block text-neon-cyan font-bold">OPTIMIZACIÓN:</span>
                Tiempos de Carga Críticos
              </div>
              <div>
                <span className="block text-neon-cyan font-bold">INTEGRACIÓN:</span>
                Bases de Datos Relacionales
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
