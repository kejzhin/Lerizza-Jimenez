import { Laptop, Wifi, Home, CheckCircle2, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function TechnicalSetupSection() {
  const setupItems = [
    {
      icon: <Laptop className="w-5 h-5 text-rose-400" />,
      title: "Primary Laptop",
      value: PORTFOLIO_DATA.technicalSetup.laptop,
      detail: "High-performance AMD Ryzen 5 processor for smooth multitasking across Shopify, browser tabs, design, and office suites."
    },
    {
      icon: <Monitor className="w-5 h-5 text-emerald-400" />,
      title: "Operating System",
      value: PORTFOLIO_DATA.technicalSetup.os,
      detail: "Updated Windows OS with full security patches and compatible with all modern web apps and extension suites."
    },
    {
      icon: <Wifi className="w-5 h-5 text-amber-400" />,
      title: "Internet Connection",
      value: PORTFOLIO_DATA.technicalSetup.internet,
      detail: "Reliable high-speed fiber internet for seamless Zoom video meetings, rapid Shopify media uploads, and instant outreach."
    },
    {
      icon: <Home className="w-5 h-5 text-indigo-400" />,
      title: "Work Environment",
      value: PORTFOLIO_DATA.technicalSetup.workSetup,
      detail: "Quiet, dedicated remote workstation designed for focused administrative work, customer messaging, and task execution."
    }
  ];

  return (
    <section id="setup" className="py-20 bg-stone-950 text-stone-100 border-b border-rose-950/40">
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
            INFRASTRUCTURE & ENVIRONMENT
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Technical Work Setup
          </h2>
          <p className="text-stone-300 leading-relaxed text-base">
            Equipped with reliable hardware, high-speed connectivity, and a dedicated remote setup to ensure uninterrupted operations and timely deliverables.
          </p>
        </motion.div>

        {/* Setup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {setupItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-stone-900 border border-stone-800 rounded-2xl space-y-3 hover:border-rose-900/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-950 rounded-xl border border-stone-800">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-stone-400 uppercase font-semibold tracking-wider">
                    {item.title}
                  </div>
                  <div className="text-base font-bold text-white">
                    {item.value}
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed pt-2 border-t border-stone-800/80">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Remote Readiness Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-5 bg-stone-900/60 border border-stone-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block sm:inline">100% Remote Project Ready: </span>
              <span>Available for immediate onboarding, part-time shifts, and flexible time zone overlapping.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-stone-400 bg-stone-950 px-3 py-1.5 rounded-lg border border-stone-800 shrink-0">
            <span>Location: GMT+8 (Philippines)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
