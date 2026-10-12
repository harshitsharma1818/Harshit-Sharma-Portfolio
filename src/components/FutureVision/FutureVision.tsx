import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export const FutureVision: React.FC = () => {
  const steps = [
    { label: 'LEARN', desc: 'Absorb computer science fundamentals, logic & math' },
    { label: 'BUILD', desc: 'Construct tangible tools, utilities and experiments' },
    { label: 'EXPERIMENT', desc: 'Test boundaries, encounter bugs & understand why' },
    { label: 'CREATE', desc: 'Ship genuinely useful technology for people' },
  ];

  return (
    <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04] bg-dark-950">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border border-white/[0.08] text-slate-400 mb-6"
        >
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>Long-Term Horizon</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-8"
        >
          WHERE I'M HEADING
        </motion.h2>

        {/* Grounded First-Person Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto space-y-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-14"
        >
          <p>
            "I'm still at the beginning of my journey."
          </p>
          <p className="text-slate-400">
            "I don't have everything figured out yet — and that's exactly what makes the journey exciting."
          </p>
          <p className="text-amber-200/90 font-medium">
            "My goal is to build a strong foundation in computer science, explore artificial intelligence and modern technology, and eventually create things that are genuinely useful."
          </p>
        </motion.div>

        {/* 4-Stage Horizontal / Grid Pipeline: LEARN -> BUILD -> EXPERIMENT -> CREATE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {steps.map((s, idx) => (
            <div
              key={s.label}
              className="p-5 rounded-xl bg-dark-900 border border-white/[0.06] text-left relative flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-500 font-bold block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {s.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-normal">
                  {s.desc}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
