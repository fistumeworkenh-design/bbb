import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FactoryReels } from './components/FactoryReels';
import { ScreenConfigurator } from './components/ScreenConfigurator';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VerifiedReviews } from './components/VerifiedReviews';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ConfiguratorState } from './types';
import { Language, TRANSLATIONS } from './i18n/translations';

export default function App() {
  // Multilingual state (English, Chinese, Korean)
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const t = TRANSLATIONS[currentLang];

  // Modal states
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppPrefilledText, setWhatsAppPrefilledText] = useState('');

  // Selected configurator state for the order modal
  const [activeConfig, setActiveConfig] = useState<ConfiguratorState | null>(null);
  const [activeCalculatedData, setActiveCalculatedData] = useState<any>(null);
  const [configuratorInitialCategory, setConfiguratorInitialCategory] = useState<any>('rental');

  // Launch configurator scroll
  const handleScrollToConfigurator = (category?: string) => {
    if (category) {
      setConfiguratorInitialCategory(category);
    }
    const element = document.getElementById('configurator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToReels = () => {
    const element = document.getElementById('factory-reels');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Online Order Checkout & Proforma Modal
  const handleOrderOnline = (config: ConfiguratorState, calculatedData: any) => {
    setActiveConfig(config);
    setActiveCalculatedData(calculatedData);
    setIsOrderModalOpen(true);
  };

  // Open direct WhatsApp Order flow from configurator
  const handleWhatsAppOrderFromConfig = (config: ConfiguratorState, calculatedData: any) => {
    let text = '';
    if (currentLang === 'zh') {
      text = `您好 ARESLED 深圳工厂！
我想订购以下 LED 显示屏配置方案：
- 应用场景：${calculatedData.categoryName} (${config.pitch})
- 物理尺寸：${calculatedData.actualWidth}米 (宽) × ${calculatedData.actualHeight}米 (高) [${calculatedData.actualArea} 平方米]
- 箱体数量：共 ${calculatedData.totalPanels} 个 (${calculatedData.panelsWide}宽 × ${calculatedData.panelsHigh}高)
- 点阵分辨率：${calculatedData.resX} × ${calculatedData.resY} 像素
- 4K视频处理器：${config.includeController ? '包含 (4K极速拼接)' : '不包含'}
- 航空箱包装：${config.includeFlightCases ? `包含 (${calculatedData.flightCasesCount}个 8合1航空箱)` : '不包含'}
- 吊装横梁：${config.includeHangingBars ? `包含 (${calculatedData.panelsWide}条 铝合金吊梁)` : '不包含'}
- 免费原厂备品：包含 (赠送5%模组、电源、接收卡)
- 目的国家：${config.destinationCountry}
- 预计工厂批发底价：$${calculatedData.finalWholesalePrice.toLocaleString()} USD

请核实生产周期并开具正式形式发票 (Proforma Invoice)！`;
    } else if (currentLang === 'ko') {
      text = `안녕하세요 ARESLED 선전 본사!
다음 LED 스크린 규격으로 공장 직송 주문을 요청합니다:
- 용도: ${calculatedData.categoryName} (${config.pitch})
- 화면 규격: ${calculatedData.actualWidth}m (가로) × ${calculatedData.actualHeight}m (세로) [${calculatedData.actualArea} m²]
- 캐비닛 수량: 총 ${calculatedData.totalPanels}개 (${calculatedData.panelsWide}열 × ${calculatedData.panelsHigh}단)
- 해상도: ${calculatedData.resX} × ${calculatedData.resY} px
- 4K 비디오 프로세서: ${config.includeController ? '포함' : '미포함'}
- 하드 플라이트 케이스: ${config.includeFlightCases ? `포함 (${calculatedData.flightCasesCount}개)` : '미포함'}
- 트러스 리깅 빔 바: ${config.includeHangingBars ? `포함 (${calculatedData.panelsWide}개)` : '미포함'}
- 5% 무상 스페어 파츠: 포함 (예비 모듈, 파워 전량 동봉)
- 배송 국가: ${config.destinationCountry}
- 공장 출고 도매가: $${calculatedData.finalWholesalePrice.toLocaleString()} USD

납기 일정과 정식 견적서(PI) 회신 부탁드립니다!`;
    } else {
      text = `Hello ARESLED Screen Factory (+86 177 0371 2497)!
I want to order this LED Screen configuration:
- Application: ${calculatedData.categoryName} (${config.pitch})
- Dimensions: ${calculatedData.actualWidth}m (W) × ${calculatedData.actualHeight}m (H) [${calculatedData.actualArea} m²]
- Panels: ${calculatedData.totalPanels} pcs (${calculatedData.panelsWide}W × ${calculatedData.panelsHigh}H)
- Matrix Resolution: ${calculatedData.resX} × ${calculatedData.resY} px
- Video Processor: ${config.includeController ? 'Included' : 'No'}
- Flight Cases: ${config.includeFlightCases ? `${calculatedData.flightCasesCount} Units Included` : 'No'}
- Hanging Bars: ${config.includeHangingBars ? `${calculatedData.panelsWide} Pcs Included` : 'No'}
- Free 5% Spares: Included
- Destination: ${config.destinationCountry}
- Estimated Factory Price: $${calculatedData.finalWholesalePrice.toLocaleString()} USD

Please send lead time and formal Proforma Invoice!`;
    }

    setWhatsAppPrefilledText(text);
    setIsWhatsAppModalOpen(true);
  };

  // Open WhatsApp with custom message or product inquiry
  const handleOpenWhatsAppModal = (customNote?: string) => {
    setWhatsAppPrefilledText(customNote || '');
    setIsWhatsAppModalOpen(true);
  };

  // 1-Click WhatsApp order from product card
  const handleProductWhatsAppOrder = (productName: string, modelCode: string) => {
    let text = '';
    if (currentLang === 'zh') {
      text = `您好 ARESLED 深圳工厂 (+86 177 0371 2497)，我想订购 "${productName}" (型号: ${modelCode})。请发送箱体技术参数、生产周期及批发报价！`;
    } else if (currentLang === 'ko') {
      text = `안녕하세요 ARESLED 팩토리 (+86 177 0371 2497), "${productName}" (모델명: ${modelCode}) 주문 문의드립니다. 캐비닛 상세 사양과 제작 납기, 도매 단가를 안내해 주세요!`;
    } else {
      text = `Hi ARESLED Screen Factory (+86 177 0371 2497), I want to order the "${productName}" (Model: ${modelCode}). Please send panel specifications, lead time, and wholesale quotation for our venue!`;
    }
    setWhatsAppPrefilledText(text);
    setIsWhatsAppModalOpen(true);
  };

  // Transfer proforma order directly to WhatsApp
  const handleTransferToWhatsApp = (orderSummary: string) => {
    setIsOrderModalOpen(false);
    setWhatsAppPrefilledText(orderSummary);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header with Pro Language Selector Placement */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        t={t}
        onOpenConfigurator={() => handleScrollToConfigurator()}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Ultra-Cinematic Hero with Atmosphere Themes */}
        <Hero
          t={t}
          onOpenConfigurator={() => handleScrollToConfigurator()}
          onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
          onScrollToReels={handleScrollToReels}
        />

        {/* Factory Testing Lab Video Reels (Direct from Screenshot) */}
        <FactoryReels
          t={t}
          onSelectProductForConfig={handleScrollToConfigurator}
          onOpenWhatsAppModal={handleOpenWhatsAppModal}
        />

        {/* Interactive Custom Screen Configurator & Dual Ordering */}
        <ScreenConfigurator
          t={t}
          currentLang={currentLang}
          onOrderOnline={handleOrderOnline}
          onWhatsAppOrder={handleWhatsAppOrderFromConfig}
          initialCategory={configuratorInitialCategory}
        />

        {/* Full Product Catalog with Specification Details */}
        <ProductCatalog
          t={t}
          currentLang={currentLang}
          onSelectForConfigurator={handleScrollToConfigurator}
          onWhatsAppOrder={handleProductWhatsAppOrder}
        />

        {/* 15 Years Source Factory & Cleanroom Advantages */}
        <WhyChooseUs t={t} />

        {/* Global Client Projects & Verified Certifications */}
        <VerifiedReviews />
      </main>

      {/* Comprehensive Official Footer */}
      <Footer
        t={t}
        onOpenConfigurator={() => handleScrollToConfigurator()}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* Online Order Confirmation & Proforma Invoice Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        config={activeConfig}
        calculatedData={activeCalculatedData}
        onTransferToWhatsApp={handleTransferToWhatsApp}
      />

      {/* WhatsApp Direct Ordering & Consultation Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMessage={whatsAppPrefilledText}
        currentLang={currentLang}
      />

      {/* 24/7 Floating WhatsApp Consultation Widget */}
      <WhatsAppFloating
        onOpenModal={() => handleOpenWhatsAppModal()}
      />
    </div>
  );
}
