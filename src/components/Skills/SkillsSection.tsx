import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Common/SectionHeading';
import { SKILLS_LIST, SkillStage } from '../../data/portfolioData';
import { Layout, Palette, Cpu, FileCode, Sparkles, Wand2, Globe, FolderKanban } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HTML': return <Layout className="w-5 h-5 text-amber-400" />;
      case 'CSS': return <Palette className="w-5 h-5 text-amber-400" />;
      case 'JavaScript': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Python': return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'Artificial Intelligence': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Generative AI': return <Wand2 className="w-5 h-5 text-amber-400" />;
      case 'Web Development': return <Globe className="w-5 h-5 text-amber-400" />;
      case 'Digital Productivity': return <FolderKanban className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getStageColor = (stage: SkillStage) => {
    switch (stage) {
      case 'Building Foundations':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25';
      case 'Practicing':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/25';
      case 'Learning':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/25';
      case 'Exploring':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/25';
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Technical & Digital Competencies"
          title="Skills"
          subtitle="Areas of programming, web technologies, and artificial intelligence I am actively studying and practicing."
          accent="amber"
          align="left"
        />

        {/* Minimal Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS_LIST.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="p-6 rounded-2xl bg-dark-900 border border-white/[0.06] hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-300 group-hover:scale-105 transition-transform">
                    {getIcon(skill.name)}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-medium ${getStageColor(skill.stage)}`}>
                    {skill.stage}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>{skill.category}</span>
                <span className="text-slate-400">First-Year Focus</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
