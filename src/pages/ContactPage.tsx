import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Sparkles,
  Terminal
} from 'lucide-react';
import { PageTransition, itemVariants } from '../components/Navigation/PageTransition';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  // Handle email copy to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Strict client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formState.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    if (status === 'error' || status === 'unconfigured') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  // Fallback mailto URL that preserves user content
  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Message from ${formState.name.trim() || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `${formState.message.trim()}\n\n---\nSender: ${formState.name.trim()} (${formState.email.trim()})`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap
    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!validateForm()) {
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Check if endpoint is provided and not the placeholder
    if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
      setStatus('unconfigured');
      setErrorMessage(
        'Online message submission endpoint is being configured. You can launch your email client with this message pre-filled below.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        const serverError =
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          'Failed to deliver message. Please try again or reach out directly.';
        setStatus('error');
        setErrorMessage(serverError);
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Network error encountered during transmission. Please try again or send a direct email.'
      );
    }
  };

  return (
    <PageTransition>
      <div className="relative w-full min-h-screen text-[#EDE8DF] selection:bg-[#38BDF8]/20 selection:text-white pt-24 sm:pt-28 pb-24 px-4 sm:px-10 lg:px-16 overflow-hidden">
        
        {/* Subtle Atmospheric Orbital & Signal Vector Motif */}
        <div className="absolute -top-24 right-0 w-[500px] sm:w-[850px] h-[500px] sm:h-[850px] pointer-events-none select-none opacity-20 overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 850 850" className="w-full h-full" fill="none">
            <defs>
              <radialGradient id="orbitalAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#030405" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="425" cy="425" r="410" fill="url(#orbitalAura)" />
            <circle cx="425" cy="425" r="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="425" cy="425" r="310" stroke="rgba(129,140,248,0.12)" strokeWidth="1" />
            <circle cx="425" cy="425" r="230" stroke="rgba(56,189,248,0.08)" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="425" cy="425" r="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="425" cy="425" r="70" stroke="rgba(216,199,165,0.15)" strokeWidth="1" />
            {/* Orbital Nodes */}
            <circle cx="575" cy="425" r="3.5" fill="#38BDF8" />
            <circle cx="425" cy="195" r="3" fill="#818CF8" />
            <circle cx="275" cy="425" r="3" fill="#D8C7A5" />
            {/* Axis Lines */}
            <line x1="425" y1="20" x2="425" y2="830" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="20" y1="425" x2="830" y2="425" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </svg>
        </div>

        {/* Ambient atmospheric glows */}
        <div className="absolute top-16 right-10 w-[500px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.05),_transparent_70%)] pointer-events-none blur-[120px]" aria-hidden="true" />
        <div className="absolute top-96 left-0 w-[450px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.03),_transparent_70%)] pointer-events-none blur-[140px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            {/* Eyebrow with Beacon Indicator */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] text-[#9CA3AF] uppercase font-semibold">
                OPEN TO CONNECTIONS
              </span>
              <span className="h-px w-6 bg-white/10" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#6B7280] uppercase hidden sm:inline">
                JAIPUR, INDIA · UTC+5:30
              </span>
            </motion.div>

            {/* Striking Atelier Editorial Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-heading font-medium text-[#EDE8DF] tracking-[-0.03em] leading-[1.12] mb-5 sm:mb-6"
            >
              Let's create <br className="hidden sm:inline" />
              <span>something </span>
              <span className="font-signature font-normal text-[#D8C7A5] text-[40px] xs:text-5xl sm:text-7xl lg:text-8xl xl:text-[96px] tracking-normal lowercase ml-1 sm:ml-2">
                meaningful.
              </span>
            </motion.h1>

            {/* Concise Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-[#9CA3AF] font-normal leading-relaxed max-w-2xl"
            >
              Curious about technology, AI, and creative ideas? Let's connect, exchange ideas, and explore what we can build together.
            </motion.p>
          </div>

          {/* Asymmetrical Atelier 2-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Refined Contact Directory (Col 1-5) */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#9CA3AF] uppercase tracking-[0.25em]">
                  DIRECT DIRECTORY
                </span>
                <span className="text-[10px] font-mono text-[#6B7280] uppercase">
                  3 CHANNELS
                </span>
              </div>

              {/* 01: Direct Email Channel */}
              <div className="group relative p-5 sm:p-6 rounded-2xl bg-[#080A0F]/80 border border-white/[0.07] hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-3">
                  <span className="tracking-wider">01 // DIRECT DISPATCH</span>
                  <Mail className="w-4 h-4 text-[#818CF8]" />
                </div>
                
                <div className="text-sm sm:text-lg font-heading font-medium text-[#EDE8DF] break-all select-all">
                  {PERSONAL_INFO.email}
                </div>
                <p className="mt-1.5 text-xs text-[#9CA3AF] leading-relaxed">
                  Personal inbox for student collaborations, project discussions, and questions.
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-[#EDE8DF] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-transparent hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/15 text-xs font-mono text-[#9CA3AF] hover:text-[#EDE8DF] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 02: LinkedIn Network Link */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 sm:p-6 rounded-2xl bg-[#080A0F]/80 border border-white/[0.07] hover:border-[#818CF8]/40 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-3">
                  <span className="tracking-wider">02 // PROFESSIONAL NETWORK</span>
                  <Linkedin className="w-4 h-4 text-[#818CF8]" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-base sm:text-lg font-heading font-medium text-[#EDE8DF] group-hover:text-white transition-colors">
                    Harshit Sharma
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="mt-1.5 text-xs text-[#9CA3AF] leading-relaxed">
                  Student profile, updates, professional network, and tech discussions.
                </p>
              </a>

              {/* 03: GitHub Repository Link */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 sm:p-6 rounded-2xl bg-[#080A0F]/80 border border-white/[0.07] hover:border-[#38BDF8]/40 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-3">
                  <span className="tracking-wider">03 // CODE & REPOSITORIES</span>
                  <Github className="w-4 h-4 text-[#38BDF8]" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-base sm:text-lg font-heading font-medium text-[#EDE8DF] group-hover:text-white transition-colors">
                    @harshitsharma1818
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="mt-1.5 text-xs text-[#9CA3AF] leading-relaxed">
                  Source code repositories, web builds, experiments, and ongoing projects.
                </p>
              </a>

              {/* Telemetry & Student Identity Strip */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#06070A] border border-white/[0.05] space-y-2 text-xs font-mono text-[#6B7280]">
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                  <Terminal className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
                  <span className="break-words">Harshit Sharma · B.Tech CSE (First Year)</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <MapPin className="w-3.5 h-3.5 text-[#818CF8] flex-shrink-0" />
                  <span className="break-words">JECRC University · Jaipur, Rajasthan, India</span>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Distinctive Atelier Contact Form (Col 6-12) */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="relative p-5 sm:p-10 lg:p-12 rounded-3xl bg-[#07090E]/90 border border-white/[0.09] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden">
                
                {/* Subtle Top Glowing Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#818CF8]/30 to-transparent" />
                
                {/* Form Header */}
                <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-semibold">
                      TRANSMISSION CONSOLE
                    </span>
                    <Sparkles className="w-4 h-4 text-[#D8C7A5]" />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-heading font-medium text-[#EDE8DF] tracking-tight">
                    Send a Message
                  </h2>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Have an idea, student project, question, or just want to say hi? Send your note below.
                  </p>
                </div>

                {/* Status Banners */}
                {status === 'success' && (
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#064E3B]/25 border border-emerald-500/40 text-xs text-[#A7F3D0] space-y-2">
                    <div className="flex items-center gap-2 font-heading font-semibold text-sm text-[#ECFDF5]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Transmission Delivered</span>
                    </div>
                    <p className="leading-relaxed text-[#A7F3D0]">
                      Thank you for reaching out! Your note has been delivered to my personal inbox. I'll read it and respond via email shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-xs font-mono text-emerald-300 underline hover:text-white"
                    >
                      Send another note
                    </button>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#7F1D1D]/25 border border-rose-500/40 text-xs text-[#FECACA] space-y-2">
                    <div className="flex items-center gap-2 font-heading font-semibold text-sm text-[#FEF2F2]">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span>Transmission Incomplete</span>
                    </div>
                    <p className="leading-relaxed">
                      {errorMessage}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={getMailtoUrl()}
                        className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs font-mono text-white hover:bg-rose-500/30 transition-all"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="text-xs text-[#FECACA] underline hover:text-white"
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                )}

                {status === 'unconfigured' && (
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#1E293B]/40 border border-[#38BDF8]/40 text-xs text-[#BAE6FD] space-y-2">
                    <div className="flex items-center gap-2 font-heading font-semibold text-sm text-[#F0F9FF]">
                      <AlertCircle className="w-4 h-4 text-[#38BDF8]" />
                      <span>Ready to Dispatch</span>
                    </div>
                    <p className="leading-relaxed">
                      {errorMessage}
                    </p>
                    <div className="pt-2">
                      <a
                        href={getMailtoUrl()}
                        className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-xs font-mono font-medium text-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Launch Email Client with Message</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Form Fields */}
                <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                  
                  {/* Honeypot Spam Guard */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  />

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider block mb-2 font-medium"
                    >
                      01 / YOUR NAME <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      disabled={status === 'submitting'}
                      value={formState.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="e.g. Alex Chen"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#030406]/90 border text-base sm:text-sm text-[#EDE8DF] placeholder:text-[#4B5563] focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                          : 'border-white/[0.08] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider block mb-2 font-medium"
                    >
                      02 / YOUR EMAIL <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={status === 'submitting'}
                      value={formState.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="e.g. alex@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#030406]/90 border text-base sm:text-sm text-[#EDE8DF] placeholder:text-[#4B5563] focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                          : 'border-white/[0.08] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider block mb-2 font-medium"
                    >
                      03 / YOUR MESSAGE <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={status === 'submitting'}
                      value={formState.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Share a project idea, question, or introduce yourself..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#030406]/90 border text-base sm:text-sm text-[#EDE8DF] placeholder:text-[#4B5563] focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                          : 'border-white/[0.08] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Contrasting Atelier Submit Button with Minimum 44px Height */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#EDE8DF] hover:bg-white text-[#030405] font-heading font-semibold text-xs tracking-wider uppercase shadow-[0_4px_24px_rgba(237,232,223,0.12)] hover:shadow-[0_4px_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 text-[#030405] animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send a Message ↗</span>
                        </>
                      )}
                    </button>

                    <p className="mt-3.5 text-[11px] font-mono text-[#6B7280] leading-relaxed">
                      Routed securely to <span className="text-[#9CA3AF]">{PERSONAL_INFO.email}</span>. No marketing tracking.
                    </p>
                  </div>

                </form>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};
