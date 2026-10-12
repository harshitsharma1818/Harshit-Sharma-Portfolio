import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[85vh] lg:min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden border-t border-white/[0.06] bg-[#07080a]"
    >
      {/* ========================================================
          BACKGROUND LAYER
          - Desktop (md+): Absolute full-bleed covering the entire section
          - Mobile (<md): Full-width cinematic visual (height ~52vh) at the top,
            with seamless bottom gradient fading into the text below so text NEVER covers face or laptop.
         ======================================================== */}

      {/* DESKTOP FULL-SCREEN BACKGROUND (md and above) */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/about-cinematic.jpg`}
          alt="Harshit Sharma - First-year B.Tech CSE student"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-[72%_25%] lg:object-[62%_35%] xl:object-[58%_35%]"
          loading="eager"
        />

        {/* Ambient warm golden accent for lamp glow */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/[0.06] blur-[120px] pointer-events-none" />

        {/* Left-to-right editorial dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/90 via-35% lg:via-[#07080a]/75 lg:via-42% to-transparent pointer-events-none" />

        {/* Seamless edge blend top & bottom */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07080a] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080a] to-transparent pointer-events-none" />
      </div>

      {/* MOBILE CINEMATIC VISUAL (below md only) */}
      <div className="md:hidden relative w-full h-[52vh] min-h-[340px] max-h-[440px] overflow-hidden pointer-events-none select-none">
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/about-cinematic.jpg`}
          alt="Harshit Sharma - First-year B.Tech CSE student"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-[72%_20%]"
          loading="eager"
        />
        {/* Soft top blend */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#07080a] to-transparent" />
        {/* Deep bottom blend fading into the text area below */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-transparent" />
        {/* Subtle warm glow on mobile */}
        <div className="absolute right-4 top-1/3 w-48 h-48 rounded-full bg-amber-500/[0.08] blur-3xl" />
      </div>

      {/* ========================================================
          FOREGROUND EDITORIAL CONTENT
          - Desktop (md+): Positioned on the left side of the screen
          - Mobile (<md): Flows below the cinematic visual with zero face overlap
         ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-14 pb-20 pt-2 sm:pt-4 md:py-28 lg:py-36">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-amber-400/80" />
              <span className="text-xs font-mono font-semibold tracking-[0.28em] text-amber-400 uppercase">
                About Me
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white leading-[1.15] mb-6">
              Learning.{' '}
              <span className="italic font-normal text-amber-200/90">
                Building.
              </span>{' '}
              Exploring.
            </h2>

            {/* Concise Professional Introduction */}
            <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-slate-100">
                I'm a first-year B.Tech CSE student at JECRC University, Jaipur, exploring programming, artificial intelligence, web development and digital technology.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I'm interested in understanding how technology works and turning what I learn into practical projects and useful experiences.
              </p>
            </div>

            {/* Small Details / Academic & Personal Highlights */}
            <div className="mt-8 pt-6 border-t border-white/[0.1] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-amber-400 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Degree & Focus
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {PERSONAL_INFO.degree}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    First-Year Undergraduate
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-amber-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Campus & Location
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {PERSONAL_INFO.college}
                  </div>
                  <div className="text-xs text-amber-300/80 mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Status Line */}
            <div className="mt-6 flex items-center gap-2.5 text-xs font-mono text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Dedicated to computational fundamentals & practical experimentation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
