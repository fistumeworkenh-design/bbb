import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { Translations } from '../i18n/translations';
import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Truck, 
  Headphones, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Video, 
  Flame,
  Globe2
} from 'lucide-react';

interface WhyChooseUsProps {
  t: Translations;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => {
  const advantages = [
    {
      icon: Building2,
      color: 'text-cyan-400',
      title: t.whyUs.f1Title,
      desc: t.whyUs.f1Desc
    },
    {
      icon: ShieldCheck,
      color: 'text-emerald-400',
      title: t.whyUs.f2Title,
      desc: t.whyUs.f2Desc
    },
    {
      icon: Award,
      color: 'text-amber-400',
      title: t.whyUs.f3Title,
      desc: t.whyUs.f3Desc
    },
    {
      icon: Truck,
      color: 'text-blue-400',
      title: t.whyUs.f4Title,
      desc: t.whyUs.f4Desc
    },
    {
      icon: Headphones,
      color: 'text-purple-400',
      title: t.whyUs.f5Title,
      desc: t.whyUs.f5Desc
    },
    {
      icon: Cpu,
      color: 'text-pink-400',
      title: t.whyUs.f6Title,
      desc: t.whyUs.f6Desc
    }
  ];

  return (
    <section id="why-factory" className="py-20 bg-[#06080F] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>{t.whyUs.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            {t.whyUs.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Feature Factory Image Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 mb-16 shadow-2xl bg-[#090D1A]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side info */}
            <div className="p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Shenzhen Direct Manufacturing Base</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {t.whyUs.plantTitle}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.whyUs.plantDesc}
              </p>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span>High-speed Yamaha & Panasonic Surface Mount Technology (SMT)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span>Automated optical inspection (AOI) for zero-defect solder joints</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span>72-hour full-color burn-in testing racks before wooden crate or flight case packing</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-extrabold text-sm shadow-lg shadow-emerald-500/20"
                >
                  <Video className="w-4 h-4" />
                  <span>{t.whyUs.bookVideoTour}</span>
                </a>
              </div>
            </div>

            {/* Right side factory photo */}
            <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[320px] overflow-hidden">
              <img
                src="/assets/images/factory_aging_racks.jpg"
                alt="ARESLED Screen Factory Cleanroom SMT Lines"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#090D1A] via-transparent to-transparent"></div>

              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-xs">
                Liaokeng Blvd, Shenzhen • Active Aging Rack #14
              </div>
            </div>
          </div>
        </div>

        {/* 6 Grid Core Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#090D1A] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center ${item.color} mb-5 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-heading">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Community Proof Bar from Screenshots */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0C1120] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold text-pink-400 tracking-wider">
              Social Proof & Factory Transparency
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
              {t.whyUs.socialBannerTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg">
              {t.whyUs.socialBannerDesc}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-pink-500/25 transition-transform active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>@aresled_factory (65.9K)</span>
            </a>

            <a
              href={COMPANY_INFO.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-transform active:scale-95"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook (63K Likes)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
