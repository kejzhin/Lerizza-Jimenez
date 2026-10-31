import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Mail, ExternalLink, X, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const resumeUrl = "/assets/aistudio/leriza.pdf";

  return (
    <section id="home" className="pt-28 pb-16 bg-[#18030e] text-pink-100 border-b border-pink-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols): Typographic Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Lerriza Jimenez
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-pink-300">
                Detail-Oriented Administrative & Shopify Product Operations
              </p>

              {/* Professional Summary from CV */}
              <p className="text-base sm:text-lg text-pink-100/90 leading-relaxed font-normal">
                {PORTFOLIO_DATA.profile.summary}
              </p>

              {/* Action Buttons: Resume & Contact */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => setShowPdfModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full transition-all shadow-md shadow-pink-950/60 hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-pink-100 hover:text-white bg-[#220716] hover:bg-[#2e091e] border border-pink-900/60 rounded-full transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): User Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <img
              src={PORTFOLIO_DATA.profile.picturePath}
              alt="Lerriza Jimenez Professional Portrait"
              className="w-full max-h-[520px] object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </motion.div>

        </div>

      </div>

      {/* Resume Viewer Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#1e0513] border border-pink-900/60 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#13020b] border-b border-pink-950 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                <FileText className="w-5 h-5 text-pink-500" />
                <span>Lerriza Jimenez - Resume</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-pink-200 hover:text-white bg-[#220716] border border-pink-900/60 rounded-lg flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </a>

                <a
                  href={resumeUrl}
                  download="Lerriza_Jimenez_CV.pdf"
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 rounded-lg flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  onClick={() => setShowPdfModal(false)}
                  className="p-1.5 text-pink-300 hover:text-white hover:bg-pink-950/60 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="flex-1 bg-stone-900 w-full h-full relative">
              <object
                data={resumeUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="p-8 text-center text-pink-200 flex flex-col items-center justify-center h-full space-y-4">
                  <p className="text-sm sm:text-base">Your browser doesn't support embedded PDF preview.</p>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full"
                  >
                    Click Here to View Resume PDF
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
