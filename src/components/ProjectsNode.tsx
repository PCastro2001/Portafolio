"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { bankList, subsidyList, financialConstants } from "@/data/banks";
import { formatCLP, formatUF, calculateMaxDividend, calculateGap } from "@/utils/format";

export default function ProjectsNode() {
  const projects = portfolioData.projects;
  const subsimatch = projects[0];
  const rigbuilder = projects[1];
  const edupath = projects[2];

  // State for interactive simulator (SubsiMatch)
  const [salary, setSalary] = useState<number>(1200000);
  const [savings, setSavings] = useState<number>(100); // in UF
  const [propertyValue, setPropertyValue] = useState<number>(2000); // in UF
  const [ufValue, setUfValue] = useState<number>(38000); // Default fallback

  // Fetch live UF value from mindicador.cl API
  useEffect(() => {
    fetch("https://mindicador.cl/api/uf")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.serie && data.serie[0]) {
          setUfValue(data.serie[0].valor);
        }
      })
      .catch((err) => console.log("Error fetching UF, using fallback:", err));
  }, []);

  // Financial simulation calculations
  const dividendRatio = financialConstants.defaultDividendRatio; // 25%
  const maxDividendRatio = financialConstants.maxDividendRatioLimit; // 33%
  
  const monthlyDividend25 = calculateMaxDividend(salary, dividendRatio);
  const monthlyDividend33 = calculateMaxDividend(salary, maxDividendRatio);

  // Approximate Mortgage capacity based on 4.8% CAE over 25 years
  const interestRate = 4.8;
  const years = 25;
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = years * 12;
  
  const caeFactor = monthlyRate > 0 
    ? (1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate 
    : totalMonths;

  // Max mortgage credit capacity in CLP
  const maxCreditCLP = monthlyDividend25 * caeFactor;
  const maxCreditUF = maxCreditCLP / ufValue;

  // Find best fitting subsidy based on target property value in UF
  const bestSubsidy = subsidyList.find(sub => propertyValue <= sub.maxPropertyValUF) || subsidyList[subsidyList.length - 1];
  
  // Total funds: Credit + Savings + Subsidy
  const totalFundsUF = maxCreditUF + savings + bestSubsidy.baseSubsidyUF;
  const gapUF = calculateGap(propertyValue, totalFundsUF);
  const gapCLP = gapUF * ufValue;

  return (
    <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto border-t border-border-dark/40 space-y-16">
      
      {/* Section Header */}
      <div>
        <h2 className="text-3xl font-mono font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-neon-cyan">[02.]</span> Matriz de Proyectos
        </h2>
        <p className="font-mono text-xs text-gray-500">
          REGISTRO DE INGENIERÍA // RESOLUCIÓN DE PROBLEMAS COMPLEJOS
        </p>
      </div>

      {/* Main Project: SubsiMatch Case Study */}
      <div className="space-y-6">
        <div className="font-mono text-xs font-bold text-neon-pink tracking-widest uppercase">
          [ RANURA 01 // CASO DE ESTUDIO PRINCIPAL ]
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Case Study Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-card-dark border border-border-dark p-6 rounded-xl relative hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition duration-300 hud-corners">
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono text-neon-cyan tracking-widest uppercase font-bold text-glow-cyan">
                    SISTEMA DE ASIGNACIÓN HABITACIONAL
                  </span>
                  <h3 className="text-2xl font-mono font-bold text-white mt-1">
                    {subsimatch.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    {subsimatch.tagline}
                  </p>
                </div>
                <div className="flex space-x-3">
                  {subsimatch.liveUrl && (
                    <a
                      href={subsimatch.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-pink hover:text-white transition duration-300"
                      title="Ver App en Vivo"
                      aria-label="Ver App en Vivo de SubsiMatch"
                    >
                      <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {subsimatch.githubUrl && (
                    <a
                      href={subsimatch.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:text-white transition duration-300"
                      title="Ver Repositorio GitHub"
                      aria-label="Ver Repositorio GitHub de SubsiMatch"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm text-gray-300">
                <div>
                  <h4 className="font-mono text-xs font-bold text-neon-pink mb-1">
                    [ EL PROBLEMA ]
                  </h4>
                  <p className="leading-relaxed">{subsimatch.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-neon-cyan mb-1 text-glow-cyan">
                    [ LA SOLUCIÓN ]
                  </h4>
                  <p className="leading-relaxed">{subsimatch.solution}</p>
                </div>
              </div>
            </div>

            {/* Ficha Técnica Card */}
            <div className="bg-card-dark border border-border-dark p-6 rounded-xl relative hover:border-neon-cyan/40 transition duration-300">
              <h4 className="font-mono text-xs font-bold text-neon-cyan mb-4 uppercase tracking-widest text-glow-cyan">
                // ESPECIFICACIONES TÉCNICAS (FICHA)
              </h4>
              <div className="flex flex-wrap gap-2">
                {subsimatch.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-bg-dark border border-border-dark px-3 py-1.5 rounded text-xs font-mono text-gray-300 hover:border-neon-pink/50 hover:text-neon-pink transition duration-300"
                  >
                    * {tech}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-gray-500 font-mono mt-4">
                ARQUITECTURA: Lógica centralizada, desacoplamiento de datos duros (src/data/banks.ts) y capa de redondeo financiero (src/utils/format.ts).
              </p>
            </div>
          </div>

          {/* Right Side: Interactive HUD Simulator */}
          <div className="lg:col-span-5 bg-card-dark border border-border-dark rounded-xl p-6 relative flex flex-col justify-between hover:border-neon-pink/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition duration-300 hud-corners">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono text-neon-pink tracking-widest uppercase font-bold animate-pulse text-glow-pink">
                  • SUBSIMATCH INTERACTIVE HUD
                </span>
                <span className="text-[9px] font-mono text-gray-500">
                  UF: {formatCLP(ufValue)}
                </span>
              </div>

              {/* Inputs */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-gray-400 mb-1" htmlFor="salary-input">
                    &gt; RENTA LÍQUIDA MENSUAL:
                  </label>
                  <div className="flex items-center border border-border-dark bg-[#060910] px-3 py-2 rounded focus-within:border-neon-cyan transition">
                    <span className="text-neon-pink mr-2">$</span>
                    <input
                      id="salary-input"
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="bg-transparent text-white w-full outline-none"
                      placeholder="Sueldo líquido"
                    />
                    <span className="text-gray-500">CLP</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-1" htmlFor="savings-input">
                      &gt; AHORRO DISPONIBLE:
                    </label>
                    <div className="flex items-center border border-border-dark bg-[#060910] px-3 py-2 rounded focus-within:border-neon-cyan transition">
                      <input
                        id="savings-input"
                        type="number"
                        value={savings}
                        onChange={(e) => setSavings(Number(e.target.value))}
                        className="bg-transparent text-white w-full outline-none"
                      />
                      <span className="text-gray-500 ml-1">UF</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1" htmlFor="property-input">
                      &gt; VALOR PROPIEDAD:
                    </label>
                    <div className="flex items-center border border-border-dark bg-[#060910] px-3 py-2 rounded focus-within:border-neon-cyan transition">
                      <input
                        id="property-input"
                        type="number"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(Number(e.target.value))}
                        className="bg-transparent text-white w-full outline-none"
                      />
                      <span className="text-gray-500 ml-1">UF</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dividers / Output metrics */}
              <div className="border-t border-border-dark/60 my-6 pt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dividendo Bancario Máx (25%):</span>
                  <span className="text-neon-pink font-bold">{formatCLP(monthlyDividend25)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dividendo Bancario Límite (33%):</span>
                  <span className="text-cyber-purple font-bold">{formatCLP(monthlyDividend33)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Capacidad Crédito Estimada:</span>
                  <span className="text-neon-cyan font-bold text-glow-cyan">{formatUF(maxCreditUF, 1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Subsidio MINVU Estimado:</span>
                  <span className="text-neon-cyan font-bold">+{formatUF(bestSubsidy.baseSubsidyUF, 0)}</span>
                </div>
                <div className="text-[10px] text-gray-500 pl-2 border-l border-border-dark">
                  Aplica a: {bestSubsidy.type}
                </div>
              </div>
            </div>

            {/* Results Summary Box */}
            <div className="mt-4 p-4 rounded bg-[#060910] border border-border-dark font-mono text-xs">
              <div className="text-gray-400 mb-1 font-bold">
                [ INFORME DE BRECHA INMOBILIARIA ]
              </div>
              {gapUF > 0 ? (
                <div className="space-y-2">
                  <p className="text-neon-pink font-bold text-glow-pink">
                    Brecha Detectada: {formatUF(gapUF, 1)} (~{formatCLP(gapCLP)})
                  </p>
                  <p className="text-[11px] text-[#a2afc3] leading-relaxed">
                    Plan de Acción: Para adquirir esta vivienda de {formatUF(propertyValue, 0)}, necesitas aumentar tus ahorros en {formatUF(gapUF, 1)} o incrementar tu renta líquida para obtener un crédito mayor.
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-neon-cyan font-bold text-glow-cyan">
                    TECHO INMOBILIARIO ALCANZADO
                  </p>
                  <p className="text-[11px] text-[#a2afc3] leading-relaxed">
                    Tu capacidad financiera consolidada ({formatUF(totalFundsUF, 1)}) cubre completamente el valor de la propiedad de {formatUF(propertyValue, 0)}. ¡Financiación viable!
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Expanded Project Slots (2 and 3 in a grid) */}
      <div className="space-y-6 pt-8 border-t border-border-dark/30">
        <div className="font-mono text-xs font-bold text-neon-cyan tracking-widest uppercase">
          [ EXPANSIÓN DE RANURAS // PROYECTOS EN REJILLA ]
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 2: RigBuilder AI */}
          <article className="bg-card-dark border border-border-dark rounded-xl overflow-hidden hover:border-neon-pink/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition duration-300 flex flex-col justify-between hud-corners">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-mono text-neon-pink tracking-widest uppercase font-bold text-glow-pink">
                    RANURA 02 // SYSTEM_OPTIMIZATION
                  </span>
                  <h3 className="text-xl font-mono font-bold text-white mt-0.5">
                    {rigbuilder.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">
                    {rigbuilder.tagline}
                  </p>
                </div>
                {rigbuilder.githubUrl && (
                  <a
                    href={rigbuilder.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                    title="Ver en GitHub"
                    aria-label="Ver GitHub de RigBuilder AI"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="space-y-3 font-sans text-xs text-gray-300">
                <div>
                  <span className="font-mono text-[10px] font-bold text-neon-pink block mb-0.5">[ EL PROBLEMA ]</span>
                  <p className="leading-relaxed">{rigbuilder.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-neon-cyan block mb-0.5">[ LA SOLUCIÓN ]</span>
                  <p className="leading-relaxed">{rigbuilder.solution}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Footer */}
            <div className="bg-[#0b0e17] border-t border-border-dark/60 p-4 font-mono text-[10px] text-gray-400 space-y-1">
              <span className="block text-neon-cyan font-bold uppercase tracking-wider">// INFRAESTRUCTURA STACK:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {rigbuilder.technologies.map((t, idx) => (
                  <span key={idx} className="bg-bg-dark border border-border-dark/80 px-2 py-0.5 rounded text-[9px] text-gray-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Project 3: EduPath */}
          <article className="bg-card-dark border border-border-dark rounded-xl overflow-hidden hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition duration-300 flex flex-col justify-between hud-corners">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-mono text-neon-cyan tracking-widest uppercase font-bold text-glow-cyan">
                    RANURA 03 // DATA_ANALYTICS
                  </span>
                  <h3 className="text-xl font-mono font-bold text-white mt-0.5">
                    {edupath.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">
                    {edupath.tagline}
                  </p>
                </div>
                {edupath.githubUrl && (
                  <a
                    href={edupath.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                    title="Ver en GitHub"
                    aria-label="Ver GitHub de EduPath"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="space-y-3 font-sans text-xs text-gray-300">
                <div>
                  <span className="font-mono text-[10px] font-bold text-neon-pink block mb-0.5">[ EL PROBLEMA ]</span>
                  <p className="leading-relaxed">{edupath.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-neon-cyan block mb-0.5">[ LA SOLUCIÓN ]</span>
                  <p className="leading-relaxed">{edupath.solution}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Footer */}
            <div className="bg-[#0b0e17] border-t border-border-dark/60 p-4 font-mono text-[10px] text-gray-400 space-y-1">
              <span className="block text-neon-cyan font-bold uppercase tracking-wider">// INFRAESTRUCTURA STACK:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {edupath.technologies.map((t, idx) => (
                  <span key={idx} className="bg-bg-dark border border-border-dark/80 px-2 py-0.5 rounded text-[9px] text-gray-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

        </div>
      </div>

    </section>
  );
}
