import React from 'react';

/**
 * Clean, simple normal fade transition effect.
 * Smoothly dissolves the outgoing page and fades in the incoming page.
 */
export const pageContainerVariants = {
  initial: {
    opacity: 0,
    y: 6,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const itemVariants = {};
export const celestialEase = [0.16, 1, 0.3, 1];
export const shockwaveEase = [0.16, 1, 0.3, 1];
export const nebulaEase = [0.16, 1, 0.3, 1];

export const PageTransition: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`w-full flex-1 flex flex-col ${className}`}>
      {children}
    </div>
  );
};

// Aliases for compatibility
export const SupernovaBurstTransition: React.FC<{ activeKey?: string }> = () => null;
export const SupernovaPulseTransition = SupernovaBurstTransition;
export const MidnightNavyTransitionSweep = SupernovaBurstTransition;
export const SilverNavyLightSweep = SupernovaBurstTransition;
export const AmberLightSweep = SupernovaBurstTransition;
