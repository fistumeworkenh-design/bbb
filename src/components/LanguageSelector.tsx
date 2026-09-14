import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../i18n/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  className?: string;
  variant?: 'compact' | 'full';
}

interface LangOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

const LANGUAGES: LangOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇺🇸' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文 (简体)', flag: '🇨🇳' },
  { code: 'ko', label: 'Korean', nativeLabel: '한국어', flag: '🇰🇷' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onSelectLang,
  className = '',
  variant = 'compact'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Pro Placing Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-400/60 transition-all text-xs font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
        aria-label="Select Language"
      >
        <span className="text-sm">{selected.flag}</span>
        <span className="font-heading tracking-wide uppercase">{selected.code}</span>
        <span className="hidden sm:inline text-slate-400 text-[11px]">({selected.nativeLabel})</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0F1424] border border-cyan-500/30 shadow-2xl shadow-black/80 py-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800 mb-1">
            Choose Language / 语言 / 언어
          </div>
          {LANGUAGES.map((lang) => {
            const isCurrent = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  onSelectLang(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                  isCurrent 
                    ? 'bg-cyan-950/40 text-cyan-300 font-bold' 
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{lang.flag}</span>
                  <div className="text-left">
                    <div className="font-medium text-white">{lang.nativeLabel}</div>
                    <div className="text-[10px] text-slate-400">{lang.label}</div>
                  </div>
                </div>
                {isCurrent && <Check className="w-4 h-4 text-cyan-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
