import { useState } from 'react';
import { Mail, Phone, ExternalLink, MapPin, Copy, Check, ShieldCheck, Laptop, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="about" className="pt-28 pb-16 bg-stone-950 text-stone-100 border-b border-rose-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols): Typographic Content with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              
              {/* Clean Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-rose-400 uppercase">
                <span>VIRTUAL ASSISTANT</span>
                <span className="text-stone-600">·</span>
                <span>SHOPIFY LISTING SPECIALIST</span>
                <span className="text-stone-600">·</span>
                <span>LEAD GENERATION</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Detail-Oriented Administrative & Shopify Product Operations
              </h1>

              {/* Professional Summary from CV */}
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
                {PORTFOLIO_DATA.profile.summary}
              </p>
            </div>

            {/* Quick Specs List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-300 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-rose-900/40 transition-colors">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{PORTFOLIO_DATA.profile.location}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-rose-900/40 transition-colors">
                <Laptop className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PORTFOLIO_DATA.technicalSetup.workSetup}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-rose-900/40 transition-colors">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PORTFOLIO_DATA.profile.availability}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-rose-900/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>English (Proficient) · Filipino (Native)</span>
              </div>
            </div>

            {/* Single Action Button Group (NO DUPLICATES, NO CONTACT FORM) */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-md transition-all shadow-md shadow-rose-950"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-200 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-400" />
                <span>Call ({PORTFOLIO_DATA.profile.phone})</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.onlineJobsProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-rose-500/50 rounded-md transition-colors"
              >
                <span>OnlineJobs Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

          </motion.div>

          {/* Right Column (5 cols): User Photo (lcd.png) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full bg-stone-900/90 border border-rose-900/30 rounded-2xl overflow-hidden p-4 shadow-2xl">
              
              {/* Picture Container displaying lcd.png */}
              <div className="relative aspect-[3/4] w-full max-h-[460px] bg-stone-950 rounded-xl overflow-hidden border border-stone-800 flex items-center justify-center">
                <img
                  src={PORTFOLIO_DATA.profile.picturePath}
                  alt="Lerriza Jimenez Professional Portrait"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Visual Overlay Header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-rose-900/40">
                  <span className="font-semibold text-white">LERRIZA JIMENEZ</span>
                  <span className="text-rose-300 font-medium">Virtual Assistant</span>
                </div>
              </div>

              {/* Quick Info & Copy Links below photo */}
              <div className="mt-4 space-y-2 text-xs text-stone-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800">
                  <span className="text-stone-400">Email Address</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-stone-200">{PORTFOLIO_DATA.profile.email}</span>
                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email')}
                      className="p-1 hover:text-white text-stone-400 transition-colors"
                      title="Copy email"
                    >
                      {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800">
                  <span className="text-stone-400">Phone Contact</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-stone-200">{PORTFOLIO_DATA.profile.phone}</span>
                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone')}
                      className="p-1 hover:text-white text-stone-400 transition-colors"
                      title="Copy phone"
                    >
                      {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
