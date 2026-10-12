import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, BookOpen, GraduationCap, Wrench, FolderGit2, Trophy, Mail, ExternalLink, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Home / Landing Page',
      category: 'Navigation',
      icon: <Compass className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/'); onClose(); },
      shortcut: 'H'
    },
    {
      id: 'nav-about',
      title: 'About Me',
      category: 'Navigation',
      icon: <BookOpen className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/about'); onClose(); },
      shortcut: 'A'
    },
    {
      id: 'nav-education',
      title: 'Education & Academic Curriculum',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/education'); onClose(); },
      shortcut: 'E'
    },
    {
      id: 'nav-skills',
      title: 'Skills & Capabilities',
      category: 'Navigation',
      icon: <Wrench className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/skills'); onClose(); },
      shortcut: 'S'
    },
    {
      id: 'nav-projects',
      title: 'Projects & Case Studies',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/projects'); onClose(); },
      shortcut: 'P'
    },
    {
      id: 'nav-achievements',
      title: 'Milestones & Achievements',
      category: 'Navigation',
      icon: <Trophy className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/achievements'); onClose(); },
      shortcut: 'M'
    },
    {
      id: 'nav-contact',
      title: 'Contact & Inquiry',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-[#38BDF8]" />,
      action: () => { navigate('/contact'); onClose(); },
      shortcut: 'C'
    },
    {
      id: 'act-copy-email',
      title: `Copy Email: ${PERSONAL_INFO.email}`,
      category: 'Quick Actions',
      icon: <Mail className="w-4 h-4 text-[#38BDF8]" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Quick Actions',
      icon: <ExternalLink className="w-4 h-4 text-[#38BDF8]" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedinUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'Quick Actions',
      icon: <ExternalLink className="w-4 h-4 text-[#38BDF8]" />,
      action: () => {
        window.open(PERSONAL_INFO.githubUrl, '_blank');
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#080A0F] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08]">
              <Search className="w-4 h-4 text-[#38BDF8] mr-3" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type a page name or action..."
                className="w-full bg-transparent text-sm text-[#EDE8DF] placeholder-[#9CA3AF]/50 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-[#9CA3AF] hover:text-[#EDE8DF] hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-heading text-[#9CA3AF]">
                  No matching commands found
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-colors ${
                      idx === selectedIndex
                        ? 'bg-[#0D1017] text-[#EDE8DF] border border-white/[0.08]'
                        : 'text-[#9CA3AF] hover:text-[#EDE8DF] hover:bg-[#080A0F]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {cmd.icon}
                      <span className="text-xs font-heading font-medium">{cmd.title}</span>
                    </div>
                    {cmd.shortcut && (
                      <kbd className="px-2 py-0.5 text-[10px] font-heading bg-[#0D1017] border border-white/[0.12] rounded text-[#38BDF8]">
                        {cmd.shortcut}
                      </kbd>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Command Palette Footer */}
            <div className="px-4 py-2.5 bg-[#030405] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-heading text-[#9CA3AF]">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
                <span>ESC Close</span>
              </div>
              <span className="text-[#38BDF8]">Command Palette</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
