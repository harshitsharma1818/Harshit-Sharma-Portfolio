import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Black Base: #030405 */}
      <div className="absolute inset-0 bg-[#030405]" />

      {/* Atmospheric Violet / Indigo Plume (Upper Right) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.06, 1],
                opacity: [0.04, 0.08, 0.04],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-20 w-[750px] h-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15),_transparent_70%)] blur-[160px] transform-gpu"
      />

      {/* Subtle Cyan / Blue Plume (Lower Left / Center) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.05, 1],
                opacity: [0.03, 0.06, 0.03],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -bottom-40 left-[5%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12),_transparent_70%)] blur-[180px] transform-gpu"
      />

      {/* Tiny Film Grain Texture Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-15" />
    </div>
  );
};
