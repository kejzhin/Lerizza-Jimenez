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
    <section id="contact" className="py-20 bg-stone-950 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <div className="text-xs font-bold tracking-wider text-rose-400 uppercase">
            DIRECT INQUIRIES & RECRUITMENT
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Get in Touch Directly
          </h2>
          <p className="text-stone-300 leading-relaxed text-base">
            Reach out via email, phone, or view my OnlineJobs.ph profile for remote contracts, virtual assistance projects, and Shopify store management positions.
          </p>
        </motion.div>

        {/* Direct Action Cards Grid (NO CONTACT FORM AS REQUESTED) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Direct Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-stone-900 border border-stone-800 rounded-2xl space-y-4 hover:border-rose-900/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="p-3 bg-stone-950 text-rose-400 w-fit rounded-xl border border-stone-800">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Direct Email
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Send a direct email message for project inquiries, task briefs, or job offers.
              </p>
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 font-mono text-xs text-stone-200 select-all break-all">
                {PORTFOLIO_DATA.profile.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg text-center transition-colors shadow-xs"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email_card')}
                className="p-2.5 bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors"
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
            className="p-6 bg-stone-900 border border-stone-800 rounded-2xl space-y-4 hover:border-rose-900/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="p-3 bg-stone-950 text-emerald-400 w-fit rounded-xl border border-stone-800">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Phone & Messaging
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Direct call or SMS connection for immediate remote position discussions.
              </p>
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 font-mono text-xs text-stone-200 select-all">
                {PORTFOLIO_DATA.profile.phone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-stone-800 hover:bg-stone-700 rounded-lg text-center transition-colors border border-stone-700"
              >
                Call Number
              </a>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone_card')}
                className="p-2.5 bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors"
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
            className="p-6 bg-stone-900 border border-stone-800 rounded-2xl space-y-4 hover:border-rose-900/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="p-3 bg-stone-950 text-indigo-400 w-fit rounded-xl border border-stone-800">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                OnlineJobs.ph Profile
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                View verified platform candidate profile, applicant details, and work history.
              </p>
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 font-mono text-[11px] text-stone-400 truncate">
                ID: 4204401 · OnlineJobs
              </div>
            </div>

            <a
              href={PORTFOLIO_DATA.profile.onlineJobsProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-stone-800 hover:bg-stone-700 rounded-lg text-center transition-colors border border-stone-700 flex items-center justify-center gap-2"
            >
              <span>View OnlineJobs Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

        {/* Location & Availability Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 bg-stone-900/60 rounded-2xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Based in Quezon, Nueva Ecija, Philippines
            </h4>
            <p className="text-xs text-stone-400">
              GMT+8 Time Zone · Flexible overlapping hours for US, Australian, European, & Asian business hours.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors shadow-xs"
            >
              Contact Lerriza
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
