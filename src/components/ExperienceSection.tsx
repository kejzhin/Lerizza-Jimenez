import { Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-pink-50/40 text-stone-900 border-b border-pink-200/60">
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
            CAREER CHRONOLOGY & ROLES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
            Detailed breakdown of virtual assistance roles, Shopify product lister contracts, Instagram outreach engagements, and 10 years of public school teaching and program management.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp: ExperienceItem, idx: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-pink-200/80 rounded-2xl p-5 sm:p-8 hover:border-pink-400 transition-all shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-pink-100">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                    {exp.role}
                  </h3>
                  
                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
                    <span className="flex items-center gap-1 text-pink-700 font-bold">
                      <Building2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                      {exp.company}
                    </span>
                    <span>·</span>
                    <span>{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-pink-800 bg-pink-50/80 px-3.5 py-1.5 rounded-full border border-pink-200 w-fit shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-pink-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <div className="mt-4 sm:mt-5 space-y-3">
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlighted Skills */}
                <div className="pt-4 border-t border-pink-100 flex flex-wrap items-center gap-2 text-xs text-stone-600">
                  <span className="font-bold text-stone-900">Key Competencies:</span>
                  {exp.skillsHighlighted.map((skill, sIdx) => (
                    <span key={sIdx} className="text-pink-900 bg-pink-100/70 px-2.5 py-0.5 rounded-full font-mono text-[11px] border border-pink-200/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
