import React, { useState, useEffect } from 'react';
import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AmbientBackground } from './components/Hero/AmbientBackground';
import { SolarSystemBackground } from './components/Background/SolarSystemBackground';
import { Navbar } from './components/Navigation/Navbar';
import { CommandPalette } from './components/Navigation/CommandPalette';
import { ScrollToTop } from './components/Common/ScrollToTop';
import { Footer } from './components/Footer/Footer';
import { pageContainerVariants } from './components/Navigation/PageTransition';
// Eagerly import all page components to eliminate async chunk latency, Suspense stalls, and black-screen flickers
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const routeElements = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/education', element: <EducationPage /> },
  { path: '/skills', element: <SkillsPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/achievements', element: <AchievementsPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const element = useRoutes(routeElements, location);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full flex-1 flex flex-col"
      >
        {element}
      </motion.div>
    </AnimatePresence>
  );
};

export const AppContent: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const location = useLocation();

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome = location.pathname === '/';
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const isSolarRoute = ['/education', '/skills', '/projects', '/achievements', '/contact'].includes(normalizedPath);

  return (
    <div className={`relative ${isHome ? 'min-h-[100svh] md:h-[100svh] md:overflow-hidden' : 'min-h-screen'} bg-[#030405] text-[#EDE8DF] selection:bg-[#E8C98A]/25 selection:text-[#EDE8DF] font-sans flex flex-col`}>
      <ScrollToTop />
      <AmbientBackground />
      
      {/* Subtle Live Solar-System Background (Active on Education, Skills, Projects, Achievements, and Contact only) */}
      <AnimatePresence>
        {isSolarRoute && (
          <SolarSystemBackground key="solar-system-background" />
        )}
      </AnimatePresence>

      <Navbar />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      <main id="main-content" tabIndex={-1} className={`relative z-10 flex-1 flex flex-col focus:outline-none ${isHome ? 'h-full md:overflow-hidden' : ''}`}>
        <AnimatedRoutes />
      </main>

      {/* Footer rendered ONLY on inner pages, NEVER on Home */}
      {!isHome && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
