import { motion } from 'motion/react';
import {
  ShopifyIcon,
  CanvaIcon,
  GoogleWorkspaceIcon,
  MicrosoftOfficeIcon,
  GoHighLevelIcon,
  TrelloIcon,
  CalendlyIcon,
  ZoomIcon,
  InstagramIcon
} from './SoftwareIcons';

export default function ToolsetSection() {
  const tools = [
    {
      name: 'Shopify',
      category: 'E-Commerce Platform',
      purpose: 'Product listings, SKU management, pricing updates, and multi-option variants.',
      icon: <ShopifyIcon className="w-8 h-8" />
    },
    {
      name: 'Canva',
      category: 'Graphic Design',
      purpose: 'Visual assets, social media graphics, and product image enhancements.',
      icon: <CanvaIcon className="w-8 h-8" />
    },
    {
      name: 'Google Workspace',
      category: 'Cloud Office',
      purpose: 'Docs, Sheets data entry, Drive file organization, Gmail & Calendar scheduling.',
      icon: <GoogleWorkspaceIcon className="w-8 h-8" />
    },
    {
      name: 'Microsoft Office',
      category: 'Productivity Suite',
      purpose: 'Excel spreadsheet management, Word reports, and Outlook communication.',
      icon: <MicrosoftOfficeIcon className="w-8 h-8" />
    },
    {
      name: 'GoHighLevel',
      category: 'CRM & Automation',
      purpose: 'Lead tracking, customer pipeline management, and automated follow-ups.',
      icon: <GoHighLevelIcon className="w-8 h-8" />
    },
    {
      name: 'Trello',
      category: 'Project Management',
      purpose: 'Kanban task boards, daily activity tracking, and remote team workflow.',
      icon: <TrelloIcon className="w-8 h-8" />
    },
    {
      name: 'Calendly',
      category: 'Scheduling',
      purpose: 'Automated appointment booking, meeting invites, and time zone buffer sync.',
      icon: <CalendlyIcon className="w-8 h-8" />
    },
    {
      name: 'Zoom',
      category: 'Video Conferencing',
      purpose: 'Webinar hosting, virtual client briefings, and team meetings.',
      icon: <ZoomIcon className="w-8 h-8" />
    },
    {
      name: 'Instagram',
      category: 'Outreach & Lead Gen',
      purpose: 'Target prospect research, personalized DM outreach, and lead prospecting.',
      icon: <InstagramIcon className="w-8 h-8" />
    }
  ];

  return (
    <section id="toolset" className="py-20 bg-[#18030e] text-pink-100 border-b border-pink-950/60">
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
            SOFTWARE & PLATFORM PROFICIENCY
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Software & Digital Toolset
          </h2>
          <p className="text-pink-100/90 leading-relaxed text-base">
            Hands-on daily experience with industry-standard e-commerce, office, design, CRM, and collaboration software.
          </p>
        </motion.div>

        {/* Tools Grid with Real Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 bg-[#220716] border border-pink-900/40 hover:border-pink-500/70 rounded-2xl transition-all duration-300 flex items-start gap-4 shadow-md group"
            >
              <div className="p-3 bg-[#13020b] rounded-xl border border-pink-950 shrink-0 group-hover:scale-105 transition-transform duration-300">
                {tool.icon}
              </div>

              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] font-mono text-pink-300 bg-[#13020b] px-2 py-0.5 rounded border border-pink-950">
                    {tool.category}
                  </span>
                </div>

                <p className="text-xs text-pink-100/70 leading-relaxed">
                  {tool.purpose}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
