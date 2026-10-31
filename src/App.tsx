import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ToolsetSection from './components/ToolsetSection';
import ExperienceSection from './components/ExperienceSection';
import TechnicalSetupSection from './components/TechnicalSetupSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Split Screen Hero with Photo & Key Stats */}
        <Hero />

        {/* Technical & Operational Skills */}
        <SkillsSection />

        {/* Software & Digital Toolset */}
        <ToolsetSection />

        {/* Chronological Work Experience */}
        <ExperienceSection />

        {/* Remote Work Technical Setup & Hardware Specs */}
        <TechnicalSetupSection />

        {/* Academic Education & Language Fluency */}
        <EducationSection />

        {/* Direct Contact (No Contact Form as requested) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-slate-900 text-white rounded-full shadow-lg border border-slate-700 hover:bg-slate-800 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
