import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
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
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Toolsets', href: '#toolset' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a0410]/95 backdrop-blur-md border-b border-pink-900/40 text-pink-100 py-3 shadow-md'
          : 'bg-[#18030e] text-pink-100 py-4 border-b border-pink-900/30'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-pink-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block shadow-xs shadow-pink-500/80 animate-pulse"></span>
          <span className="font-extrabold tracking-wider">LERRIZA JIMENEZ</span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-pink-100/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-pink-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-pink-400 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action Button (Email Me only) */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full transition-all whitespace-nowrap shrink-0 shadow-md shadow-pink-950/60 hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-pink-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg"
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
          className="md:hidden bg-[#18030e] border-b border-pink-900/40 px-4 pt-3 pb-5 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-pink-100 hover:bg-pink-950/80 hover:text-pink-300 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-pink-950 flex flex-col gap-2">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full text-center"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {PORTFOLIO_DATA.profile.email}</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
