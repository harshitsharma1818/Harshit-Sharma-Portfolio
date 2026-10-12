import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Common/SectionHeading';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { Award, Trophy, BookCheck, Sparkles, Star } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Certifications': return <BookCheck className="w-5 h-5 text-amber-400" />;
      case 'Hackathons': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Courses': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Awards': return <Award className="w-5 h-5 text-amber-400" />;
      default: return <Star className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Milestones & Recognition"
          title="Achievements"
          subtitle="An evolving archive of certifications, academic milestones, and future hackathon participations."
          accent="amber"
          align="left"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS_DATA.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-dark-900 border border-white/[0.06] hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-dark-850 border border-slate-800">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Archive Category
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Items List */}
                <div className="space-y-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-dark-850 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                * Editable milestone slot
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
