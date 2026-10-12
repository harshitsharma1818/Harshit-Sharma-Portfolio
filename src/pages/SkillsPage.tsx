import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Globe,
  Bot,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Cpu,
  Layers
} from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';
import { SKILL_EXPLORATION_CATEGORIES, SkillCategoryData } from '../data/portfolioData';

const iconMap: Record<SkillCategoryData['iconName'], React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Globe,
  Bot,
  Compass,
};

export const SkillsPage: React.FC = () => {
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
              AREAS OF EXPLORATION
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#EDE8DF] tracking-tight mb-3.5 sm:mb-4"
          >
            Skills & Areas of Exploration
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg xs:text-xl sm:text-2xl text-[#D8C7A5] font-normal tracking-[-0.01em]"
          >
            “Developing foundations, exploring modern tools, and learning through{' '}
            <span className="font-signature text-3xl sm:text-4xl text-[#D8C7A5] lowercase">
              practice.
            </span>”
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3.5 sm:mt-4 text-xs sm:text-base text-[#9CA3AF] font-normal leading-relaxed"
          >
            As a first-year Computer Science Engineering student at JECRC University, I focus on building honest fundamentals, refining technical workflows, and exploring modern tools. Every category reflects skills actively being practiced and explored rather than claimed commercial mastery.
          </motion.p>

          {/* Academic Ethos Principles Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-7 sm:mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5"
          >
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Transparent Learning</span>
              </div>
              <div className="text-xs text-[#9CA3AF] leading-relaxed">
                No inflated skill bars or artificial ratings. Focused strictly on active first-year learning.
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Deliberate Practice</span>
              </div>
              <div className="text-xs text-[#9CA3AF] leading-relaxed">
                Testing prompt structures, crafting clean layouts, and understanding core computing principles.
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#080A0F]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">Applied Prototyping</span>
              </div>
              <div className="text-xs text-[#9CA3AF] leading-relaxed">
                Turning curious ideas into working experiments, portfolio pages, and student productivity tools.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Four Distinct Categories Section */}
        <section className="mb-16 sm:mb-24">
          <motion.div variants={itemVariants} className="max-w-2xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-medium tracking-tight text-[#EDE8DF]">
              Core Categories & Focus Areas
            </h2>
            <p className="mt-2 text-xs sm:text-base text-[#9CA3AF] leading-relaxed">
              Organized into four disciplines I actively study, experiment with, and cultivate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
            {SKILL_EXPLORATION_CATEGORIES.map((category) => {
              const IconComponent = iconMap[category.iconName];

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className="relative p-5 sm:p-8 rounded-2xl bg-[#080A0F]/85 border border-white/[0.08] hover:border-[#38BDF8]/40 hover:bg-[#0D1017] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Header: Icon, Number & Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#030406] border border-white/10 flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/50 group-hover:scale-105 transition-all flex-shrink-0">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-medium text-[#6B7280] tracking-wider uppercase block">
                            CATEGORY {category.num}
                          </span>
                          <span className="text-[11px] sm:text-xs font-mono text-[#9CA3AF]">
                            {category.subtitle}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#0284C7]/15 border border-[#38BDF8]/40 text-[#38BDF8]">
                        {category.stageBadge}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-xl sm:text-[25px] font-heading font-medium text-[#EDE8DF] tracking-tight mb-2 group-hover:text-white transition-colors">
                      {category.title}
                    </h3>

                    {/* Category Exact Description */}
                    <p className="text-xs sm:text-[14.5px] text-[#D8C7A5] font-normal leading-relaxed mb-5 pb-4 sm:pb-5 border-b border-white/[0.08]">
                      {category.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-3 mb-6 sm:mb-7">
                      <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#6B7280]">
                        Active Learning Highlights
                      </div>
                      {category.keyHighlights.map((highlight) => (
                        <div key={highlight.label} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-heading font-medium text-[#EDE8DF]">{highlight.label}: </span>
                            <span className="text-[#9CA3AF]">{highlight.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compact Skill Tags */}
                  <div className="pt-4 sm:pt-5 border-t border-white/[0.08]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280] mb-2.5 sm:mb-3">
                      Compact Skill & Focus Tags
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-[#030406] border border-white/[0.08] text-[#EDE8DF] group-hover:border-white/20 hover:text-[#38BDF8] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Editorial Navigation Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          <Link
            to="/education"
            className="min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-heading font-medium text-[#9CA3AF] hover:text-[#EDE8DF] uppercase tracking-wider transition-colors px-4 py-2 rounded-xl border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Academic Pathway & Education</span>
          </Link>

          <Link
            to="/projects"
            className="min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-heading font-medium text-[#EDE8DF] hover:text-[#E8C98A] uppercase tracking-wider transition-colors px-4 py-2 rounded-xl border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <span>Explore Projects & Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8C98A]" />
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};
