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

        {/* Copyright */}
        <div className="text-pink-100/50 text-center sm:text-right font-mono text-[11px]">
          © {new Date().getFullYear()} Lerriza Jimenez.
        </div>

      </div>
    </footer>
  );
}
