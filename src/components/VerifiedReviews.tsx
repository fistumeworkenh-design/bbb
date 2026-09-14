import React from 'react';
import { CLIENT_TESTIMONIALS, COMPANY_INFO } from '../data/products';
import { Star, ShieldCheck, CheckCircle2, Award, Globe } from 'lucide-react';

export const VerifiedReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#090D16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Global Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Installed Across 120+ Countries
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Read how arena production directors, church AVL volunteers, and outdoor media networks rely on ARESLED screen panels every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CLIENT_TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="font-bold text-white text-sm font-heading">{review.name}</div>
                <div className="text-xs text-cyan-400 font-medium">{review.role}</div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span>{review.location}</span>
                  <span className="font-mono text-emerald-400">{review.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-cyan-400" />
            <div className="text-left">
              <div className="text-sm font-bold text-white font-heading">CE & EMC Class B</div>
              <div className="text-[11px] text-slate-400">European Conformity Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <div className="text-left">
              <div className="text-sm font-bold text-white font-heading">FCC & ETL Safety</div>
              <div className="text-[11px] text-slate-400">North American Compliant</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-amber-400" />
            <div className="text-left">
              <div className="text-sm font-bold text-white font-heading">ISO9001:2015</div>
              <div className="text-[11px] text-slate-400">International Quality Management</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-purple-400" />
            <div className="text-left">
              <div className="text-sm font-bold text-white font-heading">RoHS & CB Scheme</div>
              <div className="text-[11px] text-slate-400">Eco-Friendly Non-Hazardous</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
