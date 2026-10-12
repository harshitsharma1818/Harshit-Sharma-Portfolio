import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  School,
  BookOpen,
  MapPin,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-20 text-[#EDE8DF]">
        {/* Subtle Atmospheric Glows - constrained to viewport */}
        <div className="absolute top-20 right-0 sm:right-10 w-72 sm:w-[520px] max-w-full h-72 sm:h-[420px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.05),_transparent_70%)] pointer-events-none blur-[120px] sm:blur-[150px] overflow-hidden" aria-hidden="true" />
        <div className="absolute top-96 left-0 w-64 sm:w-[450px] max-w-full h-64 sm:h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.04),_transparent_70%)] pointer-events-none blur-[120px] sm:blur-[140px] overflow-hidden" aria-hidden="true" />

        {/* Page Hero */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3.5 sm:mb-4">
            <span className="h-px w-8 bg-[#38BDF8]" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] text-[#38BDF8] uppercase font-semibold">
              ACADEMIC PATHWAY
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#EDE8DF] tracking-tight mb-3.5 sm:mb-4"
          >
            Education
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg xs:text-xl sm:text-2xl text-[#D8C7A5] font-normal tracking-[-0.01em]"
          >
            “Building the academic{' '}
            <span className="font-signature text-3xl sm:text-4xl text-[#D8C7A5] lowercase">
              foundation.
            </span>”
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3.5 sm:mt-4 text-xs sm:text-base text-[#9CA3AF] font-normal leading-relaxed"
          >
            Developing rigorous computational and engineering fundamentals through structured university coursework and foundational schooling.
          </motion.p>

          {/* Academic Overview Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-7 sm:mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5"
          >
            {/* Degree & University */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5 sm:mb-2">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Undergraduate</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#EDE8DF]">
                JECRC University, Jaipur
              </div>
              <div className="text-[11px] sm:text-xs text-[#38BDF8] mt-1 font-mono">B.Tech CSE (First Year)</div>
            </div>

            {/* Senior Secondary School */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5 sm:mb-2">
                <BookOpen className="w-4 h-4" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Class 12</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#EDE8DF]">
                Sine International School
              </div>
              <div className="text-[11px] sm:text-xs text-[#9CA3AF] mt-1 font-mono">Completed Class 12</div>
            </div>

            {/* Secondary School */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5 sm:mb-2">
                <School className="w-4 h-4" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Class 1 to 10</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#EDE8DF]">
                Warren Academy School
              </div>
              <div className="text-[11px] sm:text-xs text-[#D8C7A5] mt-1 font-mono">Completed Class 1 to 10</div>
            </div>

            {/* Location */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5 sm:mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Location</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#EDE8DF]">
                Jaipur, Rajasthan, India
              </div>
              <div className="text-[11px] sm:text-xs text-[#9CA3AF] mt-1 font-mono">Academic Base</div>
            </div>
          </motion.div>
        </div>

        {/* Clean, Professional Education Timeline */}
        <section className="mb-16 sm:mb-24">
          <motion.div variants={itemVariants} className="max-w-2xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-medium tracking-tight text-[#EDE8DF]">
              Education Timeline
            </h2>
            <p className="mt-2 text-xs sm:text-base text-[#9CA3AF] leading-relaxed">
              Academic progression from foundational schooling to core computer science engineering.
            </p>
          </motion.div>

          <div className="relative max-w-3xl pl-2 sm:pl-8">
            {/* Subtle Cyan Vertical Connecting Line */}
            <div className="absolute left-[15px] sm:left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-[#38BDF8]/60 via-[#38BDF8]/25 to-white/[0.05]" aria-hidden="true" />

            <div className="space-y-8 sm:space-y-12">
              {/* STAGE 1: JECRC University, Jaipur */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-start gap-3.5 sm:gap-8 group"
              >
                {/* Timeline Marker Node */}
                <div className="relative z-10 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#030405] border-2 border-[#38BDF8] flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-4 sm:p-7 rounded-2xl bg-[#080A0F]/90 border border-white/[0.08] group-hover:border-[#38BDF8]/45 transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                      Undergraduate Degree Program
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#0284C7]/15 border border-[#38BDF8]/40 text-[#38BDF8]">
                      Currently Pursuing First Year
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-heading font-medium text-[#EDE8DF]">
                    JECRC University, Jaipur
                  </h3>
                  <div className="text-xs sm:text-base text-[#D8C7A5] font-normal mt-1">
                    B.Tech in Computer Science and Engineering (CSE)
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Currently pursuing first year of B.Tech in Computer Science and Engineering (CSE). Developing comprehensive intuition across procedural and object-oriented programming, computer architecture, discrete mathematics, data structures, and the mathematical foundations of artificial intelligence.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#6B7280]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Jaipur, Rajasthan, India</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#38BDF8]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>First-Year CSE Core</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* STAGE 2: Sine International School */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-start gap-3.5 sm:gap-8 group"
              >
                {/* Timeline Marker Node */}
                <div className="relative z-10 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#030405] border-2 border-[#38BDF8]/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-4 sm:p-7 rounded-2xl bg-[#080A0F]/90 border border-white/[0.08] group-hover:border-[#38BDF8]/45 transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                      Senior Secondary Education
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#030406] border border-white/10 text-[#9CA3AF]">
                      Completed Class 12
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-heading font-medium text-[#EDE8DF]">
                    Sine International School
                  </h3>
                  <div className="text-xs sm:text-base text-[#D8C7A5] font-normal mt-1">
                    Completed Class 12
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Completed Class 12 senior secondary education with focus on science, mathematics, and analytical reasoning, establishing academic readiness for engineering study.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </motion.div>

              {/* STAGE 3: Warren Academy School */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-start gap-3.5 sm:gap-8 group"
              >
                {/* Timeline Marker Node */}
                <div className="relative z-10 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#030405] border-2 border-[#38BDF8]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <School className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-4 sm:p-7 rounded-2xl bg-[#080A0F]/90 border border-white/[0.08] group-hover:border-[#38BDF8]/45 transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                      School Education
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#030406] border border-white/10 text-[#9CA3AF]">
                      Completed Class 1 to Class 10
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-heading font-medium text-[#EDE8DF]">
                    Warren Academy School
                  </h3>
                  <div className="text-xs sm:text-base text-[#D8C7A5] font-normal mt-1">
                    Completed Class 1 to Class 10
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Completed foundational primary and secondary schooling from Class 1 to Class 10, establishing strong academic discipline, analytical fundamentals, and early curiosity in computers and technology.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Refined Learning Areas Editorial Grid */}
        <section className="mt-14 sm:mt-20">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-end justify-between gap-3 mb-8 pb-4 border-b border-white/[0.08]"
          >
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#38BDF8] uppercase tracking-[0.22em] font-medium mb-1">
                CORE COMPETENCY BLUEPRINT
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#EDE8DF]">
                Key Learning Areas
              </h3>
            </div>
            <div className="text-xs font-mono text-[#6B7280]">
              7 PRIMARY ACADEMIC DOMAINS
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            {PERSONAL_INFO.education.learningAreas.map((area) => (
              <motion.div
                key={area.name}
                variants={itemVariants}
                className="p-4 sm:p-5 rounded-2xl bg-[#080A0F]/85 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2 sm:mb-2.5">
                    <h4 className="text-sm sm:text-base font-heading font-medium text-[#EDE8DF] group-hover:text-white transition-colors">
                      {area.name}
                    </h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/40 group-hover:bg-[#38BDF8] transition-colors mt-1.5 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {area.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Forward Link to Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          <div className="text-xs font-mono text-[#6B7280] tracking-wider uppercase">
            Technical Repertoire
          </div>
          <Link
            to="/skills"
            className="min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-heading font-medium text-[#EDE8DF] hover:text-[#E8C98A] uppercase tracking-wider transition-colors px-4 py-2 rounded-xl border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <span>Explore Skills & Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8C98A]" />
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};
