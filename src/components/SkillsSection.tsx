import { useState } from 'react';
import { Briefcase, ShoppingBag, Send, Wrench, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-rose-700" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-700" />;
      case 'Send': return <Send className="w-5 h-5 text-indigo-700" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-700" />;
      default: return <Briefcase className="w-5 h-5 text-stone-700" />;
    }
  };

  const filteredCategories = PORTFOLIO_DATA.skills.filter((category) => {
    if (activeCategory !== 'all' && category.title.toLowerCase().indexOf(activeCategory) === -1) {
      return false;
    }
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    const matchesTitle = category.title.toLowerCase().includes(term);
    const matchesSkill = category.skills.some(s => s.name.toLowerCase().includes(term));
    return matchesTitle || matchesSkill;
  });

  return (
    <section id="skills" className="py-20 bg-amber-50/30 text-stone-900 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <div className="text-xs font-bold tracking-wider text-rose-800 uppercase">
            TECHNICAL & OPERATIONAL CAPABILITIES
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">
            Core Skills & Toolsets
          </h2>
          <p className="text-stone-600 leading-relaxed text-base">
            Hands-on proficiency across Shopify store management, administrative virtual assistance, Instagram outreach campaigns, and cloud office platforms.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8 pb-6 border-b border-stone-200/80">
          
          {/* Segmented Category Filter */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl overflow-x-auto scrollbar-none border border-stone-200">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-rose-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-rose-900'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('virtual assistance')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'virtual assistance'
                  ? 'bg-rose-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-rose-900'
              }`}
            >
              Virtual Assistance
            </button>
            <button
              onClick={() => setActiveCategory('shopify')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'shopify'
                  ? 'bg-rose-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-rose-900'
              }`}
            >
              Shopify Operations
            </button>
            <button
              onClick={() => setActiveCategory('lead generation')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'lead generation'
                  ? 'bg-rose-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-rose-900'
              }`}
            >
              Outreach & Lead Gen
            </button>
            <button
              onClick={() => setActiveCategory('software')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'software'
                  ? 'bg-rose-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-rose-900'
              }`}
            >
              Tools & Software
            </button>
          </div>

          {/* Skill Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Canva)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-rose-100/80 hover:border-rose-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-rose-50/70 rounded-xl border border-rose-100">
                    {getIcon(cat.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                
                <p className="text-xs text-stone-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Unboxed clean text skill layout */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 border-t border-stone-100 pt-4 text-sm text-stone-700">
                  {cat.skills.map((skill, sIdx) => {
                    const matchesSearch = searchTerm && skill.name.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <li
                        key={sIdx}
                        className={`flex items-center gap-2 font-medium ${
                          matchesSearch ? 'text-rose-800 font-bold bg-rose-50 px-1 rounded' : 'text-stone-800'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                        <span className="truncate">{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fast Tool Grid Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 bg-stone-950 text-stone-100 rounded-2xl border border-rose-950/50 space-y-4"
        >
          <div className="text-xs font-bold tracking-wider text-rose-300 uppercase">
            SOFTWARE PLATFORMS & SOFTWARE EXPERIENCE
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-semibold text-stone-200">
            <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-center">Shopify</div>
            <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-center">Canva</div>
            <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-center">Google Workspace</div>
            <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-center">Microsoft Office</div>
            <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-center">GoHighLevel</div>
            <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-center">Trello / Calendly / Zoom</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
