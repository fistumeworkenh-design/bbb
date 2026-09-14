import React, { useState } from 'react';
import { FACTORY_REELS, COMPANY_INFO } from '../data/products';
import { FactoryReel } from '../types';
import { Translations } from '../i18n/translations';
import { 
  Play, 
  CheckCircle2, 
  ExternalLink, 
  ShieldAlert, 
  Flame, 
  Instagram, 
  X, 
  Sliders, 
  MessageCircle,
  Video
} from 'lucide-react';

interface FactoryReelsProps {
  t: Translations;
  onSelectProductForConfig: (category: string) => void;
  onOpenWhatsAppModal: (note?: string) => void;
}

export const FactoryReels: React.FC<FactoryReelsProps> = ({
  t,
  onSelectProductForConfig,
  onOpenWhatsAppModal
}) => {
  const [activeReel, setActiveReel] = useState<FactoryReel | null>(null);

  return (
    <section id="factory-reels" className="py-20 bg-[#070912] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>{t.reels.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              {t.reels.title}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.reels.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/20 transition-transform active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.reels.followInsta}</span>
            </a>
          </div>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACTORY_REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative bg-[#0D111E] rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111E] via-black/20 to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white font-mono text-[11px]">
                  {reel.views}
                </div>

                {/* Test Metric Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-600/90 text-white font-bold text-[10px] uppercase tracking-wide flex items-center gap-1 shadow-md">
                  <Flame className="w-3 h-3 fill-white" />
                  <span>{reel.category}</span>
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={() => setActiveReel(reel)}
                  className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black shadow-xl shadow-cyan-500/40 transform group-hover:scale-110 transition-transform"
                  aria-label={`Play ${reel.title}`}
                >
                  <Play className="w-6 h-6 fill-black ml-0.5" />
                </button>
              </div>

              {/* Reel Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-heading mb-1.5">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {reel.caption}
                  </p>
                </div>

                {/* Quick actions for this reel's product */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveReel(reel)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <span>{t.reels.inspectVideo}</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForConfig('rental')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <Sliders className="w-3 h-3 text-cyan-400" />
                    <span>{t.reels.quotePanel}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Video Simulation Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0F1424] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  {t.reels.liveTestCamera}
                </span>
              </div>
              <button
                onClick={() => setActiveReel(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Live Lab Video Feed */}
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeReel.thumbnail}
                alt={activeReel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-105"
              />

              {/* Watermark overlay */}
              <div className="absolute top-4 left-4 font-mono text-xs text-white/80 bg-black/60 px-3 py-1 rounded">
                ARESLED DIRECT LAB CAM #03 • SHENZHEN FACTORY
              </div>

              {/* Rec badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600/80 text-white font-mono text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>REC 1080P 60FPS</span>
              </div>

              {/* Quality overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm font-heading">{activeReel.title}</div>
                  <div className="text-xs text-emerald-400 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Passed: 0 dead pixels, IP68 sealed, structural integrity 100%</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const note = `I watched the "${activeReel.title}" video reel. I want to inquire about this exact durable LED screen model for our upcoming project.`;
                    setActiveReel(null);
                    onOpenWhatsAppModal(note);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Quote on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-950 text-xs text-slate-400 flex items-center justify-between">
              <span>{t.reels.verifiedBadge}: <strong>Shenzhen Baoan Quality Station</strong></span>
              <a
                href={COMPANY_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
