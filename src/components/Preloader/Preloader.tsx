import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {
    // Step 1: HARSHIT SHARMA for 700ms
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 700);

    // Step 2: B.TECH CSE • JECRC UNIVERSITY for 700ms, then finish
    const timer2 = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950 text-white"
    >
      <div className="text-center px-4">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 font-mono font-bold text-xl shadow-glow-amber">
                H
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-sans">
                HARSHIT SHARMA
              </h1>
            </motion.div>
          ) : (
            <motion.div
              key="creds"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>FIRST YEAR</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-mono text-slate-300 tracking-wider">
                B.TECH CSE • JECRC UNIVERSITY
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimal thin glowing progress underline */}
        <div className="w-36 h-[2px] bg-slate-800 rounded-full mx-auto mt-8 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};
