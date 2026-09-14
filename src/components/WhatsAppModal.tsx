import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/products';
import { AresLedLogo } from './Logo';
import { Language } from '../i18n/translations';
import { 
  X, 
  MessageCircle, 
  Send, 
  ShieldCheck, 
} from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage?: string;
  currentLang?: Language;
}

const INQUIRY_TEMPLATES: Record<Language, string[]> = {
  en: [
    'Hi ARESLED, I need a factory direct quote for Stage Rental LED Screens (500×500mm P2.97 / P3.91).',
    'Hello, please quote an Indoor High-Resolution Church LED Video Wall (approx 4m × 2.5m).',
    'Hi, I need high brightness IP68 Outdoor LED Billboard for advertising.',
    'Hello ARESLED Screen Factory, can I order a sample panel for testing?',
    'Hi, I want to book a live WhatsApp video tour of your Shenzhen factory and 72h aging racks.'
  ],
  zh: [
    '您好 ARESLED，我想咨询舞台演艺租赁屏出厂批发价（500×500mm P2.97 / P3.91）。',
    '您好，我想定制一块室内高清会议/教堂大屏（约 4m × 2.5m），请发送配置单。',
    '您好，请报一块户外高亮防水 3D 裸眼大屏（IP68双面防水）的出厂价格。',
    'ARESLED 厂家您好，我们想先订购一块样品箱体进行实机测试，请安排。',
    '您好，我想预约一次 WhatsApp 视频连线，实时参观深圳料坑大道工厂无尘车间与老化架。'
  ],
  ko: [
    '안녕하세요 ARESLED, 무대 렌탈 LED 스크린(500×500mm P2.97 / P3.91) 공장 도매가 견적 요청합니다.',
    '안녕하세요, 실내 교회/스튜디오용 고화질 LED 비디오월(약 4m × 2.5m) 견적 부탁드립니다.',
    '안녕하세요, 실외 10,000니트 IP68 방수 3D 빌보드 디스플레이 견적서를 보내주세요.',
    'ARESLED 팩토리 담당자님, 테스트용 샘플 패널 1세트 주문 절차를 안내해 주세요.',
    '선전 공장 72시간 에이징 라인 실시간 WhatsApp 화상 투어를 신청하고 싶습니다.'
  ]
};

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  prefilledMessage = '',
  currentLang = 'en'
}) => {
  const [message, setMessage] = useState('');
  const templates = INQUIRY_TEMPLATES[currentLang] || INQUIRY_TEMPLATES.en;

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    } else {
      setMessage(templates[0]);
    }
  }, [prefilledMessage, isOpen, currentLang]);

  if (!isOpen) return null;

  const handleSend = () => {
    const encoded = encodeURIComponent(message || templates[0]);
    const url = `https://wa.me/${COMPANY_INFO.whatsappPhoneOnly}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0F1524] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Avatar from Screenshot */}
        <div className="flex items-center gap-3.5 mb-5">
          <AresLedLogo variant="badge" size="md" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-heading">
                ARESLED Screen Factory
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
              <span>{COMPANY_INFO.whatsappRaw}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Open 24 Hours</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          {currentLang === 'zh'
            ? '直接与深圳工厂资深方案与结构工程师对话，5分钟内获取出厂批发底价、CAD工程图与出厂实测视频。'
            : currentLang === 'ko'
            ? '중국 선전 본사 시니어 엔지니어와 직통 연결됩니다. 5분 내로 공장 도매가, CAD 도면 및 테스트 영상을 받아보세요.'
            : 'Connect directly with our senior factory sales and technical engineers in Shenzhen. Get rapid wholesale quotation, CAD drawings, and video test confirmations.'}
        </p>

        {/* Quick Inquiries Selection */}
        <div className="mb-4">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            {currentLang === 'zh' ? '选择询价模板：' : currentLang === 'ko' ? '문의 템플릿 선택:' : 'Select Inquiry Template:'}
          </label>
          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {templates.map((text, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMessage(text)}
                className={`w-full text-left text-xs p-2.5 rounded-xl border transition-all ${
                  message === text
                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-medium'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Message Field */}
        <div className="mb-5">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
            {currentLang === 'zh' ? 'WhatsApp 消息内容：' : currentLang === 'ko' ? 'WhatsApp 전송 메시지:' : 'Your WhatsApp Message:'}
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs leading-relaxed focus:outline-none focus:border-emerald-400"
          ></textarea>
        </div>

        {/* Guarantee pill */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-5 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            {currentLang === 'zh' 
              ? '工厂工程师平均响应时间：5分钟以内' 
              : currentLang === 'ko'
              ? '엔지니어 평균 응답 시간: 5분 이내'
              : 'Average factory response time: under 5 minutes'}
          </span>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-black/20" />
          <span>
            {currentLang === 'zh' ? '立即通过 WhatsApp 咨询与订购' : currentLang === 'ko' ? 'WhatsApp으로 실시간 상담 및 주문' : 'Chat & Order on WhatsApp Now'}
          </span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
