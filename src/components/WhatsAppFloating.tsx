import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/products';
import { MessageCircle, X, Sparkles } from 'lucide-react';

interface WhatsAppFloatingProps {
  onOpenModal: () => void;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ onOpenModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="relative bg-[#0F1524] border border-emerald-500/40 text-slate-100 p-3 rounded-2xl shadow-2xl max-w-xs text-xs flex items-start gap-2.5 animate-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700 text-[10px]"
            title="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0 mt-1"></div>

          <div>
            <div className="font-bold text-emerald-300 text-[11px] uppercase tracking-wider">
              Factory Sales Online
            </div>
            <p className="text-slate-300 text-xs mt-0.5">
              Need instant LED screen quotes or video test? Chat on WhatsApp now!
            </p>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <button
        onClick={onOpenModal}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-black shadow-2xl shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-transform"
        aria-label="Contact ARESLED Screen Factory on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-pulse"></span>
        <MessageCircle className="w-7 h-7 fill-black text-black relative z-10" />

        {/* 24/7 status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#090D16] z-20"></span>
      </button>
    </div>
  );
};
