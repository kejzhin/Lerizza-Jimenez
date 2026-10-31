import { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work Showcase', href: '#work' },
    { label: 'Technical Setup', href: '#setup' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md border-b border-rose-900/40 text-stone-100 py-3 shadow-md'
          : 'bg-stone-950 text-stone-100 py-4 border-b border-rose-900/20'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-rose-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-xs shadow-rose-500/50"></span>
          <span className="font-extrabold tracking-wide">LERRIZA JIMENEZ</span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-rose-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-rose-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Me</span>
          </a>
          <a
            href={PORTFOLIO_DATA.profile.onlineJobsProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-rose-500/50 rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            <span>OnlineJobs</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-md"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-stone-900 border-b border-rose-900/30 px-4 pt-3 pb-5 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-stone-200 hover:bg-rose-950/60 hover:text-rose-200 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-md text-center"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {PORTFOLIO_DATA.profile.email}</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.onlineJobsProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-stone-300 border border-stone-700 rounded-md text-center"
            >
              <span>View OnlineJobs Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
