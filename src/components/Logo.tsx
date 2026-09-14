import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'badge' | 'horizontal' | 'emblem-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AresLedLogo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'badge',
  size = 'md' 
}) => {
  const sizeMap = {
    sm: { circle: 'w-9 h-9', icon: 'w-6 h-6', text: 'text-sm' },
    md: { circle: 'w-12 h-12', icon: 'w-8 h-8', text: 'text-base' },
    lg: { circle: 'w-16 h-16', icon: 'w-11 h-11', text: 'text-lg' },
    xl: { circle: 'w-24 h-24', icon: 'w-16 h-16', text: 'text-xl' }
  }[size];

  // SVG representation matching the exact uploaded image.png
  const OfficialBadgeSvg = ({ className: svgClass = "w-full h-full" }: { className?: string }) => (
    <svg 
      viewBox="0 0 240 240" 
      className={svgClass} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Multi-color outer ring gradient from image.png: Cyan/Blue -> Red -> Gold/Orange -> Green */}
        <linearGradient id="aresRingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00B0FF" />
          <stop offset="35%" stopColor="#00E5FF" />
          <stop offset="60%" stopColor="#FF1744" />
          <stop offset="85%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#00E676" />
        </linearGradient>

        <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Outer multi-color gradient border ring */}
      <circle cx="120" cy="120" r="114" stroke="url(#aresRingGrad)" strokeWidth="6" />

      {/* Crisp White Inner Disc */}
      <circle cx="120" cy="120" r="110" fill="#FFFFFF" filter="url(#softGlow)" />

      {/* ARES Typography with Green Apex Accent on A */}
      <g transform="translate(32, 78)">
        {/* Futuristic 'A' with green tick on top-left */}
        <path 
          d="M 14 0 L 8 4 L 0 24 L 6 24 L 9 16 L 21 16 L 24 24 L 30 24 L 20 0 Z M 15 6 L 19 12 L 11 12 Z" 
          fill="#111827" 
        />
        {/* Green accent tick on the A */}
        <path d="M 12 0 L 7 4 L 11 7 L 15 3 Z" fill="#00C853" />

        {/* Futuristic 'R' */}
        <path 
          d="M 34 0 L 52 0 C 58 0 62 3 62 8 C 62 12 59 15 54 16 L 63 24 L 56 24 L 48 16 L 41 16 L 41 24 L 34 24 Z M 41 5 L 41 12 L 51 12 C 54 12 56 10 56 8.5 C 56 6.5 54 5 51 5 Z" 
          fill="#111827" 
        />

        {/* Futuristic 'E' */}
        <path 
          d="M 68 0 L 92 0 L 92 5 L 75 5 L 75 10 L 89 10 L 89 15 L 75 15 L 75 19 L 93 19 L 93 24 L 68 24 Z" 
          fill="#111827" 
        />

        {/* Futuristic 'S' */}
        <path 
          d="M 98 4 C 100 1 104 0 110 0 L 123 0 L 123 5 L 109 5 C 106 5 105 6 105 8 C 105 10 107 11 112 12 L 117 13 C 122 14 125 17 125 20 C 125 23 121 24 115 24 L 98 24 L 98 19 L 114 19 C 117 19 118 18 118 16.5 C 118 15 116 14 111 13 L 106 12 C 100 11 98 8 98 4 Z" 
          fill="#111827" 
        />

        {/* LED in RGB colors matching image.png: L (Red), E (Green), D (Blue) */}
        {/* 'L' in vibrant Red */}
        <path 
          d="M 130 0 L 137 0 L 137 19 L 148 19 L 148 24 L 130 24 Z" 
          fill="#E53935" 
        />

        {/* 'E' in vibrant Green */}
        <path 
          d="M 152 0 L 171 0 L 171 5 L 159 5 L 159 10 L 169 10 L 169 15 L 159 15 L 159 19 L 171 19 L 171 24 L 152 24 Z" 
          fill="#00E676" 
        />

        {/* 'D' in vibrant Blue/Cyan */}
        <path 
          d="M 175 0 L 189 0 C 197 0 203 5 203 12 C 203 19 197 24 189 24 L 175 24 Z M 182 5 L 182 19 L 188 19 C 193 19 196 16 196 12 C 196 8 193 5 188 5 Z" 
          fill="#00B0FF" 
        />
      </g>

      {/* Subtitle text matching image.png exactly: "LED display screen" / "Factory" */}
      <text 
        x="120" 
        y="136" 
        textAnchor="middle" 
        fill="#111827" 
        fontFamily="Impact, 'Arial Black', -apple-system, sans-serif" 
        fontWeight="900" 
        fontSize="17" 
        letterSpacing="0.4"
      >
        LED display screen
      </text>

      <text 
        x="120" 
        y="158" 
        textAnchor="middle" 
        fill="#111827" 
        fontFamily="Impact, 'Arial Black', -apple-system, sans-serif" 
        fontWeight="900" 
        fontSize="21" 
        letterSpacing="1"
      >
        Factory
      </text>
    </svg>
  );

  if (variant === 'badge' || variant === 'emblem-only') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap.circle} ${className}`}>
        <OfficialBadgeSvg />
      </div>
    );
  }

  // Horizontal Header Variant with badge and elegant brand text
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative shrink-0 ${sizeMap.circle}`}>
        <OfficialBadgeSvg />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1 leading-none">
          <span className="font-heading font-black tracking-tight text-white text-xl">
            ARES
          </span>
          {/* RGB Letters in Brand Colors */}
          <span className="font-heading font-black tracking-tight text-[#E53935] text-xl drop-shadow-[0_0_8px_rgba(229,57,53,0.5)]">
            L
          </span>
          <span className="font-heading font-black tracking-tight text-[#00E676] text-xl drop-shadow-[0_0_8px_rgba(0,230,118,0.5)]">
            E
          </span>
          <span className="font-heading font-black tracking-tight text-[#00B0FF] text-xl drop-shadow-[0_0_8px_rgba(0,176,255,0.5)]">
            D
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[9.5px] tracking-wider font-extrabold uppercase text-slate-300">
            Screen Factory
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
          <span className="text-[9px] font-mono text-emerald-400 font-semibold">
            15Y Source
          </span>
        </div>
      </div>
    </div>
  );
};
