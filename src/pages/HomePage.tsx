import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../components/Navigation/PageTransition';

export const HomePage: React.FC = () => {
  return (
    <PageTransition className="min-h-[100svh] md:h-[100svh] md:max-h-[100svh] md:overflow-hidden">
      <div className="relative w-full min-h-[100svh] md:h-[100svh] md:max-h-[100svh] md:overflow-hidden flex flex-col justify-between bg-[#030405] text-[#EDE8DF]">
        
        {/* ========================================================
            DESKTOP FULL-SCREEN CINEMATIC PHOTOGRAPHIC BACKGROUND
            Gradual fade into #030405 toward Left and Bottom
           ======================================================== */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}assets/about-cinematic.jpg`}
            alt=""
            className="w-full h-full object-cover object-[72%_25%] lg:object-[64%_28%] xl:object-[60%_28%]"
            loading="eager"
            decoding="async"
            width={1920}
            height={1080}
          />

          {/* Atmospheric Glow around photograph's edge */}
          <div className="absolute right-[4%] top-1/4 w-[540px] h-[540px] rounded-full bg-[#818CF8]/[0.06] blur-[150px] pointer-events-none" />
          <div className="absolute right-[12%] bottom-1/4 w-[420px] h-[420px] rounded-full bg-[#38BDF8]/[0.04] blur-[140px] pointer-events-none" />

          {/* Left-to-right editorial dark gradient overlay into #030405 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030405] via-[#030405]/95 via-38% lg:via-[#030405]/85 lg:via-48% to-transparent pointer-events-none" />

          {/* Top and bottom edge blend into #030405 */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030405] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#030405] to-transparent pointer-events-none" />
        </div>

        {/* ========================================================
            MOBILE CINEMATIC BACKGROUND & PORTRAIT VISUAL
            Face clearly recognisable and visible with smooth atmospheric blend
           ======================================================== */}
        <div className="md:hidden absolute inset-x-0 top-0 h-[48vh] min-h-[300px] max-h-[440px] pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}assets/about-cinematic.jpg`}
            alt="Harshit Sharma portrait"
            className="w-full h-full object-cover object-[64%_28%] opacity-75"
            loading="eager"
            decoding="async"
            width={1080}
            height={1080}
          />
          {/* Top navbar edge blend */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030405] via-[#030405]/75 to-transparent" />
          {/* Subtle left-side dark vignette */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030405]/85 to-transparent" />
          {/* Seamless bottom fade into pure-black content region */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#030405] via-[#030405]/90 to-transparent" />
          {/* Subtle cyan rim glow */}
          <div className="absolute right-2 top-1/4 w-36 h-36 rounded-full bg-[#38BDF8]/[0.08] blur-3xl pointer-events-none" />
        </div>

        {/* ========================================================
            HOME FOREGROUND HERO CONTENT
            Responsive padding & fluid typographic scaling
           ======================================================== */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-10 lg:px-16 pt-44 xs:pt-48 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 flex-1 flex flex-col justify-end md:justify-center">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow with Cyan Accent Line */}
            <div className="flex items-center gap-3 mb-3 sm:mb-5">
              <span className="h-px w-7 bg-[#38BDF8] inline-block" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] text-[#38BDF8] uppercase font-semibold">
                B.TECH CSE · JAIPUR
              </span>
            </div>

            {/* Main Heading with Cursive Accent on "learn." */}
            <div className="space-y-1">
              <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-[66px] font-heading font-medium tracking-tight text-[#EDE8DF] leading-[1.12]">
                I build, experiment,<br className="hidden xs:inline" /> and{' '}
                <span className="font-signature font-normal text-[#D8C7A5] text-4xl xs:text-5xl sm:text-7xl lg:text-[76px] tracking-normal lowercase ml-1 sm:ml-2">
                  learn.
                </span>
              </h1>
            </div>

            {/* Supporting Headline */}
            <p className="text-base sm:text-xl lg:text-[21px] text-[#D8C7A5] font-normal tracking-[-0.01em] mt-2.5 sm:mt-4 leading-snug">
              I turn curiosity into things worth building.
            </p>

            {/* Introduction Paragraph */}
            <p className="mt-3 sm:mt-5 text-xs sm:text-base text-[#9CA3AF] max-w-lg leading-relaxed font-normal">
              Computer Science student exploring software development and AI, with a focus on turning what I learn into practical projects and useful digital experiences.
            </p>
          </div>
        </div>

        {/* ========================================================
            HERO BUTTON GROUP
            Compact, professionally sized & centered buttons
           ======================================================== */}
        <div className="relative z-20 w-full flex flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-5 px-4 pb-8 sm:pb-10 pt-2">
          {/* PRIMARY BUTTON: View My Work */}
          <Link
            to="/projects"
            className="group w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl bg-[#EDE8DF] hover:bg-white text-[#030405] font-heading font-semibold text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_24px_rgba(237,232,223,0.12)] hover:shadow-[0_4px_30px_rgba(232,201,138,0.28)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 text-[#030405] transition-transform duration-250 group-hover:translate-x-1" />
          </Link>

          {/* SECONDARY BUTTON: About Me */}
          <Link
            to="/about"
            className="group w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#EDE8DF] font-heading font-medium text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A]"
          >
            <span>About Me</span>
            <ArrowUpRight className="w-4 h-4 text-[#E8C98A] transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </PageTransition>
  );
};
