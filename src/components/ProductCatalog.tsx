import React, { useState } from 'react';
import { PRODUCTS, COMPANY_INFO } from '../data/products';
import { LEDProduct } from '../types';
import { Translations, Language } from '../i18n/translations';
import { 
  Sliders, 
  MessageCircle, 
  Info, 
  Check, 
  X, 
  Flame, 
  ShieldCheck, 
  Zap, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ProductCatalogProps {
  t: Translations;
  currentLang: Language;
  onSelectForConfigurator: (category: string) => void;
  onWhatsAppOrder: (productName: string, modelCode: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  t,
  currentLang,
  onSelectForConfigurator,
  onWhatsAppOrder
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProductDetails, setSelectedProductDetails] = useState<LEDProduct | null>(null);

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeTab);

  const tabs = [
    { id: 'all', label: t.catalog.tabAll },
    { id: 'rental', label: t.catalog.tabRental },
    { id: 'indoor', label: t.catalog.tabIndoor },
    { id: 'outdoor', label: t.catalog.tabOutdoor },
    { id: 'stadium', label: t.catalog.tabStadium },
    { id: 'transparent', label: t.catalog.tabTransparent },
    { id: 'curved', label: t.catalog.tabCurved },
  ];

  return (
    <section id="products" className="py-20 bg-[#070A14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>{t.catalog.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            {t.catalog.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#0B0F1E] rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1E] via-transparent to-black/30"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500 text-black font-extrabold text-[10px] tracking-wide uppercase shadow-md">
                      {product.modelCode}
                    </span>
                    {product.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold text-[9px] uppercase tracking-wider flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        <span>Best Seller</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/75 backdrop-blur-md text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
                    {t.catalog.fromPrice} ${product.basePricePerSqm}/m²
                  </div>
                </div>

                {/* Product Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Pixel pitch badge */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300 font-bold">
                      {product.pixelPitch}
                    </span>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-800/80 mb-4 bg-slate-950/40 rounded-xl p-2.5">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">{t.catalog.brightness}</span>
                      <div className="font-semibold text-white font-mono text-xs">{product.brightness}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">{t.catalog.refreshRate}</span>
                      <div className="font-semibold text-cyan-400 font-mono text-xs">{product.refreshRate}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">{t.catalog.cabinetSize}</span>
                      <div className="font-semibold text-white font-mono text-[11px]">{product.cabinetSize}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">{t.catalog.protection}</span>
                      <div className="font-semibold text-emerald-400 font-mono text-xs">{product.ipRating}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => onWhatsAppOrder(product.name, product.modelCode)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>{t.catalog.btnOrderWhatsApp}</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectForConfigurator(product.category)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.catalog.btnConfigure}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProductDetails(product)}
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold border border-slate-800 transition-colors"
                    title="View Technical Specifications"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Spec Sheet Modal */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0F1424] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProductDetails(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase mb-2">
              <span>{selectedProductDetails.modelCode} Specification Sheet</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading mb-2">
              {selectedProductDetails.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {selectedProductDetails.tagline}
            </p>

            {/* Spec Table */}
            <div className="rounded-2xl border border-slate-800 overflow-hidden text-xs mb-6">
              <div className="flex justify-between p-3 bg-slate-950/60 border-b border-slate-800/60">
                <span className="text-slate-400">Pixel Pitch</span>
                <span className="font-mono text-white font-bold">{selectedProductDetails.pixelPitch}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-900/40 border-b border-slate-800/60">
                <span className="text-slate-400">Cabinet Size</span>
                <span className="font-mono text-white font-bold">{selectedProductDetails.cabinetSize}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-950/60 border-b border-slate-800/60">
                <span className="text-slate-400">Chassis Material</span>
                <span className="font-mono text-white font-bold">{selectedProductDetails.cabinetMaterial}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-900/40 border-b border-slate-800/60">
                <span className="text-slate-400">Calibrated Brightness</span>
                <span className="font-mono text-white font-bold">{selectedProductDetails.brightness}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-950/60 border-b border-slate-800/60">
                <span className="text-slate-400">Refresh Rate</span>
                <span className="font-mono text-cyan-400 font-bold">{selectedProductDetails.refreshRate}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-900/40 border-b border-slate-800/60">
                <span className="text-slate-400">Waterproof Rating</span>
                <span className="font-mono text-emerald-400 font-bold">{selectedProductDetails.ipRating}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-950/60 border-b border-slate-800/60">
                <span className="text-slate-400">Maintenance Access</span>
                <span className="font-mono text-white font-bold">{selectedProductDetails.maintenance}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-900/40">
                <span className="text-slate-400">Durability Benchmark</span>
                <span className="font-mono text-cyan-300 font-bold">{selectedProductDetails.durabilityHighlight}</span>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-slate-300 mb-2 font-heading">
                Recommended Installations
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {selectedProductDetails.applications.map((app, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800/80">
                    ✓ {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const p = selectedProductDetails;
                  setSelectedProductDetails(null);
                  onWhatsAppOrder(p.name, p.modelCode);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp (+86 177 0371 2497)</span>
              </button>

              <button
                onClick={() => {
                  const cat = selectedProductDetails.category;
                  setSelectedProductDetails(null);
                  onSelectForConfigurator(cat);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4" />
                <span>Configure Exact Dimensions</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
