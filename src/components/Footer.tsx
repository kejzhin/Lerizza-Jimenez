import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#13020b] text-pink-100/70 py-12 border-t border-pink-950/60 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Note */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-white text-sm tracking-tight flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-pink-500 inline-block animate-pulse"></span>
            <span>LERRIZA JIMENEZ</span>
          </div>
          <p className="text-pink-100/60">
            Virtual Assistant · Shopify Product Lister · Instagram Outreach Specialist
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-pink-100/80 font-medium">
          <a href="#home" className="hover:text-pink-300 transition-colors">Home</a>
          <a href="#skills" className="hover:text-pink-300 transition-colors">Skills</a>
          <a href="#toolset" className="hover:text-pink-300 transition-colors">Toolsets</a>
          <a href="#experience" className="hover:text-pink-300 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-pink-300 transition-colors">Contact</a>
        </div>

        {/* Copyright & Credits */}
        <div className="text-pink-100/60 text-center sm:text-right font-mono text-[11px] space-y-1.5">
          <div>© {new Date().getFullYear()} Lerriza Jimenez. All rights reserved.</div>
          <div className="text-pink-300/90 font-sans text-xs">
            Created by{' '}
            <a
              href="https://www.facebook.com/Kejzhin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-200 underline underline-offset-2 transition-colors font-semibold"
            >
              <span>Jeric de los Reyes</span>
              <svg className="w-3 h-3 fill-current inline-block ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
