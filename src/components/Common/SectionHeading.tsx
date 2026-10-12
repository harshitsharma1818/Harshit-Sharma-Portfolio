import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accent?: 'amber' | 'blue' | 'violet' | 'emerald';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  accent = 'amber',
  align = 'center',
  className = '',
}) => {
  const accentColors = {
    amber: {
      dot: 'bg-amber-400 shadow-glow-amber',
      badge: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      gradient: 'text-gradient-amber',
    },
    blue: {
      dot: 'bg-tech-blue shadow-glow-blue',
      badge: 'text-tech-blue border-tech-blue/30 bg-tech-blue/10',
      gradient: 'text-gradient-blue',
    },
    violet: {
      dot: 'bg-tech-violet shadow-glow-violet',
      badge: 'text-tech-violet border-tech-violet/30 bg-tech-violet/10',
      gradient: 'text-gradient-violet',
    },
    emerald: {
      dot: 'bg-tech-emerald shadow-glow-emerald',
      badge: 'text-tech-emerald border-tech-emerald/30 bg-tech-emerald/10',
      gradient: 'text-gradient-amber',
    },
  }[accent];

  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-14 md:mb-20 ${alignmentClass} ${className}`}
    >
      {/* Eyebrow badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border backdrop-blur-md mb-4 ${accentColors.badge}`}>
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${accentColors.dot}`} />
        <span>{eyebrow}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-4xl leading-[1.15]">
        {title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
