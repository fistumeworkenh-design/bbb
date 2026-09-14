import React from 'react';
import { AresLedLogo } from './Logo';
import { COMPANY_INFO } from '../data/products';
import { Translations } from '../i18n/translations';
import { 
  MessageCircle, 
  MapPin, 
  Globe, 
  Instagram, 
  Facebook, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  t: Translations;
  onOpenConfigurator: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  onOpenConfigurator,
  onOpenWhatsAppModal
}) => {
  return (
    <footer className="bg-[#04060C] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-cyan-950/20 via-slate-900 to-emerald-950/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
              ARESLED • Shenzhen Source Factory Base
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              {t.footer.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              {t.footer.ctaDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>{t.footer.btnChatWhatsApp}</span>
            </button>

            <button
              onClick={onOpenConfigurator}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-sm border border-cyan-500/30 flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.footer.btnLaunchCalc}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <AresLedLogo variant="horizontal" size="lg" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.factoryLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Worldwide Direct Export • CE / FCC / RoHS Certified</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/40 flex items-center justify-center transition-colors"
                title="WhatsApp: +86 177 0371 2497"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-pink-500/30 text-pink-400 hover:bg-pink-950/40 flex items-center justify-center transition-colors"
                title="Instagram: @aresled_factory (65.9K Followers)"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-400 hover:bg-blue-950/40 flex items-center justify-center transition-colors"
                title="Facebook: Aresled Factory (63K Likes)"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading">
              {t.footer.seriesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Titan Tour Pro Rental (P2.97 / P3.91)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  UltraFine Church & Studio (P1.25 - P1.86)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  StormGuard Outdoor 3D Billboard
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  ArenaShield Stadium Perimeter
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  CrystalVision Transparent Glass
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  FlexCurve Wave & 90° Corner
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Testing & Factory */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading">
              {t.footer.testingTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#factory-reels" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>1.5m Drop & Stomp Test</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#factory-reels" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>Torrent Water Pouring Video</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#factory-reels" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>10s Quick-Lock Assembly</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#factory-reels" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>72-Hour Full White Aging</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#why-factory" className="hover:text-cyan-400 transition-colors">
                  Shenzhen Cleanroom SMT Lines
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Ordering & Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading">
              {t.footer.orderingTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenConfigurator} className="hover:text-cyan-400 transition-colors text-left">
                  Instant Online Order & Pricing
                </button>
              </li>
              <li>
                <button onClick={onOpenWhatsAppModal} className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1">
                  <span>WhatsApp Fast Quotation</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </button>
              </li>
              <li>
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Request Free Sample Panel
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">
                  Worldwide Shipping Terms (DDP)
                </a>
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">Free 5% Spares with Every Order</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Location & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>{t.footer.locationLabel}</span>
          </div>

          <div className="text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} ARESLED Screen Factory. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
