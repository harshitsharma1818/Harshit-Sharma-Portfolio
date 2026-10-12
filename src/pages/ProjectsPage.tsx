import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';

export const ProjectsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pt-24 sm:pt-28 pb-20 text-[#EDE8DF]">
        {/* Subtle Ambient Glow & Orbital Ring */}
        <div className="absolute top-20 right-0 sm:right-1/4 w-72 sm:w-[550px] max-w-full h-72 sm:h-[400px] bg-[#38BDF8]/[0.03] rounded-full blur-[120px] sm:blur-[140px] pointer-events-none overflow-hidden" aria-hidden="true" />
        <div className="absolute top-12 right-12 w-64 h-64 border border-white/[0.03] rounded-full pointer-events-none hidden lg:block" aria-hidden="true" />

        {/* Page Hero */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3.5 sm:mb-4">
            <span className="h-px w-8 bg-[#38BDF8]" />
            <span className="text-[10px] sm:text-xs font-heading font-semibold tracking-[0.25em] text-[#38BDF8] uppercase">
              Portfolio & Builds
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#EDE8DF] tracking-tight mb-3">
            Featured Projects
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl sm:text-3xl font-signature text-[#D8C7A5] font-normal mb-3 sm:mb-4">
            “Things I'm building.”
          </motion.p>

          <motion.p variants={itemVariants} className="text-xs sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
            Hands-on software experiments and academic builds. Built to reinforce theoretical computing concepts through practical, clean code.
          </motion.p>
        </div>

        {/* Editorial Case Studies — 3 Distinct Compositions */}
        <div className="space-y-12 sm:space-y-16">

          {/* ========================================================
              PROJECT 01: Personal Portfolio Website
             ======================================================== */}
          <motion.section
            variants={itemVariants}
            className="pt-8 sm:pt-10 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3 text-xs font-heading text-[#9CA3AF]">
                <span className="text-[#38BDF8] font-semibold">Project 01</span>
                <span className="text-white/20">//</span>
                <span>Full Case Study</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#EDE8DF] tracking-tight">
                Personal Portfolio Website
              </h2>

              <p className="text-xs sm:text-base text-[#9CA3AF] leading-relaxed font-normal">
                A bespoke multi-page personal portfolio engineered to chronicle my undergraduate CSE journey. Built with React, TypeScript, React Router, Tailwind CSS, and Framer Motion. Engineered with true multi-page architecture, editorial typography hierarchy, and a cinematic visual system.
              </p>

              <div className="pt-2">
                <div className="text-[10px] sm:text-[11px] font-heading text-[#38BDF8] uppercase tracking-wider mb-2 font-medium">
                  Technical Architecture
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-heading text-[#EDE8DF] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#080A0F] border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  to="/"
                  className="min-h-[44px] inline-flex items-center gap-2 text-xs font-heading text-[#38BDF8] hover:text-[#EDE8DF] uppercase tracking-wider transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  <span>Current Live Build</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs font-heading text-[#38BDF8] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Active Deployment</span>
                </span>
              </div>
            </div>

            {/* Right Schematic Panel */}
            <div className="lg:col-span-5 p-5 sm:p-7 rounded-2xl bg-[#080A0F]/85 border border-white/[0.08] space-y-4 text-xs font-heading backdrop-blur-sm">
              <div className="text-[10px] sm:text-[11px] text-[#38BDF8] pb-3 border-b border-white/[0.08] flex items-center justify-between font-medium">
                <span>SYSTEM SCHEMATIC</span>
                <span className="text-[#9CA3AF]">SPA / ROUTING</span>
              </div>
              <div className="space-y-2.5 sm:space-y-3 text-[#9CA3AF]">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1017]/70 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                  <span className="text-[#EDE8DF] block font-medium mb-1">01. Route Choreography</span>
                  <span>Independent routes for Home, About, Education, Skills, Projects, Milestones, and Contact.</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1017]/70 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                  <span className="text-[#EDE8DF] block font-medium mb-1">02. Design System</span>
                  <span>Manrope & Plus Jakarta Sans typography paired with editorial Allura cursive accents and Midnight Atelier aesthetic.</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1017]/70 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                  <span className="text-[#EDE8DF] block font-medium mb-1">03. Responsive Architecture</span>
                  <span>Responsive viewport design on Home with centered CTAs and fine-tuned layout across all viewports.</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ========================================================
              PROJECT 02: AI Website Project
             ======================================================== */}
          <motion.section
            variants={itemVariants}
            className="pt-8 sm:pt-10 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left Technical Docket */}
            <div className="lg:col-span-5 p-5 sm:p-7 rounded-2xl bg-[#080A0F]/85 border border-white/[0.08] space-y-4 backdrop-blur-sm order-2 lg:order-1">
              <div className="flex items-center justify-between text-xs font-heading text-[#9CA3AF] pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[#EDE8DF] font-medium">EXPLORATION SPEC</span>
                </div>
                <span className="text-[#38BDF8] uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold">IN PROGRESS</span>
              </div>
              <div className="text-xs font-heading text-[#9CA3AF] space-y-2">
                <div className="text-[#EDE8DF] font-medium">// Target Objectives:</div>
                <ul className="list-disc list-inside space-y-1.5 text-[#9CA3AF] pl-1 font-sans">
                  <li>AI literacy interface for engineering topics</li>
                  <li>Multi-modal prompt experiments</li>
                  <li>Local Python backend logic integration</li>
                  <li>Accessible data visualization</li>
                </ul>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 text-xs font-heading text-[#9CA3AF]">
                <span className="text-[#38BDF8] font-semibold">Project 02</span>
                <span className="text-white/20">//</span>
                <span>Academic Build</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#EDE8DF] tracking-tight">
                AI Website Project
              </h2>

              <p className="text-xs sm:text-base text-[#9CA3AF] leading-relaxed font-normal">
                An interactive exploration of artificial intelligence concepts, integrating modern API workflows to help students grasp challenging engineering topics. Designed to demystify neural networks and modern foundational models through practical web experiments.
              </p>

              <div>
                <div className="text-[10px] sm:text-[11px] font-heading text-[#38BDF8] uppercase tracking-wider mb-2 font-medium">
                  Planned Stack
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Python', 'Generative AI APIs', 'React', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-heading text-[#EDE8DF] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#080A0F] border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 sm:pt-4 flex items-center gap-3 text-xs font-heading text-[#9CA3AF]">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse flex-shrink-0" />
                <span>Active Development • Writeup coming upon milestone completion</span>
              </div>
            </div>
          </motion.section>

          {/* ========================================================
              PROJECT 03: Student Productivity Project
             ======================================================== */}
          <motion.section
            variants={itemVariants}
            className="pt-8 sm:pt-10 border-t border-white/[0.08] space-y-5 sm:space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3 text-xs font-heading text-[#9CA3AF] mb-2">
                  <span className="text-[#38BDF8] font-semibold">Project 03</span>
                  <span className="text-white/20">//</span>
                  <span>Tooling Concept</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#EDE8DF] tracking-tight">
                  Student Productivity Project
                </h2>
              </div>
              <span className="self-start sm:self-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider uppercase bg-[#080A0F] border border-white/10 text-[#9CA3AF]">
                Status: Scheduled Development
              </span>
            </div>

            <p className="text-xs sm:text-base text-[#9CA3AF] leading-relaxed max-w-3xl font-normal">
              A focused digital organization tool crafted for engineering students to track coding practice, semester milestones, and technical reading. Emphasizing clean local storage persistence, zero cognitive clutter, and distraction-free study workflows.
            </p>

            <div>
              <div className="text-[10px] sm:text-[11px] font-heading text-[#38BDF8] uppercase tracking-wider mb-2 font-medium">
                Architecture Concept
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['JavaScript', 'HTML5', 'Modern CSS', 'Local Storage'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-heading text-[#EDE8DF] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#080A0F] border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

        </div>

        {/* Editorial Navigation Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          <div className="text-xs font-heading text-[#6B7280] tracking-wider uppercase">
            Recorded Milestones
          </div>
          <Link
            to="/achievements"
            className="min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-heading font-medium text-[#EDE8DF] hover:text-[#E8C98A] uppercase tracking-wider transition-colors px-4 py-2 rounded-xl border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <span>View Milestones & Achievements</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8C98A]" />
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};
