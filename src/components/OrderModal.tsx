import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/products';
import { ConfiguratorState, OrderSubmission } from '../types';
import { 
  X, 
  CheckCircle2, 
  ShoppingCart, 
  MessageCircle, 
  FileText, 
  Printer, 
  Download, 
  ShieldCheck, 
  Globe, 
  ArrowRight,
  PackageCheck
} from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ConfiguratorState | null;
  calculatedData: any;
  onTransferToWhatsApp: (orderSummary: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  config,
  calculatedData,
  onTransferToWhatsApp
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen || !config || !calculatedData) return null;

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ARS-ORD-${Date.now().toString().slice(-6)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const getWhatsAppMessage = () => {
    return `*OFFICIAL ORDER INQUIRY - ${orderId || 'PENDING'}*
Company: ARESLED Screen Factory
Customer: ${customerName || 'AVL Client'}
Phone/WhatsApp: ${customerPhone || 'Not provided'}
Destination: ${config.destinationCountry}

*Screen Specs:*
- Application: ${calculatedData.categoryName} (${config.pitch})
- Dimensions: ${calculatedData.actualWidth}m (W) × ${calculatedData.actualHeight}m (H) [${calculatedData.actualArea} m²]
- Panels: ${calculatedData.totalPanels} pcs (${calculatedData.panelsWide}W × ${calculatedData.panelsHigh}H)
- Resolution: ${calculatedData.resX} × ${calculatedData.resY} px
- Video Processor: ${config.includeController ? 'Included (Novastar/Colorlight)' : 'Excluded'}
- Flight Cases: ${config.includeFlightCases ? `${calculatedData.flightCasesCount} Heavy-duty Touring Cases` : 'Excluded'}
- Rigging Bars: ${config.includeHangingBars ? `${calculatedData.panelsWide} Truss Hanging Bars` : 'Excluded'}
- Free Spares: Included (5% Modules & Power Supplies)

*Factory Price Estimate:* $${calculatedData.finalWholesalePrice.toLocaleString()} USD
Notes: ${deliveryNotes || 'None'}

Please confirm lead time and dispatch formal Proforma Invoice!`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0F1424] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderConfirmed ? (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingCart className="w-4 h-4" />
              <span>ARESLED Direct Factory Online Order</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading mb-1">
              Proforma Quotation & Order Review
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Review your customized LED video wall package. You can submit your order directly online or forward it to our WhatsApp engineering team for instant dispatch.
            </p>

            {/* Itemized Order Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="font-bold text-white font-heading">{calculatedData.categoryName} ({config.pitch})</span>
                <span className="font-mono text-cyan-300 font-bold">${calculatedData.screenBaseTotal.toLocaleString()}</span>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div>Dimensions: <strong className="text-white">{calculatedData.actualWidth}m × {calculatedData.actualHeight}m ({calculatedData.actualArea} m²)</strong></div>
                <div>Cabinet Matrix: <strong className="text-white">{calculatedData.panelsWide}W × {calculatedData.panelsHigh}H ({calculatedData.totalPanels} Die-cast Panels)</strong></div>
                <div>Matrix Resolution: <strong className="text-cyan-400 font-mono">{calculatedData.resX} × {calculatedData.resY} px</strong></div>
              </div>

              {config.includeController && (
                <div className="flex justify-between text-xs pt-1 border-t border-slate-800/60">
                  <span className="text-slate-300">4K Ultra HD Video Processor & Sending Box</span>
                  <span className="font-mono text-slate-200">+${calculatedData.controllerCost}</span>
                </div>
              )}

              {config.includeFlightCases && (
                <div className="flex justify-between text-xs pt-1 border-t border-slate-800/60">
                  <span className="text-slate-300">Touring Road Flight Cases ({calculatedData.flightCasesCount} units)</span>
                  <span className="font-mono text-slate-200">+${calculatedData.flightCaseCost}</span>
                </div>
              )}

              {config.includeHangingBars && (
                <div className="flex justify-between text-xs pt-1 border-t border-slate-800/60">
                  <span className="text-slate-300">Rigging Truss Beam Bars ({calculatedData.panelsWide} pcs)</span>
                  <span className="font-mono text-slate-200">+${calculatedData.hangingBarsCost}</span>
                </div>
              )}

              <div className="flex justify-between text-xs pt-1 border-t border-slate-800/60 text-emerald-400">
                <span>Free 5% Factory Spare Parts (Modules, Power, Cards)</span>
                <span className="font-bold font-mono">$0.00 (Free)</span>
              </div>

              {calculatedData.discountAmount > 0 && (
                <div className="flex justify-between text-xs pt-1 text-emerald-400 font-bold">
                  <span>Factory Direct Volume Discount ({calculatedData.discountPercent}%)</span>
                  <span className="font-mono">-${calculatedData.discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between items-baseline pt-3 border-t border-slate-700 text-sm font-bold">
                <span className="text-white uppercase tracking-wider text-xs">Total Factory Wholesale Price:</span>
                <span className="text-2xl font-extrabold text-cyan-400 font-heading">
                  ${calculatedData.finalWholesalePrice.toLocaleString()} USD
                </span>
              </div>
            </div>

            {/* Customer Details Form */}
            <form onSubmit={handleConfirmOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. david@eventproduction.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp or Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 555 234 5678"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Church / Venue Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SoundWave Events LLC"
                    value={customerCompany}
                    onChange={(e) => setCustomerCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Notes / Port of Discharge (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need delivery by next month for church anniversary or stadium tour..."
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {/* Submit Online Order */}
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Submit Online Order</span>
                </button>

                {/* Instant WhatsApp ordering link */}
                <button
                  type="button"
                  onClick={() => {
                    const msg = getWhatsAppMessage();
                    onTransferToWhatsApp(msg);
                  }}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>Order via WhatsApp (+86 177 0371 2497)</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmed Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <PackageCheck className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase mb-2">
              <span>Order Received By ARESLED Factory</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-1">
              Order Confirmed: {orderId}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you, {customerName}! Your custom LED screen specifications have been registered in our Shenzhen factory production queue.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Client:</span>
                <span className="text-white font-bold">{customerName} ({customerCompany || 'Individual'})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">WhatsApp / Phone:</span>
                <span className="text-cyan-300 font-mono">{customerPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Factory Price:</span>
                <span className="text-emerald-400 font-bold font-mono text-sm">
                  ${calculatedData.finalWholesalePrice.toLocaleString()} USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quality Standard:</span>
                <span className="text-white">72h Aging Test + Free 5% Spares</span>
              </div>
            </div>

            {/* Actions for Confirmed Order */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const msg = getWhatsAppMessage();
                  onTransferToWhatsApp(msg);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect With Sales Manager on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Proforma Invoice</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
