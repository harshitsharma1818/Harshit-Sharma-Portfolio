import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Common/SectionHeading';
import { PROJECTS_LIST } from '../../data/portfolioData';
import { ExternalLink, Clock } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Practical Building"
          title="Projects"
          subtitle="Honest student portfolio projects and exploratory concepts in active development."
          accent="amber"
          align="left"
        />

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_LIST.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 sm:p-8 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Number & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    PROJECT {proj.num}
                  </span>
                  {proj.status !== 'COMPLETED' ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-850 text-slate-400 border border-slate-800 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{proj.status === 'IN PROGRESS' ? 'In Progress' : 'Coming Soon'}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Active Release
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-2.5">
                  {proj.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.shortDescription}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-dark-850 text-slate-300 border border-slate-800 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-800/80">
                {proj.status !== 'COMPLETED' ? (
                  <button
                    disabled
                    className="w-full py-2.5 px-4 rounded-xl bg-dark-850 border border-slate-800 text-xs font-mono text-slate-500 cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span>{proj.status === 'IN PROGRESS' ? 'In Progress' : 'Coming Soon'}</span>
                  </button>
                ) : (
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400/50 text-xs font-mono text-amber-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
