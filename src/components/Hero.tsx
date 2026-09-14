import React, { useState } from 'react';
import { AresLedLogo } from './Logo';
import { COMPANY_INFO } from '../data/products';
import { Translations } from '../i18n/translations';
import { 
  Play, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  Flame,
  Volume2,
  VolumeX,
  Eye,
  Maximize2
} from 'lucide-react';

interface HeroProps {
  t: Translations;
  onOpenConfigurator: () => void;
  onOpenWhatsAppModal: () => void;
  onScrollToReels: () => void;
}

type CinematicTheme = 'arena' | 'factory' | 'billboard' | 'studio';

export const Hero: React.FC<HeroProps> = ({
  t,
  onOpenConfigurator,
  onOpenWhatsAppModal,
  onScrollToReels
}) => {
  const [activeTheme, setActiveTheme] = useState<CinematicTheme>('arena');
  const [isPlayingVisual, setIsPlayingVisual] = useState(true);

  // Cinematic theme assets and backdrop configurations
  const themes = {
    arena: {
      label: 'Arena World Tour',
      tagline: '7680Hz Ultra-High Refresh • 10s Fast Lock',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40',
      image: '/assets/images/hero_concert_stage.jpg',
      overlayGradient: 'from-[#06080F] via-transparent to-[#06080F]/90',
      ambientGlow: 'rgba(0, 210, 255, 0.25)',
      specs: ['16-Bit Gray Scale', '3840Hz - 7680Hz PWM', 'Die-Cast Magnesium 7.2kg']
    },
    factory: {
      label: 'Shenzhen Source Factory',
      tagline: '12,000m² Cleanroom • 72h Full White Aging',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40',
      image: '/assets/images/factory_aging_racks.jpg',
      overlayGradient: 'from-[#06080F] via-transparent to-[#06080F]/90',
      ambientGlow: 'rgba(0, 230, 118, 0.25)',
      specs: ['0 Dead Pixel Standard', 'Automated SMT Lines', 'Free 5% Spares Included']
    },
    billboard: {
      label: 'Outdoor 3D Billboard',
      tagline: '10,000 Nits Sunlight Visible • IP68 Stormproof',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/40',
      image: '/assets/images/outdoor_3d_billboard.jpg',
      overlayGradient: 'from-[#06080F] via-transparent to-[#06080F]/90',
      ambientGlow: 'rgba(245, 158, 11, 0.25)',
      specs: ['IP68 Double Waterproof', '90° Seamless Corner', 'Direct Sunshine Contrast']
    },
    studio: {
      label: 'Church & TV Studio',
      tagline: 'Broadcast P1.86 COB • 0 Scan Lines HDR10+',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/40',
      image: '/assets/images/church_studio_led.jpg',
      overlayGradient: 'from-[#06080F] via-transparent to-[#06080F]/90',
      ambientGlow: 'rgba(168, 85, 247, 0.25)',
      specs: ['P1.25 - P1.86 Fine Pitch', 'Zero Moiré Effect', '100% Front Vacuum Service']
    }
  };

  const currentTheme = themes[activeTheme];

  return (
    <section className="relative overflow-hidden pt-6 pb-20 sm:pt-10 sm:pb-28 bg-[#06080F]">
      {/* Cinematic Ambient Beams & Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan/Blue Left Stage Spotlight */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] animate-pulse"></div>
        {/* Red/Crimson Accent Glow */}
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[130px]"></div>
        {/* Green/Emerald Center Laser Glow */}
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] rounded-full bg-emerald-600/10 blur-[150px]"></div>

        {/* Angular stage beams */}
        <div className="absolute top-0 left-1/4 w-32 h-[800px] bg-gradient-to-b from-cyan-500/15 to-transparent blur-2xl transform -rotate-25 animate-beam-left"></div>
        <div className="absolute top-0 right-1/4 w-32 h-[800px] bg-gradient-to-b from-red-500/10 to-transparent blur-2xl transform rotate-25 animate-beam-right"></div>

        {/* Cinematic Grid */}
        <div className="absolute inset-0 bg-cinematic-grid opacity-60"></div>
        <div className="absolute inset-0 cinematic-vignette"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Badge Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-bold uppercase tracking-wider text-slate-200 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>{t.hero.badgeFactory}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.hero.badgeAging}</span>
          </div>
        </div>

        {/* Main Cinema Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-heading">
            <span>{t.hero.titleLine1}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#00E676] to-[#FF2A55] drop-shadow-[0_0_25px_rgba(0,210,255,0.4)]">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Calculator / Online Order CTA */}
            <button
              onClick={onOpenConfigurator}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-base shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Sliders className="w-5 h-5 text-slate-950" />
              <span>{t.hero.ctaCalculator}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Direct WhatsApp Ordering CTA */}
            <button
              onClick={onOpenWhatsAppModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0F1829] hover:bg-[#162238] border-2 border-emerald-500/50 hover:border-emerald-400 text-white font-extrabold text-base shadow-xl shadow-emerald-500/15 transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span>{t.hero.ctaWhatsApp}</span>
            </button>
          </div>
        </div>

        {/* CINEMATIC WIDESCREEN DISPLAY & ATMOSPHERE SWITCHER */}
        <div className="relative max-w-5xl mx-auto mt-4 rounded-3xl p-1 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-black">
          {/* Glass Bezel */}
          <div className="relative rounded-[22px] overflow-hidden bg-[#0A0E1A] border border-slate-800">
            {/* Top Cinema Bar with Official Badge & Controls */}
            <div className="px-4 sm:px-6 py-3 bg-[#06080F]/90 backdrop-blur-md border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              {/* Official Logo Badge from uploaded image.png */}
              <div className="flex items-center gap-3">
                <AresLedLogo variant="badge" size="sm" />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2 font-heading">
                    <span>ARESLED DIRECT BROADCAST FEED</span>
                    <span className="px-1.5 py-0.2 rounded bg-red-600 text-white text-[9px] font-black uppercase animate-pulse">
                      REC ●
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    7680Hz PWM • 4K HDR • Color Temperature: 6500K
                  </div>
                </div>
              </div>

              {/* Theme Switcher Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTheme('arena')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    activeTheme === 'arena'
                      ? 'bg-cyan-500 text-black shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Concert
                </button>
                <button
                  onClick={() => setActiveTheme('factory')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    activeTheme === 'factory'
                      ? 'bg-emerald-500 text-black shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Factory
                </button>
                <button
                  onClick={() => setActiveTheme('billboard')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    activeTheme === 'billboard'
                      ? 'bg-amber-500 text-black shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  3D Billboard
                </button>
                <button
                  onClick={() => setActiveTheme('studio')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    activeTheme === 'studio'
                      ? 'bg-purple-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Studio
                </button>
              </div>
            </div>

            {/* Cinematic Screen Window with High Resolution Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden group">
              <img
                src={currentTheme.image}
                alt={currentTheme.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient lighting mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-black/40"></div>

              {/* Subtle RGB Scanning Beam effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-16 w-full animate-pulse pointer-events-none"></div>

              {/* Floating Real-Time Specifications Pill inside visual */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-md">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide border mb-2 backdrop-blur-md ${currentTheme.badgeColor}`}>
                  <Flame className="w-3.5 h-3.5" />
                  <span>{currentTheme.tagline}</span>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-200">
                  {currentTheme.specs.map((spec, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-slate-700/60 font-mono">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Launch Factory Durability Lab Action Button */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <button
                  onClick={onScrollToReels}
                  className="px-4 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-lg shadow-red-600/30 transition-transform active:scale-95"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t.hero.watchTests}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-heading">
              {t.hero.metric1Val}
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.hero.metric1Lbl}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-emerald-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">
              {t.hero.metric2Val}
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.hero.metric2Lbl}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-amber-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
              {t.hero.metric3Val}
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.hero.metric3Lbl}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-red-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-red-400 font-heading">
              {t.hero.metric4Val}
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">
              {t.hero.metric4Lbl}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
