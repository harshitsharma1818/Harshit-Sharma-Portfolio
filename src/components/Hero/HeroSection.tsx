import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Minimal, High-Contrast Typography & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-white/[0.1] bg-white/[0.04] text-slate-200 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4"
            >
              <span>{PERSONAL_INFO.headlinePart1}</span>
              <br />
              <span>{PERSONAL_INFO.headlinePart2}</span>
            </motion.h1>

            {/* Highlighted Line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-amber-400 font-normal mb-6"
            >
              {PERSONAL_INFO.highlightedLine}
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-lg mb-8"
            >
              {PERSONAL_INFO.shortIntro}
            </motion.p>

            {/* Focused Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onNavigate('projects')}
                data-cursor="link"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-sm tracking-wide transition-all shadow-glow-amber flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                data-cursor="link"
                className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.05] text-white border border-white/[0.18] hover:border-amber-400/50 text-sm font-medium tracking-wide transition-all flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Seamless Photographic Study Environment Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            {/* Soft Warm Golden Ambient Light Plume from Desk Lamp */}
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />

            {/* Seamless Portrait Composition (Zero card borders, zero boxes, blends into dark space) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg md:max-w-xl select-none"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 95%)',
                  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 95%)',
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/harshit-portrait.jpg`}
                  alt="Harshit Sharma working with laptop in warm study environment"
                  className="w-full h-auto object-cover transform-gpu"
                />

                {/* Gentle background falloff blending gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-65 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/35 via-transparent to-[#07080a]/35 pointer-events-none" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
