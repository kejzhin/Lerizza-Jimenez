import { useState } from 'react';
import { Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#18030e] text-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <div className="text-xs font-bold tracking-wider text-pink-400 uppercase">
            DIRECT INQUIRIES & RECRUITMENT
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Get in Touch Directly
          </h2>
          <p className="text-pink-100/90 leading-relaxed text-base">
            Reach out via email, phone, or view my OnlineJobs.ph profile for remote contracts, virtual assistance projects, and Shopify store management positions.
          </p>
        </motion.div>

        {/* Direct Action Cards Grid (3 cards: Email, Phone, & OnlineJobs Profile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Direct Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-[#220716] border border-pink-900/40 rounded-2xl space-y-4 hover:border-pink-500/70 transition-all flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="p-3 bg-[#13020b] text-pink-400 w-fit rounded-xl border border-pink-950">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Direct Email
              </h3>
              <p className="text-xs text-pink-100/70 leading-relaxed">
                Send a direct email message for project inquiries, task briefs, or job offers.
              </p>
              <div className="p-3 bg-[#13020b] rounded-xl border border-pink-950 font-mono text-xs text-pink-200 select-all break-all">
                {PORTFOLIO_DATA.profile.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full text-center transition-colors shadow-xs"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email_card')}
                className="p-2.5 bg-[#13020b] border border-pink-950 hover:border-pink-800 text-pink-300 hover:text-white rounded-full transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email_card' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* Phone Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 bg-[#220716] border border-pink-900/40 rounded-2xl space-y-4 hover:border-pink-500/70 transition-all flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="p-3 bg-[#13020b] text-emerald-400 w-fit rounded-xl border border-pink-950">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Phone & Messaging
              </h3>
              <p className="text-xs text-pink-100/70 leading-relaxed">
                Direct call or SMS connection for immediate remote position discussions.
              </p>
              <div className="p-3 bg-[#13020b] rounded-xl border border-pink-950 font-mono text-xs text-pink-200 select-all">
                {PORTFOLIO_DATA.profile.phone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#13020b] hover:bg-[#2e091e] rounded-full text-center transition-colors border border-pink-900/60"
              >
                Call Number
              </a>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone_card')}
                className="p-2.5 bg-[#13020b] border border-pink-950 hover:border-pink-800 text-pink-300 hover:text-white rounded-full transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone_card' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* OnlineJobs Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 bg-[#220716] border border-pink-900/40 rounded-2xl space-y-4 hover:border-pink-500/70 transition-all flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="p-3 bg-[#13020b] text-indigo-400 w-fit rounded-xl border border-pink-950">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                OnlineJobs.ph Profile
              </h3>
              <p className="text-xs text-pink-100/70 leading-relaxed">
                View candidate profile, verified credentials, and employment history.
              </p>
              <div className="p-3 bg-[#13020b] rounded-xl border border-pink-950 font-mono text-[11px] text-pink-200 truncate">
                onlinejobs.ph/jobseekers/info/4204401
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.onlineJobsProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#13020b] hover:bg-[#2e091e] rounded-full text-center transition-colors border border-pink-900/60 flex items-center justify-center gap-2"
              >
                <span>View OnlineJobs Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Location & Availability Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 bg-[#220716] rounded-2xl border border-pink-900/40 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Based in Quezon, Nueva Ecija, Philippines
            </h4>
            <p className="text-xs text-pink-100/70">
              GMT+8 Time Zone · Flexible overlapping hours for US, Australian, European, & Asian business hours.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="px-5 py-2.5 text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full transition-colors shadow-xs"
            >
              Contact Lerriza
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
