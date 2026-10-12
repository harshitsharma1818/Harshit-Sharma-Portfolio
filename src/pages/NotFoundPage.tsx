import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 sm:px-10 py-24 select-none">
        {/* Subtle Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[420px] max-w-full h-64 sm:h-[420px] rounded-full bg-[#38BDF8]/[0.04] blur-[100px] sm:blur-[140px] pointer-events-none overflow-hidden" aria-hidden="true" />

        <div className="relative z-10 max-w-lg mx-auto space-y-6">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-semibold">
              404 // ROUTE NOT FOUND
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-heading font-medium tracking-tight text-[#EDE8DF]"
          >
            Lost in <span className="font-signature font-normal text-[#D8C7A5] text-6xl sm:text-7xl lowercase">orbit.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-md mx-auto"
          >
            The page you are looking for does not exist or has been relocated within the portfolio navigation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#EDE8DF] hover:bg-white text-[#030405] font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(237,232,223,0.12)]"
            >
              <Compass className="w-4 h-4 text-[#030405]" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#EDE8DF] font-heading font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
