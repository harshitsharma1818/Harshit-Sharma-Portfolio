import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Brain,
  Sparkles,
  Cpu,
  Layers,
  Compass,
  GraduationCap
} from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';
import {
  PERSONAL_INFO,
  TECHNICAL_INTERESTS,
  TECHNICAL_INTERESTS_STATEMENT,
  PROJECTS_LIST
} from '../data/portfolioData';

// Icon resolver for technical interests
const getInterestIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'Globe':
      return <Globe className="w-5 h-5" />;
    case 'Brain':
      return <Brain className="w-5 h-5" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5" />;
    case 'Layers':
      return <Layers className="w-5 h-5" />;
    default:
      return <Compass className="w-5 h-5" />;
  }
};

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative w-full min-h-screen bg-[#030405] text-[#EDE8DF] selection:bg-[#38BDF8]/20 selection:text-white">
        
        {/* ========================================================
            SECTION A — PERSONAL INTRODUCTION & PASSIONS
           ======================================================== */}
        <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-white/[0.08]">
          {/* DESKTOP CINEMATIC PHOTOGRAPHIC BACKGROUND */}
          <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}assets/about-cinematic.jpg`}
              alt=""
              className="w-full h-full object-cover object-[72%_25%] lg:object-[64%_30%] xl:object-[60%_30%]"
              loading="eager"
              decoding="async"
              width={1920}
              height={1080}
            />
            {/* Atmospheric Indigo & Cyan ambient glow */}
            <div className="absolute right-[6%] top-1/4 w-[520px] h-[520px] rounded-full bg-[#818CF8]/[0.05] blur-[150px] pointer-events-none" />
            <div className="absolute right-[14%] bottom-1/4 w-[420px] h-[420px] rounded-full bg-[#38BDF8]/[0.03] blur-[140px] pointer-events-none" />
            
            {/* Left-to-right editorial dark gradient overlay into #030405 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030405] via-[#030405]/95 via-40% lg:via-[#030405]/85 lg:via-48% to-transparent pointer-events-none" />

            {/* Top and bottom blend gradients */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030405] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#030405] to-transparent pointer-events-none" />
          </div>

          {/* MOBILE PHOTOGRAPHIC ACCENT */}
          <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}assets/about-cinematic.jpg`}
              alt=""
              className="w-full h-full object-cover object-[68%_18%] opacity-35"
              loading="eager"
              decoding="async"
              width={1080}
              height={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030405]/85 via-[#030405]/92 via-50% to-[#030405]" />
            <div className="absolute right-4 top-1/4 w-44 h-44 rounded-full bg-[#38BDF8]/[0.06] blur-3xl pointer-events-none" />
          </div>

          {/* EDITORIAL HERO CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-16 md:py-32 lg:py-36">
            <div className="max-w-xl lg:max-w-2xl">
              
              {/* Eyebrow Label with Cyan Line */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-3.5 sm:mb-5"
              >
                <span className="h-px w-8 bg-[#38BDF8]" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] text-[#38BDF8] uppercase font-semibold">
                  ABOUT ME
                </span>
              </motion.div>

              {/* Signature Wordmark */}
              <motion.div variants={itemVariants} className="mb-2">
                <span className="font-signature text-3xl sm:text-4xl text-[#D8C7A5] select-none">
                  Harshit Sharma
                </span>
              </motion.div>

              {/* Main Heading with Cursive Accent */}
              <motion.h1
                variants={itemVariants}
                className="text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] font-heading font-medium tracking-tight text-[#EDE8DF] leading-[1.15] mb-5 sm:mb-6"
              >
                Curious mind. Practical approach.{' '}
                <span className="font-signature font-normal text-[#D8C7A5] text-4xl xs:text-5xl sm:text-6xl lg:text-[64px] tracking-normal lowercase ml-1">
                  continuous growth.
                </span>
              </motion.h1>

              {/* Narrative Paragraphs */}
              <motion.div
                variants={itemVariants}
                className="space-y-3.5 sm:space-y-4 text-sm sm:text-[17px] leading-relaxed font-normal"
              >
                <p className="text-[#EDE8DF]">
                  I’m Harshit Sharma, a builder and technology enthusiast based in Jaipur, India. I’m driven by deep curiosity about how digital systems work and a practical commitment to turning ideas into functioning software.
                </p>
                <p className="text-[#9CA3AF] text-xs sm:text-base leading-relaxed">
                  I love exploring tech gadgets, modern AI models, and futuristic AI assistants like JARVIS. My passions span programming, web development, practical applications, personal portfolio websites, AI-powered websites, and student productivity tools that solve real-world problems.
                </p>
              </motion.div>

              {/* Personal Details & Passions Grid */}
              <motion.div
                variants={itemVariants}
                className="mt-7 sm:mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5"
              >
                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#030406] border border-white/10 text-[#38BDF8] mt-0.5 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#EDE8DF] mt-0.5">
                      Jaipur, Rajasthan, India
                    </div>
                  </div>
                </div>

                {/* Academic & Personal Contact */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#030406] border border-white/10 text-[#38BDF8] mt-0.5 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                      Contact
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-medium text-[#EDE8DF] hover:text-[#38BDF8] mt-0.5 block truncate transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                      title={PERSONAL_INFO.email}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Primary Passions */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#030406] border border-white/10 text-[#818CF8] mt-0.5 flex-shrink-0">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                      AI & Building
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#EDE8DF] mt-0.5">
                      AI Assistants, Web Apps & Practical Tech
                    </div>
                  </div>
                </div>

                {/* Exploration */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#030406] border border-white/10 text-[#D8C7A5] mt-0.5 flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                      Creative Focus
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#EDE8DF] mt-0.5">
                      Tech Gadgets, Portfolios & Productivity Tools
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION B — TECHNICAL PASSIONS & WHAT I EXPLORE
           ======================================================== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 border-b border-white/[0.08]">
          <motion.div variants={itemVariants} className="max-w-3xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-[#38BDF8]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#38BDF8] uppercase font-semibold">
                AREAS OF FOCUS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-medium tracking-tight text-[#EDE8DF]">
              Technical Passions & What I Explore
            </h2>
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#080A0F]/90 border border-white/[0.08]">
              <p className="text-xs sm:text-base text-[#EDE8DF] font-normal leading-relaxed">
                “{TECHNICAL_INTERESTS_STATEMENT}”
              </p>
            </div>
          </motion.div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TECHNICAL_INTERESTS.map((interest) => (
              <motion.div
                key={interest.id}
                variants={itemVariants}
                className="group p-5 sm:p-6 rounded-2xl bg-[#080A0F]/85 border border-white/[0.08] hover:border-[#38BDF8]/40 hover:bg-[#0D1017] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#030406] border border-white/10 text-[#38BDF8] group-hover:scale-105 transition-transform duration-250">
                      {getInterestIcon(interest.iconName)}
                    </div>
                    <span className="text-xs font-mono text-[#6B7280]">
                      {interest.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-medium text-[#EDE8DF] group-hover:text-white transition-colors duration-250">
                    {interest.title}
                  </h3>

                  <div className="text-xs text-[#D8C7A5] font-normal mt-1 mb-2.5">
                    {interest.focus}
                  </div>

                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-normal">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#6B7280]">
                  <span>Interest & Exploration</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/50 group-hover:bg-[#38BDF8] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION C — PROJECTS & PRACTICAL LEARNING
           ======================================================== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 border-b border-white/[0.08]">
          <motion.div variants={itemVariants} className="max-w-2xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-[#38BDF8]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#38BDF8] uppercase font-semibold">
                PRACTICAL APPLICATION
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-heading font-medium tracking-tight text-[#EDE8DF] leading-tight">
              “Learning becomes meaningful when you put it into practice.”
            </h2>
            <p className="mt-3 text-xs sm:text-base text-[#9CA3AF] leading-relaxed">
              A transparent view of what I have built so far, alongside concepts currently under active design and development.
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
            {PROJECTS_LIST.map((project) => {
              const isCompleted = project.status === 'COMPLETED';
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#080A0F]/85 border border-white/[0.08] hover:border-[#38BDF8]/40 hover:bg-[#0D1017] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Project Index and Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#6B7280]">
                        {project.num}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
                          isCompleted
                            ? 'bg-[#0284C7]/15 border-[#38BDF8]/40 text-[#38BDF8]'
                            : 'bg-[#030406] border-white/10 text-[#9CA3AF]'
                        }`}
                      >
                        {isCompleted ? 'Completed · Live' : 'In Progress'}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-medium text-[#EDE8DF] group-hover:text-white transition-colors duration-250">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-normal">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/[0.06]">
                    {/* Technologies pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-[#030406] text-[#9CA3AF] border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {isCompleted ? (
                      <Link
                        to="/"
                        className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-heading font-medium text-[#38BDF8] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                      >
                        <span>View Portfolio Home</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="min-h-[44px] inline-flex items-center text-xs font-mono text-[#6B7280]">
                        Design & Architecture Phase
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            SECTION D — FORWARD PATH & NAVIGATION LINK
           ======================================================== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Link
            to="/education"
            className="group min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2 rounded-xl text-xs font-heading text-[#9CA3AF] hover:text-[#E8C98A] uppercase tracking-wider transition-colors border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <GraduationCap className="w-4 h-4 text-[#E8C98A]" />
            <span>Academic Pathway & Education</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="group min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2 rounded-xl text-xs font-heading text-[#EDE8DF] hover:text-[#E8C98A] uppercase tracking-wider transition-colors border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <span>Proceed to Contact Page</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E8C98A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </section>

      </div>
    </PageTransition>
  );
};
