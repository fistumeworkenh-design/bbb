import React, { useState, useMemo } from 'react';
import { CONFIGURATOR_CATEGORIES, COMPANY_INFO } from '../data/products';
import { ConfiguratorState, ConfiguratorCategory } from '../types';
import { Translations, Language } from '../i18n/translations';
import { 
  Sliders, 
  Layers, 
  Grid, 
  Zap, 
  Scale, 
  Eye, 
  Package, 
  ShoppingCart, 
  MessageCircle, 
  Check, 
  HelpCircle,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ScreenConfiguratorProps {
  t: Translations;
  currentLang: Language;
  onOrderOnline: (config: ConfiguratorState, calculatedData: any) => void;
  onWhatsAppOrder: (config: ConfiguratorState, calculatedData: any) => void;
  initialCategory?: string;
}

export const ScreenConfigurator: React.FC<ScreenConfiguratorProps> = ({
  t,
  currentLang,
  onOrderOnline,
  onWhatsAppOrder,
  initialCategory = 'rental'
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategory);
  const selectedCategory = CONFIGURATOR_CATEGORIES.find(c => c.id === selectedCategoryId) || CONFIGURATOR_CATEGORIES[0];

  const [selectedPitch, setSelectedPitch] = useState<string>(selectedCategory.defaultPitch);
  const [widthMeters, setWidthMeters] = useState<number>(5);
  const [heightMeters, setHeightMeters] = useState<number>(3);
  const [includeController, setIncludeController] = useState<boolean>(true);
  const [includeFlightCases, setIncludeFlightCases] = useState<boolean>(true);
  const [includeHangingBars, setIncludeHangingBars] = useState<boolean>(true);
  const [destinationCountry, setDestinationCountry] = useState<string>('United States');

  // Popular stage presets
  const presets = [
    { label: 'Church 4×2.5m (16:9)', w: 4, h: 2.5, cat: 'indoor', pitch: 'P1.86' },
    { label: 'Concert Stage 6×4m', w: 6, h: 4, cat: 'rental', pitch: 'P2.97' },
    { label: 'Festival Stage 10×6m', w: 10, h: 6, cat: 'rental', pitch: 'P3.91' },
    { label: 'Outdoor 3D Billboard 8×5m', w: 8, h: 5, cat: 'outdoor', pitch: 'P4.0' },
  ];

  const handleApplyPreset = (p: typeof presets[0]) => {
    setSelectedCategoryId(p.cat);
    setSelectedPitch(p.pitch);
    setWidthMeters(p.w);
    setHeightMeters(p.h);
  };

  const handleCategoryChange = (cat: ConfiguratorCategory) => {
    setSelectedCategoryId(cat.id);
    setSelectedPitch(cat.defaultPitch);
  };

  // Real-time calculation logic
  const calculations = useMemo(() => {
    const pWidthM = selectedCategory.panelWidthMm / 1000;
    const pHeightM = selectedCategory.panelHeightMm / 1000;

    const panelsWide = Math.max(1, Math.round(widthMeters / pWidthM));
    const panelsHigh = Math.max(1, Math.round(heightMeters / pHeightM));
    const totalPanels = panelsWide * panelsHigh;

    const actualWidth = Number((panelsWide * pWidthM).toFixed(2));
    const actualHeight = Number((panelsHigh * pHeightM).toFixed(2));
    const actualArea = Number((actualWidth * actualHeight).toFixed(2));

    const pitchVal = parseFloat(selectedPitch.replace('P', '')) || 2.97;
    const pixelsPerPanelX = Math.round(selectedCategory.panelWidthMm / pitchVal);
    const pixelsPerPanelY = Math.round(selectedCategory.panelHeightMm / pitchVal);
    const resX = panelsWide * pixelsPerPanelX;
    const resY = panelsHigh * pixelsPerPanelY;

    const basePanelPrice = selectedCategory.basePricePerPanel;
    const screenBaseTotal = totalPanels * basePanelPrice;

    const controllerCost = includeController ? (totalPanels > 40 ? 1250 : 650) : 0;
    const flightCasesCount = Math.ceil(totalPanels / 8);
    const flightCaseCost = includeFlightCases ? flightCasesCount * 220 : 0;
    const hangingBarsCost = includeHangingBars ? panelsWide * 95 : 0;

    const grossSubtotal = screenBaseTotal + controllerCost + flightCaseCost + hangingBarsCost;

    let discountPercent = 0;
    if (actualArea >= 40) discountPercent = 12;
    else if (actualArea >= 20) discountPercent = 8;
    else if (actualArea >= 10) discountPercent = 5;

    const discountAmount = Math.round((grossSubtotal * discountPercent) / 100);
    const finalWholesalePrice = grossSubtotal - discountAmount;

    const totalWeightKg = Math.round(totalPanels * selectedCategory.panelWeightKg);
    const avgPowerKw = Number(((totalPanels * selectedCategory.avgPowerWatts) / 1000).toFixed(1));
    const peakPowerKw = Number(((totalPanels * selectedCategory.maxPowerWatts) / 1000).toFixed(1));

    const minViewDistanceM = Math.max(1, Math.round(pitchVal * 1.0));
    const optViewDistanceM = Math.round(pitchVal * 2.5);

    return {
      categoryName: selectedCategory.name,
      panelsWide,
      panelsHigh,
      totalPanels,
      actualWidth,
      actualHeight,
      actualArea,
      resX,
      resY,
      screenBaseTotal,
      controllerCost,
      flightCasesCount,
      flightCaseCost,
      hangingBarsCost,
      discountPercent,
      discountAmount,
      finalWholesalePrice,
      totalWeightKg,
      avgPowerKw,
      peakPowerKw,
      minViewDistanceM,
      optViewDistanceM
    };
  }, [selectedCategory, selectedPitch, widthMeters, heightMeters, includeController, includeFlightCases, includeHangingBars]);

  const currentConfigState: ConfiguratorState = {
    category: selectedCategoryId,
    pitch: selectedPitch,
    widthMeters,
    heightMeters,
    includeController,
    includeFlightCases,
    includeHangingBars,
    destinationCountry
  };

  return (
    <section id="configurator" className="py-20 bg-[#06080F] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.configurator.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            {t.configurator.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {t.configurator.subtitle}
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="text-xs font-semibold text-slate-400 mr-1">
            {t.configurator.presetsLabel}
          </span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleApplyPreset(preset)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 text-xs font-medium transition-all"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Application Category */}
            <div className="p-6 rounded-3xl bg-[#0B0F1C] border border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3 font-heading">
                {t.configurator.step1Title}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CONFIGURATOR_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedCategoryId === cat.id
                        ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-950/50'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight mb-1">{cat.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {cat.panelWidthMm}×{cat.panelHeightMm}mm
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pixel Pitch Selection */}
            <div className="p-6 rounded-3xl bg-[#0B0F1C] border border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3 font-heading">
                {t.configurator.step2Title}
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.pitches.map((pitch) => (
                  <button
                    key={pitch}
                    onClick={() => setSelectedPitch(pitch)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                      selectedPitch === pitch
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {pitch}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Screen Dimensions Sliders */}
            <div className="p-6 rounded-3xl bg-[#0B0F1C] border border-slate-800 space-y-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block font-heading">
                {t.configurator.step3Title}
              </label>

              {/* Width Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">{t.configurator.widthLabel}</span>
                  <span className="text-cyan-300 font-mono text-base font-extrabold">{widthMeters} m ({Number((widthMeters * 3.28084).toFixed(1))} ft)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={widthMeters}
                  onChange={(e) => setWidthMeters(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">{t.configurator.heightLabel}</span>
                  <span className="text-cyan-300 font-mono text-base font-extrabold">{heightMeters} m ({Number((heightMeters * 3.28084).toFixed(1))} ft)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={heightMeters}
                  onChange={(e) => setHeightMeters(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Grid Matrix Visualizer summary */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">{t.configurator.actualSize}</span>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">
                    {calculations.actualWidth}m (W) × {calculations.actualHeight}m (H) [{calculations.actualArea} m²]
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-slate-400">{t.configurator.panelsCount}</span>
                  <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">
                    {calculations.totalPanels} pcs ({calculations.panelsWide}W × {calculations.panelsHigh}H)
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Package Inclusions */}
            <div className="p-6 rounded-3xl bg-[#0B0F1C] border border-slate-800 space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block font-heading">
                {t.configurator.step4Title}
              </label>

              {/* Free 5% spare modules */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-emerald-300">{t.configurator.sparesFree}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.configurator.sparesDesc}</div>
                </div>
              </div>

              {/* Video Processor */}
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeController}
                    onChange={(e) => setIncludeController(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 accent-cyan-500"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{t.configurator.controllerLabel}</div>
                    <div className="text-[10px] text-slate-400">{t.configurator.controllerDesc}</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-300">
                  {includeController ? `+$${calculations.controllerCost}` : 'Excluded'}
                </span>
              </label>

              {/* Flight cases */}
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeFlightCases}
                    onChange={(e) => setIncludeFlightCases(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 accent-cyan-500"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{t.configurator.flightCasesLabel} ({calculations.flightCasesCount} pcs)</div>
                    <div className="text-[10px] text-slate-400">{t.configurator.flightCasesDesc}</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-300">
                  {includeFlightCases ? `+$${calculations.flightCaseCost}` : 'Excluded'}
                </span>
              </label>

              {/* Rigging hanging bars */}
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeHangingBars}
                    onChange={(e) => setIncludeHangingBars(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 accent-cyan-500"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{t.configurator.hangingBarsLabel} ({calculations.panelsWide} pcs)</div>
                    <div className="text-[10px] text-slate-400">{t.configurator.hangingBarsDesc}</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-300">
                  {includeHangingBars ? `+$${calculations.hangingBarsCost}` : 'Excluded'}
                </span>
              </label>

              {/* Shipping Destination */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t.configurator.destinationLabel}
                </label>
                <select
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="United States">United States (Los Angeles / New York / Miami Port)</option>
                  <option value="United Kingdom">United Kingdom (London / Felixstowe)</option>
                  <option value="European Union">European Union (Rotterdam / Hamburg / Le Havre)</option>
                  <option value="UAE / Saudi Arabia">Middle East (Dubai Jebel Ali / Dammam)</option>
                  <option value="Australia">Australia & NZ (Sydney / Auckland)</option>
                  <option value="South Korea">South Korea (Busan / Incheon)</option>
                  <option value="Japan">Japan (Tokyo / Yokohama)</option>
                  <option value="Other Worldwide">Other Country (Worldwide DDP Available)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Specification Matrix & Pricing Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F1424] to-[#0A0D18] border-2 border-cyan-500/40 shadow-2xl shadow-black/80 space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                    ARESLED Direct Factory Quote
                  </span>
                  <h3 className="text-xl font-black text-white font-heading mt-0.5">
                    {calculations.categoryName} ({selectedPitch})
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold font-mono">
                  72H AGED
                </div>
              </div>

              {/* Technical Matrix Specs Grid */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{t.configurator.specDimensions}</span>
                  <span className="font-mono text-white font-bold">{calculations.actualWidth}m × {calculations.actualHeight}m ({calculations.actualArea} m²)</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{t.configurator.specPanels}</span>
                  <span className="font-mono text-white font-bold">{calculations.panelsWide}W × {calculations.panelsHigh}H ({calculations.totalPanels} Cabinets)</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{t.configurator.specRes}</span>
                  <span className="font-mono text-cyan-300 font-bold">{calculations.resX} × {calculations.resY} px</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{t.configurator.specWeight}</span>
                  <span className="font-mono text-white">~{calculations.totalWeightKg} kg ({Math.round(calculations.totalWeightKg * 2.20462)} lbs)</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{t.configurator.specPower}</span>
                  <span className="font-mono text-amber-400">{calculations.avgPowerKw} kW / {calculations.peakPowerKw} kW Max</span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">{t.configurator.specDistance}</span>
                  <span className="font-mono text-emerald-400">{calculations.minViewDistanceM}m – {calculations.optViewDistanceM}m</span>
                </div>
              </div>

              {/* Discount Notice */}
              {calculations.discountAmount > 0 && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                  <span className="font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{t.configurator.discountBadge}</span>
                  </span>
                  <span className="font-mono font-black">-{calculations.discountPercent}% (${calculations.discountAmount.toLocaleString()})</span>
                </div>
              )}

              {/* Pricing Display */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">
                  {t.configurator.priceLabel}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-white font-heading mt-1">
                  ${calculations.finalWholesalePrice.toLocaleString()} <span className="text-sm font-normal text-slate-400">USD</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.configurator.saveNotice}</span>
                </div>
              </div>

              {/* Primary Dual Ordering Action Buttons */}
              <div className="space-y-3">
                {/* Submit Online Order Button */}
                <button
                  type="button"
                  onClick={() => onOrderOnline(currentConfigState, calculations)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-transform active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{t.configurator.btnOnline}</span>
                </button>

                {/* Submit to WhatsApp Button */}
                <button
                  type="button"
                  onClick={() => onWhatsAppOrder(currentConfigState, calculations)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>{t.configurator.btnWhatsApp}</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.configurator.warrantyBadge}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
