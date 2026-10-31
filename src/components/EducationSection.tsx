import { GraduationCap, Languages, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-stone-50 text-stone-900 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 space-y-3 text-center sm:text-left mx-auto sm:mx-0"
        >
          <div className="text-xs font-bold tracking-wider text-rose-800 uppercase">
            ACADEMIC BACKGROUND & LANGUAGES
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">
            Education & Language Proficiency
          </h2>
          <p className="text-stone-600 leading-relaxed text-base">
            Academic degree, continuous trainings, and language fluency providing a resilient foundation for administrative leadership and remote collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Degree Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-rose-100/90 space-y-6 shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-rose-50 text-rose-700 rounded-xl shrink-0 border border-rose-100">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                  TERTIARY DEGREE
                </span>
                <h3 className="text-xl font-bold text-stone-900">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <p className="text-sm font-semibold text-stone-700">
                  {PORTFOLIO_DATA.education.institution}
                </p>
                <p className="text-xs text-stone-500">
                  {PORTFOLIO_DATA.education.location} · {PORTFOLIO_DATA.education.period}
                </p>
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-rose-700" />
                <span>Foundational Educational Leadership:</span>
              </div>
              <p>
                A decade of public teaching and program management honed Lerriza's ability to coordinate complex priorities, facilitate training webinars, maintain precise documentation, and communicate effectively with diverse stakeholders.
              </p>
            </div>
          </motion.div>

          {/* Languages Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-rose-100/90 space-y-6 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-rose-50 text-rose-700 rounded-xl shrink-0 border border-rose-100">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                    COMMUNICATION
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Language Fluency
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {PORTFOLIO_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-stone-900 text-sm block">{lang.language}</span>
                      <span className="text-xs text-stone-500">Global & Professional Communication</span>
                    </div>
                    <span className="text-xs font-semibold text-rose-900 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500">
              Clear, polite, and professional written & verbal English for international remote teams.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
