"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function FooterNode() {
  const c = portfolioData.contact;

  return (
    <footer id="contacto" className="bg-[#04060a] border-t border-border-dark py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Tech Brand Info */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="font-mono text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-pink inline-block animate-ping"></span>
            &lt;{portfolioData.owner} /&gt;
          </h3>
          <p className="font-mono text-[10px] text-gray-500">
            SECURE_CONNECTION: PORT_8080 // COMPILER_STATUS: OK
          </p>
        </div>

        {/* Right Side: Contact links with clean modern visual hover */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs">
          <a
            href={c.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-cyan flex items-center gap-2 border border-transparent hover:border-neon-cyan/20 px-3 py-2 rounded transition duration-300"
            aria-label="Ver perfil de GitHub de Pablo Castro"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          
          <a
            href={c.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-cyan flex items-center gap-2 border border-transparent hover:border-neon-cyan/20 px-3 py-2 rounded transition duration-300"
            aria-label="Ver perfil de LinkedIn de Pablo Castro"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          
          <a
            href={`mailto:${c.email}`}
            className="text-gray-400 hover:text-neon-pink flex items-center gap-2 border border-transparent hover:border-neon-pink/20 px-3 py-2 rounded transition duration-300"
            aria-label="Enviar correo electrónico a Pablo Castro"
          >
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border-dark/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest text-center md:text-left">
          PABLO CASTRO © 2026 // DERECHOS DE AUTOR REGISTRADOS. ESTA RED UTILIZA CIFRADO DE ALTA FIELIDAD.
        </p>
        <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest text-center md:text-right">
          DESIGNED FOR SOCIAL AND URBAN SOFTWARE IMPACT
        </p>
      </div>
    </footer>
  );
}
