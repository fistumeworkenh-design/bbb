import React, { useState, useEffect } from 'react';
import { AresLedLogo } from './Logo';
import { COMPANY_INFO } from '../data/products';
import { Language, Translations } from '../i18n/translations';
import { LanguageSelector } from './LanguageSelector';
import { 
  Phone, 
  MessageCircle, 
  Sliders, 
  Menu, 
  X, 
  Sparkles, 
  Instagram,
  Facebook,
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  t: Translations;
  onOpenConfigurator: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentLang,
  onSelectLang,
  t,
  onOpenConfigurator,
  onOpenWhatsAppModal 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar with Real Factory WhatsApp & Pro Language Placement */}
      <div className="bg-[#04060B] border-b border-slate-800/80 text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Factory Hours & Certifications */}
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.nav.statusHours}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline text-slate-400">
              {t.nav.factoryNotice}
            </span>
          </div>

          {/* Socials, WhatsApp & Pro Language Selector Placement */}
          <div className="flex items-center gap-3.5">
            {/* Socials */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href={COMPANY_INFO.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-slate-300 hover:text-pink-400 transition-colors"
                title="Instagram @aresled_factory (65.9K)"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span className="font-semibold text-[11px]">65.9K</span>
              </a>

              <a 
                href={COMPANY_INFO.facebookLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-slate-300 hover:text-blue-400 transition-colors"
                title="Facebook: Aresled Factory (63K Likes)"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-[11px]">63K</span>
              </a>
            </div>

            {/* Direct WhatsApp pill */}
            <a 
              href={COMPANY_INFO.whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/80 font-bold transition-colors text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
              <span>{COMPANY_INFO.whatsappRaw}</span>
            </a>

            {/* PRO TOP PLACING FOR LANGUAGE SELECTOR */}
            <LanguageSelector
              currentLang={currentLang}
              onSelectLang={onSelectLang}
            />
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#06080F]/95 backdrop-blur-md border-b border-slate-800/90 shadow-2xl shadow-black/80' 
            : 'bg-[#06080F]/80 backdrop-blur-sm border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with Real Uploaded Badge */}
          <a href="#" className="flex items-center gap-2 group">
            <AresLedLogo variant="horizontal" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#products" className="hover:text-white transition-colors">
              {t.nav.products}
            </a>
            <a href="#factory-reels" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>{t.nav.labReels}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 font-extrabold uppercase tracking-wider border border-red-500/40 animate-pulse">
                {t.nav.liveVideo}
              </span>
            </a>
            <a href="#configurator" className="hover:text-white transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.calculator}</span>
            </a>
            <a href="#why-factory" className="hover:text-white transition-colors">
              {t.nav.whyFactory}
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              {t.nav.globalProjects}
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Online Order Button */}
            <button
              onClick={onOpenConfigurator}
              className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-xs sm:text-sm border border-slate-700/90 hover:border-cyan-400/50 transition-all flex items-center gap-2 shadow-sm"
            >
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>{t.nav.onlineOrder}</span>
            </button>

            {/* Direct WhatsApp Ordering Button */}
            <button
              onClick={onOpenWhatsAppModal}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>{t.nav.whatsappOrder}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenWhatsAppModal}
              className="p-2.5 rounded-xl bg-emerald-500 text-black font-bold"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A0D18] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400 font-semibold">Select Language:</span>
              <LanguageSelector
                currentLang={currentLang}
                onSelectLang={onSelectLang}
              />
            </div>

            <div className="flex flex-col space-y-2 font-medium text-slate-200">
              <a 
                href="#products" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                {t.nav.products}
              </a>
              <a 
                href="#factory-reels" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 flex items-center justify-between"
              >
                <span>{t.nav.labReels}</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">
                  {t.nav.liveVideo}
                </span>
              </a>
              <a 
                href="#configurator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                {t.nav.calculator}
              </a>
              <a 
                href="#why-factory" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                {t.nav.whyFactory}
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                {t.nav.globalProjects}
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfigurator();
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs border border-cyan-500/40 flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>{t.nav.onlineOrder}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 text-black font-extrabold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.whatsappOrder} (+86 177 0371 2497)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
