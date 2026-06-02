"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-navbar">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="font-mono text-xl font-bold text-white hover:text-neon-cyan hover:text-glow-cyan transition duration-300 select-none"
        >
          &lt;{portfolioData.owner} /&gt;
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <a
            href="#inicio"
            className="text-gray-300 hover:text-neon-cyan font-mono transition duration-300"
          >
            [01. Inicio]
          </a>
          <a
            href="#experiencia"
            className="text-gray-300 hover:text-neon-cyan font-mono transition duration-300"
          >
            [01.5. Misiones]
          </a>
          <a
            href="#proyectos"
            className="text-gray-300 hover:text-neon-cyan font-mono transition duration-300"
          >
            [02. Matriz]
          </a>
          <a
            href="#stack"
            className="text-gray-300 hover:text-neon-cyan font-mono transition duration-300"
          >
            [03. Arsenal]
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 border border-neon-pink text-neon-pink rounded font-mono hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.35)] transition duration-300"
          >
            [ Conectarse ]
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden text-gray-300 hover:text-neon-cyan focus:outline-none transition duration-300"
        >
          <svg className="h-6 w-6 fill-none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-border-dark bg-bg-dark/95 backdrop-blur-md px-6 py-6 space-y-4 flex flex-col font-mono text-base transition-all duration-300 ease-in-out">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="text-gray-300 hover:text-neon-cyan py-2 transition duration-300 border-b border-border-dark/50"
          >
            01. Inicio
          </a>
          <a
            href="#experiencia"
            onClick={closeMenu}
            className="text-gray-300 hover:text-neon-cyan py-2 transition duration-300 border-b border-border-dark/50"
          >
            01.5. Misiones
          </a>
          <a
            href="#proyectos"
            onClick={closeMenu}
            className="text-gray-300 hover:text-neon-cyan py-2 transition duration-300 border-b border-border-dark/50"
          >
            02. Matriz
          </a>
          <a
            href="#stack"
            onClick={closeMenu}
            className="text-gray-300 hover:text-neon-cyan py-2 transition duration-300 border-b border-border-dark/50"
          >
            03. Arsenal
          </a>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="text-neon-pink hover:text-white py-2 text-center border border-neon-pink/40 rounded bg-neon-pink/5 hover:bg-neon-pink/20 transition duration-300"
          >
            Conectarse
          </a>
        </div>
      )}
    </nav>
  );
}
