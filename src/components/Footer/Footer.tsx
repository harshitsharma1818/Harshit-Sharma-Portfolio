import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#030405] border-t border-white/[0.08] overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Top Split: Identity & Nav */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-base font-heading font-medium text-[#EDE8DF] tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-[#9CA3AF] font-heading mt-1 leading-relaxed">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.college}, {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Page Routing Links */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-6 text-xs font-heading text-[#9CA3AF]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="min-h-[40px] inline-flex items-center hover:text-[#E8C98A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8C98A] rounded-md px-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Back to top button with 44x44 touch target */}
          <button
            type="button"
            onClick={scrollToTop}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-3 rounded-xl bg-[#080A0F] hover:bg-[#10131B] border border-white/[0.08] hover:border-[#E8C98A]/40 text-[#9CA3AF] hover:text-white transition-all self-start md:self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C98A]"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#E8C98A]" />
          </button>
        </div>

        {/* Bottom Split: Copyright & Social */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div className="leading-relaxed">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} • B.Tech CSE (Core), JECRC University, Jaipur.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#E8C98A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8C98A] rounded-md"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#E8C98A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8C98A] rounded-md"
              aria-label="GitHub profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#E8C98A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8C98A] rounded-md"
              aria-label="Send direct email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
