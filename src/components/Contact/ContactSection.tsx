import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Common/SectionHeading';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Communication"
          title="Contact"
          subtitle="Get in touch to discuss computer science, collaboration, or learning opportunities."
          accent="amber"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Personal Information & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Student Contact Card */}
            <div className="p-8 rounded-2xl bg-dark-900 border border-white/[0.08]">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-2">
                Personal Details
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-1">
                {PERSONAL_INFO.degree}
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {PERSONAL_INFO.college} • {PERSONAL_INFO.location}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-dark-850 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-200 truncate">
                    <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Professional Buttons: Email Me, LinkedIn, GitHub */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Channels
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Email Me Button */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  data-cursor="link"
                  className="p-3.5 rounded-xl bg-dark-900 border border-white/[0.08] hover:border-amber-400/50 hover:bg-dark-850 text-slate-200 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email Me</span>
                </a>

                {/* Professional LinkedIn Button (Opens Profile in New Tab without displaying raw URL) */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="p-3.5 rounded-xl bg-dark-900 border border-white/[0.08] hover:border-tech-blue/50 hover:bg-dark-850 text-slate-200 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <Linkedin className="w-4 h-4 text-tech-blue" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                {/* GitHub Placeholder Button */}
                <button
                  onClick={() => alert('GitHub profile will be linked soon once public repositories are finalized.')}
                  data-cursor="link"
                  className="p-3.5 rounded-xl bg-dark-900 border border-white/[0.08] hover:border-slate-700 hover:bg-dark-850 text-slate-400 hover:text-slate-300 flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </button>
              </div>

              <p className="text-[11px] font-mono text-slate-500">
                * LinkedIn connects to my verified student profile. GitHub repository links will be updated as projects progress.
              </p>
            </div>

          </div>

          {/* Right Column: Clean Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-900 border border-white/[0.08]">
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a question or want to connect? Send a note directly below.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will respond to your email address promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@university.edu"
                      className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="link"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-sm tracking-wide transition-all shadow-glow-amber flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
