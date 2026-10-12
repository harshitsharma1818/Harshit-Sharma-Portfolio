import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Trophy, BookOpen, Sparkles, Flag, Clock } from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

const categoryIcons: Record<string, React.ElementType> = {
  certifications: Award,
  courses: BookOpen,
  hackathons: Trophy,
  awards: Sparkles,
  other: Flag,
};

export const AchievementsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pt-24 sm:pt-28 pb-20 text-[#EDE8DF]">
        {/* Subtle Ambient Glow & Orbital Ring */}
        <div className="absolute top-24 left-0 sm:left-1/4 w-72 sm:w-[500px] max-w-full h-72 sm:h-[400px] bg-[#38BDF8]/[0.03] rounded-full blur-[120px] sm:blur-[140px] pointer-events-none overflow-hidden" aria-hidden="true" />
        <div className="absolute top-12 left-10 w-64 h-64 border border-white/[0.03] rounded-full pointer-events-none hidden lg:block" aria-hidden="true" />

        {/* Page Hero */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3.5 sm:mb-4">
            <span className="h-px w-8 bg-[#38BDF8]" />
            <span className="text-[10px] sm:text-xs font-heading font-semibold tracking-[0.25em] text-[#38BDF8] uppercase">
              Milestone Ledger
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#EDE8DF] tracking-tight mb-3">
            Milestones & Progress
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl sm:text-3xl font-signature text-[#D8C7A5] font-normal mb-3 sm:mb-4">
            “An archive that will grow with the journey.”
          </motion.p>

          <motion.p variants={itemVariants} className="text-xs sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
            A transparent ledger built to record academic commendations, hackathon participation, technical courses, and certifications across my four-year engineering program at JECRC University.
          </motion.p>
        </div>

        {/* Categories List with Minimalist Editorial Composition */}
        <div className="space-y-8 sm:space-y-12">
          {ACHIEVEMENTS_DATA.map((cat) => {
            const Icon = categoryIcons[cat.id] || Award;
            return (
              <motion.div
                key={cat.id}
                variants={itemVariants}
                className="pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start"
              >
                {/* Left Meta & Category Info */}
                <div className="md:col-span-4 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-2 text-xs font-heading text-[#EDE8DF]">
                    <Icon className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                    <span className="uppercase tracking-wider font-semibold">{cat.title}</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] font-normal leading-relaxed max-w-xs">
                    {cat.description}
                  </p>
                </div>

                {/* Right Items Docket */}
                <div className="md:col-span-8 space-y-2.5 sm:space-y-3">
                  {cat.items.map((item, itemIdx) => {
                    const isComingSoon = item.includes('coming soon');
                    return (
                      <div
                        key={itemIdx}
                        className={`p-3.5 sm:p-4 rounded-xl text-xs font-heading flex items-start sm:items-center justify-between gap-3 transition-colors ${
                          isComingSoon
                            ? 'bg-[#080A0F]/40 border border-dashed border-white/[0.08] text-[#9CA3AF]/60'
                            : 'bg-[#080A0F]/85 border border-white/[0.08] text-[#EDE8DF] hover:border-[#38BDF8]/40 hover:bg-[#0D1017]'
                        }`}
                      >
                        <span className="break-words leading-relaxed flex-1">{item}</span>
                        {isComingSoon && <Clock className="w-3.5 h-3.5 text-[#9CA3AF]/40 flex-shrink-0 mt-0.5 sm:mt-0" />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Page Link */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          <div className="text-xs font-heading text-[#9CA3AF] tracking-wider uppercase">
            Connect With Me
          </div>
          <Link
            to="/contact"
            className="min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-heading text-[#38BDF8] hover:text-[#EDE8DF] uppercase tracking-wider transition-colors font-medium px-4 py-2 rounded-xl border border-white/[0.05] sm:border-transparent hover:border-white/10"
          >
            <span>Proceed to Contact Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};
