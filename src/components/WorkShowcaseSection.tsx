import { useState } from 'react';
import { ShoppingBag, Send, FileText, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function WorkShowcaseSection() {
  const [activeTab, setActiveTab] = useState<'shopify' | 'outreach' | 'admin'>('shopify');

  // Interactive state for Shopify Demo
  const [productTitle, setProductTitle] = useState('Classic Italian Leather Heel');
  const [productPrice, setProductPrice] = useState('149.00');
  const [selectedVariant, setSelectedVariant] = useState('Black / Size 38');
  const [productDesc, setProductDesc] = useState('Handcrafted leather footwear featuring ergonomic cushioned insole, classic silhouette, and durable rubber outsole. Perfect for formal and casual styling.');

  // Interactive state for Outreach Demo
  const [prospectName, setProspectName] = useState('E-Commerce Founder');
  const [niche, setNiche] = useState('Fashion & Jewelry');

  return (
    <section id="work" className="py-20 bg-white text-stone-900 border-b border-rose-100">
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
            PROJECT HISTORY & DELIVERABLES
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">
            Interactive Work & Deliverable Samples
          </h2>
          <p className="text-stone-600 leading-relaxed text-base">
            Explore hands-on examples of Shopify product uploads, Instagram lead outreach messaging workflows, and administrative operations standards.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 mb-8 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('shopify')}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'shopify'
                ? 'border-rose-700 text-rose-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-rose-600" />
            <span>Shopify Product Listing Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab('outreach')}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'outreach'
                ? 'border-rose-700 text-rose-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Send className="w-4 h-4 text-rose-600" />
            <span>Instagram Outreach & Lead Gen</span>
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'admin'
                ? 'border-rose-700 text-rose-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <FileText className="w-4 h-4 text-rose-600" />
            <span>Virtual Assistance & Admin Protocols</span>
          </button>
        </div>

        {/* Tab Content 1: Shopify Interactive Showcase */}
        {activeTab === 'shopify' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-amber-50/20 p-6 rounded-2xl border border-rose-100">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Shopify Product Upload & Listing Architecture
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Hands-on demonstration of Shopify product creation: title formatting, pricing rules, variant mapping, copy structuring, and inventory tagging.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Control Inputs */}
                <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-stone-200 space-y-4 shadow-xs">
                  <div className="text-xs font-bold text-rose-900 uppercase tracking-wider pb-2 border-b border-stone-100">
                    Interactive Listing Controls
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Product Title
                    </label>
                    <input
                      type="text"
                      value={productTitle}
                      onChange={(e) => setProductTitle(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Price (USD)
                    </label>
                    <input
                      type="text"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-rose-500 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Selected Variant
                    </label>
                    <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-rose-500 focus:outline-none font-mono"
                    >
                      <option value="Black / Size 36">Black / Size 36</option>
                      <option value="Black / Size 38">Black / Size 38</option>
                      <option value="Nude / Size 37">Nude / Size 37</option>
                      <option value="Gold Metallic / Size 39">Gold Metallic / Size 39</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Formatted Description
                    </label>
                    <textarea
                      rows={3}
                      value={productDesc}
                      onChange={(e) => setProductDesc(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-rose-500 focus:outline-none"
                    ></textarea>
                  </div>
                </div>

                {/* Store Live Preview Card */}
                <div className="lg:col-span-7 bg-stone-950 text-stone-100 p-6 rounded-xl border border-rose-950/60 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 pb-3 border-b border-stone-800">
                    <span className="font-semibold text-white">SHOPIFY STOREFRONT LIVE PREVIEW</span>
                    <span className="font-mono text-rose-400">Active Listing</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div className="aspect-square bg-stone-900 rounded-xl border border-stone-800 flex flex-col items-center justify-center p-4 text-center">
                      <ShoppingBag className="w-10 h-10 text-rose-500/70 mb-2" />
                      <span className="text-xs text-stone-300 font-mono">Product Gallery Image</span>
                      <span className="text-[10px] text-stone-500 mt-1">Sourced & Formatted</span>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs text-rose-300 uppercase tracking-wider font-semibold">
                        GOLD & STONES / JOJO BRAGAIS COLLECTION
                      </div>
                      <h4 className="text-lg font-extrabold text-white leading-snug">
                        {productTitle}
                      </h4>
                      <div className="text-xl font-bold font-mono text-rose-400">
                        ${productPrice}
                      </div>

                      <div className="p-2 bg-stone-900 rounded-lg border border-stone-800 text-xs font-mono text-stone-300">
                        Active Variant: {selectedVariant}
                      </div>

                      <p className="text-xs text-stone-300 leading-relaxed">
                        {productDesc}
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                        <span>SKU: JB-2026-LERR</span>
                        <span>·</span>
                        <span>In Stock: 42 Units</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-stone-50 border border-rose-100 rounded-xl">
                <div className="font-bold text-stone-900 mb-1">Titles & SEO Descriptions</div>
                <div className="text-stone-600">Structured clear product names with search-friendly keywords.</div>
              </div>
              <div className="p-4 bg-stone-50 border border-rose-100 rounded-xl">
                <div className="font-bold text-stone-900 mb-1">Variant & Inventory Management</div>
                <div className="text-stone-600">Accurate mapping of sizes, colors, pricing tiers, and SKUs.</div>
              </div>
              <div className="p-4 bg-stone-50 border border-rose-100 rounded-xl">
                <div className="font-bold text-stone-900 mb-1">Visual Store Presentation</div>
                <div className="text-stone-600">Clean collection assignment and high quality image formatting.</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content 2: Instagram Outreach Showcase */}
        {activeTab === 'outreach' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-amber-50/20 p-6 rounded-2xl border border-rose-100">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Instagram Cold Outreach & Lead Generation Workflow
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Strategic prospect identification, personalized opener messaging, conversation tracking, and qualified lead handoff for JT Media.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Controls */}
                <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-stone-200 space-y-4 shadow-xs">
                  <div className="text-xs font-bold text-rose-900 uppercase tracking-wider pb-2 border-b border-stone-100">
                    Outreach Simulator Parameters
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Prospect Profile Persona
                    </label>
                    <input
                      type="text"
                      value={prospectName}
                      onChange={(e) => setProspectName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Industry Niche
                    </label>
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-rose-500 focus:outline-none"
                    >
                      <option value="Fashion & Jewelry">Fashion & Jewelry</option>
                      <option value="E-Commerce Apparel">E-Commerce Apparel</option>
                      <option value="Beauty & Skincare">Beauty & Skincare</option>
                      <option value="Digital Agencies">Digital Agencies</option>
                    </select>
                  </div>

                  <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-100 text-xs text-stone-700 space-y-2">
                    <div className="font-bold text-rose-900">4-Step Outreach Protocol:</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-600" /> 1. Prospect Research & Audit</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-600" /> 2. Personalized Opener Message</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-600" /> 3. Polite Follow-Up Cadence</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-600" /> 4. CRM Log & Lead Handoff</div>
                  </div>
                </div>

                {/* DM Preview Box */}
                <div className="lg:col-span-7 bg-stone-950 text-stone-100 p-6 rounded-xl border border-rose-950/60 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 pb-3 border-b border-stone-800">
                    <span className="font-semibold text-white">INSTAGRAM DIRECT MESSAGE SIMULATOR</span>
                    <span className="text-stone-400 font-mono">Channel: IG Direct Message</span>
                  </div>

                  <div className="space-y-3 font-sans">
                    {/* Sent DM Box */}
                    <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 text-xs text-stone-200 leading-relaxed max-w-md ml-auto space-y-2">
                      <div className="text-[10px] text-rose-300 font-mono font-semibold">Outreach Specialist (Lerriza):</div>
                      <p>
                        Hi {prospectName}! 👋 I came across your brand in {niche} and really loved your recent product presentation.
                      </p>
                      <p>
                        We’ve been working with {niche} brands to streamline Shopify listing management and drive qualified client leads. Would you be open to a quick chat this week about how we could support your store growth?
                      </p>
                    </div>

                    {/* Prospect Reply */}
                    <div className="bg-rose-950/60 p-3.5 rounded-xl border border-rose-900/60 text-xs text-rose-100 leading-relaxed max-w-md space-y-1.5">
                      <div className="text-[10px] text-rose-300 font-mono font-semibold">Prospect ({prospectName}):</div>
                      <p>Hi Lerriza! Thanks for reaching out. Yes, we're actually looking to update our Shopify listings next month. What times are you free?</p>
                    </div>
                  </div>

                  {/* CRM Log Box */}
                  <div className="pt-3 border-t border-stone-800 text-xs font-mono text-stone-400 flex items-center justify-between">
                    <span>Status: Qualified Warm Lead</span>
                    <span className="text-emerald-400 font-semibold">Logged in Lead Tracker</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content 3: Admin & VA Protocols */}
        {activeTab === 'admin' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-amber-50/20 p-6 rounded-2xl border border-rose-100">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Virtual Assistance & Administrative Operations Standard
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Tested administrative standards developed over 9 years of teaching, program coordination, and remote virtual assistant contracts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 shadow-xs">
                  <div className="p-2.5 bg-rose-50 text-rose-700 w-fit rounded-lg border border-rose-100">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">Documentation & Records</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Accurate file organization, cloud folder structures, data entry, and systematic report maintenance.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5 pt-2 border-t border-stone-100">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Standard File Naming</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Google Drive & Trello</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Error-Free Data Entry</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 shadow-xs">
                  <div className="p-2.5 bg-rose-50 text-rose-700 w-fit rounded-lg border border-rose-100">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">Calendar & Meetings</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Seamless meeting scheduling via Calendly, Zoom setup, program coordination, and webinar facilitation.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5 pt-2 border-t border-stone-100">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Time Zone Buffer Sync</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Webinar Hosting & Invites</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Meeting Notes & Follow-ups</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 shadow-xs">
                  <div className="p-2.5 bg-rose-50 text-rose-700 w-fit rounded-lg border border-rose-100">
                    <Send className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">Email Triage & Communication</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Professional, polite, prompt email management and stakeholder communication for remote teams.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5 pt-2 border-t border-stone-100">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Priority Labeling</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Daily Digest Summary</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-rose-600" /> Courteous Client Tone</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
