import { Briefcase, ShoppingBag, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-pink-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'Send': return <Send className="w-5 h-5 text-indigo-600" />;
      default: return <Briefcase className="w-5 h-5 text-pink-600" />;
    }
  };

  const coreSkillCategories = PORTFOLIO_DATA.skills.filter(c => c.iconName !== 'Wrench');

  return (
    <section id="skills" className="py-16 sm:py-20 bg-pink-50/60 text-stone-900 border-b border-pink-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10 sm:mb-12 space-y-3"
        >
          <div className="text-xs font-bold tracking-wider text-pink-700 uppercase">
            OPERATIONAL CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Core Professional Skills
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
            Detailed breakdown of virtual assistance competencies, Shopify product operations, and Instagram outreach capabilities.
          </p>
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {coreSkillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 sm:p-6 bg-white rounded-2xl border border-pink-200/80 hover:border-pink-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-pink-100/60 rounded-xl border border-pink-200 shrink-0">
                    {getIcon(cat.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight leading-snug">
                    {cat.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-stone-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Unboxed clean text skill layout */}
                <ul className="space-y-2.5 border-t border-pink-100 pt-4 text-xs sm:text-sm text-stone-700">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 font-medium text-stone-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span>
                      <span className="break-words">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
