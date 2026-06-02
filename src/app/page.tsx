import React from "react";
import Navbar from "@/components/Navbar";
import HeroNode from "@/components/HeroNode";
import ExperienceNode from "@/components/ExperienceNode";
import ProjectsNode from "@/components/ProjectsNode";
import SkillsNode from "@/components/SkillsNode";
import FooterNode from "@/components/FooterNode";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-gray-200 selection:bg-neon-cyan selection:text-bg-dark overflow-hidden">
      
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none grid-lines opacity-40 z-0"></div>

      {/* Cyberpunk Nocturno Ambient Glowing Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[130px] pointer-events-none ambient-orb z-0"></div>
      <div className="absolute top-[45%] right-[-15%] w-[700px] h-[700px] rounded-full bg-ciber-green/5 blur-[160px] pointer-events-none ambient-orb z-0" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyber-amber/5 blur-[120px] pointer-events-none ambient-orb z-0" style={{ animationDelay: "-6s" }}></div>
      
      {/* Header / Navbar */}
      <Navbar />

      {/* Main content nodes */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Node 01: Hero & Terminal */}
        <HeroNode />

        {/* Node 01.5: Freelance Experience Operational Log */}
        <ExperienceNode />

        {/* Node 02: Projects Grid & Housing Simulator */}
        <ProjectsNode />

        {/* Node 03: Skills Terminal */}
        <SkillsNode />
      </main>

      {/* Node 04: Secure Contact Footer */}
      <FooterNode />
    </div>
  );
}
