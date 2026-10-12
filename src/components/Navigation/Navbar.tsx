import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scrolling when mobile menu is open & handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Auto-focus close button for keyboard accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-safe ${
          isScrolled
            ? 'py-3.5 bg-[#030405]/92 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/80'
            : 'py-5 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Top-Left: Signature "Harshit Sharma" Wordmark */}
          <Link
            to="/"
            className="group relative inline-flex items-center min-h-[44px] py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A] rounded-lg select-none transition-transform duration-250 hover:-translate-y-[1px]"
            aria-label="Harshit Sharma - Home"
          >
            <span className="font-signature text-2xl sm:text-[28px] text-[#EDE8DF] group-hover:text-[#E8C98A] transition-colors duration-250 select-none tracking-normal font-normal">
              Harshit Sharma
            </span>
            {/* Subtle champagne-gold underline reveal */}
            <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#E8C98A]/75 shadow-[0_0_8px_rgba(232,201,138,0.5)] scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left" />
          </Link>

          {/* Desktop Right Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = hoveredPath === item.path;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="group relative py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A] rounded-md"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span
                    className={`block text-xs lg:text-[13px] tracking-[0.14em] font-heading font-medium uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-[#EDE8DF] -translate-y-[1px]'
                        : isHovered
                        ? 'text-[#E8C98A] -translate-y-[1px]'
                        : 'text-[#9CA3AF]'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Page: Luminous Champagne-Gold Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[1.5px] bg-[#E8C98A] shadow-[0_0_12px_rgba(232,201,138,0.8)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}

                  {/* Hover State Underline */}
                  {!isActive && (
                    <span
                      className={`absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#E8C98A]/50 transition-all duration-200 origin-left ${
                        isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button with Guaranteed 44x44 Touch Target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-[#9CA3AF] hover:text-[#EDE8DF] hover:bg-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#030405] flex flex-col justify-between p-6 sm:p-10 pt-safe pb-safe md:hidden overflow-y-auto"
          >
            {/* Top Bar with Minimal Close & Custom Wordmark */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="group inline-flex items-center min-h-[44px] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A] rounded-lg"
                aria-label="Harshit Sharma - Home"
              >
                <span className="font-signature text-2xl text-[#EDE8DF] group-hover:text-[#E8C98A] transition-colors tracking-normal font-normal">
                  Harshit Sharma
                </span>
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-[#9CA3AF] hover:text-[#EDE8DF] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Large Elegant Page Links with Accessible Touch Targets */}
            <nav className="flex flex-col gap-2 py-6 my-auto" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 + 0.05, duration: 0.28 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between min-h-[48px] py-2 px-3 rounded-xl hover:bg-white/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A]"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span
                        className={`text-xl sm:text-2xl font-heading font-medium tracking-tight transition-colors ${
                          isActive
                            ? 'text-[#E8C98A]'
                            : 'text-[#EDE8DF] group-hover:text-[#E8C98A]'
                        }`}
                      >
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          isActive ? 'text-[#E8C98A]' : 'text-[#6B7280]'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Footer Meta */}
            <div className="border-t border-white/[0.08] pt-5 flex flex-col gap-1.5 text-xs font-mono text-[#6B7280]">
              <div className="text-[#9CA3AF]">Harshit Sharma · B.Tech CSE (First Year)</div>
              <div>JECRC University, Jaipur, Rajasthan, India</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
