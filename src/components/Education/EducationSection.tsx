import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Common/SectionHeading';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="Formal engineering degree program and foundational areas of study currently being explored."
          accent="amber"
          align="left"
        />

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-10 rounded-2xl bg-dark-900 border border-white/[0.08]"
        >
          {/* Degree & Institution */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/25 mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {education.degree}
              </h3>
              <p className="text-base text-slate-300 font-medium mt-1">
                {education.college}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-850 border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{education.status}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-850 border border-slate-800 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          {/* Relevant Learning Areas */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Core Curricular & Relevant Learning Areas:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.learningAreas.map((area, idx) => (
                <div
                  key={area.name}
                  className="p-3.5 rounded-xl bg-dark-850 border border-white/[0.05] hover:border-slate-700 transition-colors flex items-center gap-3"
                >
                  <span className="text-[10px] font-mono text-amber-400 font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] font-mono text-slate-500">
            * Grounded first-year computer science curriculum focusing on procedural coding, algorithmic logic, mathematics, and digital literacy.
          </div>
        </motion.div>

      </div>
    </section>
  );
};
