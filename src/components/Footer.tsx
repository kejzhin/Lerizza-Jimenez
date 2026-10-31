import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-rose-950/40 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Note */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-white text-sm tracking-tight flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
            <span>LERRIZA JIMENEZ</span>
          </div>
          <p className="text-stone-500">
            Virtual Assistant · Shopify Product Lister · Instagram Outreach Specialist
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-stone-400 font-medium">
          <a href="#about" className="hover:text-rose-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-rose-300 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-rose-300 transition-colors">Experience</a>
          <a href="#work" className="hover:text-rose-300 transition-colors">Showcase</a>
          <a href="#setup" className="hover:text-rose-300 transition-colors">Setup</a>
          <a href="#contact" className="hover:text-rose-300 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-stone-500 text-center sm:text-right font-mono text-[11px]">
          © {new Date().getFullYear()} Lerriza Jimenez.
        </div>

      </div>
    </footer>
  );
}
