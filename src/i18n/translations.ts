export type Language = 'en' | 'zh' | 'ko';

export interface Translations {
  nav: {
    products: string;
    labReels: string;
    liveVideo: string;
    calculator: string;
    whyFactory: string;
    globalProjects: string;
    onlineOrder: string;
    whatsappOrder: string;
    statusHours: string;
    factoryNotice: string;
  };
  hero: {
    badgeFactory: string;
    badgeAging: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaCalculator: string;
    ctaWhatsApp: string;
    labTitle: string;
    labTag: string;
    labDesc: string;
    watchTests: string;
    metric1Val: string;
    metric1Lbl: string;
    metric2Val: string;
    metric2Lbl: string;
    metric3Val: string;
    metric3Lbl: string;
    metric4Val: string;
    metric4Lbl: string;
  };
  reels: {
    tag: string;
    title: string;
    subtitle: string;
    followInsta: string;
    inspectVideo: string;
    quotePanel: string;
    liveTestCamera: string;
    verifiedBadge: string;
  };
  configurator: {
    tag: string;
    title: string;
    subtitle: string;
    presetsLabel: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    widthLabel: string;
    heightLabel: string;
    actualSize: string;
    panelsCount: string;
    step4Title: string;
    sparesFree: string;
    sparesDesc: string;
    controllerLabel: string;
    controllerDesc: string;
    flightCasesLabel: string;
    flightCasesDesc: string;
    hangingBarsLabel: string;
    hangingBarsDesc: string;
    destinationLabel: string;
    specsTitle: string;
    specDimensions: string;
    specPanels: string;
    specRes: string;
    specWeight: string;
    specPower: string;
    specDistance: string;
    priceLabel: string;
    discountBadge: string;
    saveNotice: string;
    btnWhatsApp: string;
    btnOnline: string;
    warrantyBadge: string;
  };
  catalog: {
    tag: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabRental: string;
    tabIndoor: string;
    tabOutdoor: string;
    tabStadium: string;
    tabTransparent: string;
    tabCurved: string;
    fromPrice: string;
    btnOrderWhatsApp: string;
    btnConfigure: string;
    btnFullSpecs: string;
    brightness: string;
    refreshRate: string;
    cabinetSize: string;
    protection: string;
  };
  whyUs: {
    tag: string;
    title: string;
    subtitle: string;
    plantTitle: string;
    plantDesc: string;
    bookVideoTour: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    f5Title: string;
    f5Desc: string;
    f6Title: string;
    f6Desc: string;
    socialBannerTitle: string;
    socialBannerDesc: string;
  };
  footer: {
    ctaTitle: string;
    ctaDesc: string;
    btnChatWhatsApp: string;
    btnLaunchCalc: string;
    brandDesc: string;
    seriesTitle: string;
    testingTitle: string;
    orderingTitle: string;
    locationLabel: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      products: 'LED Screens',
      labReels: 'Testing Lab',
      liveVideo: 'LIVE REELS',
      calculator: 'Screen Calculator',
      whyFactory: '15-Yr Factory',
      globalProjects: 'Global Projects',
      onlineOrder: 'Instant Online Order',
      whatsappOrder: 'Order via WhatsApp',
      statusHours: 'Open 24 Hours • Engineers Online in Shenzhen',
      factoryNotice: '15+ Years Source Factory • 120+ Export Countries',
    },
    hero: {
      badgeFactory: 'SHENZHEN SOURCE FACTORY • 15 YEARS DIRECT R&D',
      badgeAging: '72-Hour Full-White Aging Tested',
      titleLine1: 'Cinema-Grade LED Screens',
      titleLine2: 'Direct From Source Factory',
      subtitle: 'Ultra-bright stage rental panels, 10,000-nit outdoor 3D billboards, and fine-pitch broadcast studio walls. Rigorously drop-tested, waterproof-sealed, and tour-proven.',
      ctaCalculator: 'Calculate Screen & Order Online',
      ctaWhatsApp: 'Instant WhatsApp Order',
      labTitle: 'ARESLED Testing Laboratory',
      labTag: 'REAL FACTORY REELS',
      labDesc: 'Watch technicians drop active panels from 1.5m, deluge screens with buckets of water, and assemble rental walls in seconds.',
      watchTests: 'Watch 6 Lab Durability Tests',
      metric1Val: '15+ Years',
      metric1Lbl: 'Shenzhen Source Plant',
      metric2Val: '7680Hz',
      metric2Lbl: 'Ultra-High Refresh Rate',
      metric3Val: 'Free 5%',
      metric3Lbl: 'Spare Modules & Supplies',
      metric4Val: '3-Year',
      metric4Lbl: 'Global Factory Warranty',
    },
    reels: {
      tag: 'Direct From Our Factory Testing Lab',
      title: 'Durability & Impact Video Reels',
      subtitle: 'We test our LED displays under extreme drop impacts, high-pressure water deluges, and rapid stage assembly so your live events never fail.',
      followInsta: 'Follow @aresled_factory (65.9K)',
      inspectVideo: 'Inspect Lab Video',
      quotePanel: 'Quote This Panel',
      liveTestCamera: 'LAB CAMERA 01 • LIVE QUALITY TEST',
      verifiedBadge: 'Engineering Verification',
    },
    configurator: {
      tag: 'Interactive Factory Pricing Engine',
      title: 'Custom LED Screen Configurator & Ordering',
      subtitle: 'Calculate exact panel counts, resolution, power requirements, and get instantaneous factory-direct wholesale pricing. Order online or submit directly to our WhatsApp engineers.',
      presetsLabel: 'Popular Presets:',
      step1Title: 'Step 1: Select Screen Application',
      step2Title: 'Step 2: Choose Pixel Pitch (Resolution)',
      step3Title: 'Step 3: Dimensions (Width × Height)',
      widthLabel: 'Width (Meters):',
      heightLabel: 'Height (Meters):',
      actualSize: 'Actual Modular Display Size:',
      panelsCount: 'Total Modular Panels',
      step4Title: 'Step 4: Package Inclusions & Accessories',
      sparesFree: 'Free 5% Factory Spare Parts Included',
      sparesDesc: 'Free spare LED modules, receiving cards, HUB boards, and power supplies included with every order.',
      controllerLabel: 'Video Processor & Sender Box',
      controllerDesc: 'HDMI, DP, DVI inputs with 4K seamless scaling',
      flightCasesLabel: 'Touring Road Flight Cases',
      flightCasesDesc: 'Heavy-duty 8-in-1 flight cases with shockproof foam and locking wheels',
      hangingBarsLabel: 'Rigging / Hanging Truss Beam Bars',
      hangingBarsDesc: 'Certified aluminum rigging hardware for stage or truss mounting',
      destinationLabel: 'Shipping Destination Country:',
      specsTitle: 'Factory Specification Sheet',
      specDimensions: 'Actual Dimensions:',
      specPanels: 'Panel Configuration:',
      specRes: 'Matrix Resolution:',
      specWeight: 'Total Net Weight:',
      specPower: 'Power (Avg / Peak):',
      specDistance: 'Viewing Distance:',
      priceLabel: 'Total Factory Direct Price:',
      discountBadge: 'Bulk Discount Applied!',
      saveNotice: 'You save with direct Shenzhen source factory pricing.',
      btnWhatsApp: 'Order via WhatsApp (+86 177 0371 2497)',
      btnOnline: 'Submit Online Order & Get Proforma Invoice',
      warrantyBadge: '3-Year Warranty • 72h Full White Aging Guarantee',
    },
    catalog: {
      tag: 'Direct Manufacturer Portfolio',
      title: 'Commercial & Stage LED Series',
      subtitle: 'Engineered in our Shenzhen source facility with precision die-cast aluminum frames, high-refresh ICs, and 72-hour aging quality assurance.',
      tabAll: 'All LED Displays',
      tabRental: 'Stage Rental',
      tabIndoor: 'Indoor Fine-Pitch',
      tabOutdoor: 'Outdoor 3D Billboard',
      tabStadium: 'Stadium Perimeter',
      tabTransparent: 'Transparent Glass',
      tabCurved: 'Curved & Creative',
      fromPrice: 'From',
      btnOrderWhatsApp: 'Order on WhatsApp (+86 177 0371 2497)',
      btnConfigure: 'Configure',
      btnFullSpecs: 'Full Specs',
      brightness: 'Brightness',
      refreshRate: 'Refresh Rate',
      cabinetSize: 'Cabinet Size',
      protection: 'Protection',
    },
    whyUs: {
      tag: 'Direct From Shenzhen, China',
      title: 'Why Global AVL Pros Choose ARESLED',
      subtitle: 'When your concert, church Sunday service, or billboard campaign goes live, there is no second take. Here is how our 15-year factory protects your investment.',
      plantTitle: '12,000 m² High-Precision Cleanroom & SMT Lines',
      plantDesc: 'Located at Liaokeng Boulevard in Shenzhen. We invite international clients for on-site factory inspections or live WhatsApp video factory tours.',
      bookVideoTour: 'Book Live WhatsApp Video Tour',
      f1Title: '15+ Years Source Manufacturer',
      f1Desc: 'Direct factory pricing without agent markups. From bare PCB SMT high-speed placement to die-cast cabinet assembly in our Shenzhen facility.',
      f2Title: '72-Hour Continuous Burn-in QC',
      f2Desc: '100% full-white brightness and RGB cycle burn-in test before shipment. Zero dead pixel guarantee backed by automated optical calibration.',
      f3Title: 'Free 5% Spare Parts Guarantee',
      f3Desc: 'Every single shipment includes 5% extra LED modules, power supplies, receiving cards, and flat ribbon cables completely free of charge.',
      f4Title: 'Worldwide DDP Door-to-Door',
      f4Desc: 'Safe delivery to over 120 countries with customs clearance and local taxes handled by sea freight and express air freight.',
      f5Title: '24/7 WhatsApp Engineering Support',
      f5Desc: 'Our bilingual hardware and software engineers are on standby 24 hours a day to guide your installation, Novastar setup, and troubleshooting.',
      f6Title: 'Top-Tier Components Only',
      f6Desc: 'Nationstar copper/gold wire LEDs, Macroblock/Chipone high-refresh PWM ICs, and Mean Well / G-Energy reliable power supplies.',
      socialBannerTitle: 'Followed by 120,000+ LED Professionals Globally',
      socialBannerDesc: 'Real community engagement, daily factory live videos, and ongoing installations on Instagram and Facebook.',
    },
    footer: {
      ctaTitle: 'Get Factory Wholesale Pricing Within 5 Minutes',
      ctaDesc: 'Talk directly with ARESLED senior engineers in Shenzhen. Send your dimensions or stage specifications for instant CAD design.',
      btnChatWhatsApp: 'Chat on WhatsApp: +86 177 0371 2497',
      btnLaunchCalc: 'Launch Screen Calculator',
      brandDesc: 'ARESLED Screen Factory is a source LED display manufacturer over 15 years in Shenzhen, China. Specializing in high-performance indoor studio walls, stormproof outdoor billboards, and tour-grade rental screens with 10s quick-lock.',
      seriesTitle: 'LED Display Series',
      testingTitle: 'Testing Lab & Video',
      orderingTitle: 'Direct Ordering',
      locationLabel: 'Factory Location: Liaokeng Blvd & Minshengsi Rd, Baoan, Shenzhen, Guangdong, China',
    }
  },
  zh: {
    nav: {
      products: 'LED 显示屏产品',
      labReels: '工厂实验室实拍',
      liveVideo: '实拍视频',
      calculator: '在线尺寸算价',
      whyFactory: '15年源头厂家',
      globalProjects: '全球工程案例',
      onlineOrder: '线上快速下单',
      whatsappOrder: 'WhatsApp 直连采购',
      statusHours: '24小时在线 • 深圳工厂工程师待命',
      factoryNotice: '15年源头实体大厂 • 出口全球120+国家与地区',
    },
    hero: {
      badgeFactory: '中国深圳源头大厂 • 15年自主研发与制造',
      badgeAging: '出厂前严格执行72小时全白光老化测试',
      titleLine1: '电影级超高清 LED 显示屏',
      titleLine2: '源头大厂直供 全球批发',
      subtitle: '专业制造舞台演艺租赁屏、10000尼特户外裸眼3D大屏、广播级小间距会议与教堂屏。历经暴力跌落测试、高压暴雨防水实测，经得起严苛世界巡演考验。',
      ctaCalculator: '在线配置尺寸与出厂底价',
      ctaWhatsApp: 'WhatsApp 1秒直连工厂订购',
      labTitle: 'ARESLED 品质测试实验室',
      labTag: '工厂一线实测视频',
      labDesc: '观看工程师现场从1.5米高空跌落踢踩箱体、整盆水直接浇泼通电大屏、单人40秒极速搭建舞台屏。',
      watchTests: '观看6项极致耐用性测试视频',
      metric1Val: '15+年',
      metric1Lbl: '深圳源头生产基地',
      metric2Val: '7680Hz',
      metric2Lbl: '超高刷新率 摄像无扫描纹',
      metric3Val: '赠送5%',
      metric3Lbl: '免费备品模组及电源',
      metric4Val: '3年质保',
      metric4Lbl: '全球原厂售后联保',
    },
    reels: {
      tag: '来自深圳车间测试实验室现场',
      title: '防跌防摔与暴雨防水实测短视频',
      subtitle: '我们在高空跌落冲击、高压暴雨倾盆、快速锁扣装配下暴力实测每一批LED箱体，确保您的现场演出万无一失。',
      followInsta: '关注 Instagram @aresled_factory (65.9K粉丝)',
      inspectVideo: '查看实验室视频',
      quotePanel: '索取此款模组报价',
      liveTestCamera: '实验室实时机位 01 • 出厂品质严苛实测',
      verifiedBadge: '工厂工程检验结论',
    },
    configurator: {
      tag: '交互式源头工厂核价引擎',
      title: 'LED 显示屏在线定制与快速下单',
      subtitle: '实时计算箱体数量、整屏分辨率、承重功耗，获得真实的深圳出厂批发价。支持在线提交形式发票订单或一键导入 WhatsApp 与厂长对接。',
      presetsLabel: '行业常用规格预设：',
      step1Title: '第 1 步：选择应用场景与屏体类型',
      step2Title: '第 2 步：选择点间距 (清晰度)',
      step3Title: '第 3 步：设定大屏尺寸 (长 × 宽)',
      widthLabel: '屏幕总宽度 (米)：',
      heightLabel: '屏幕总高度 (米)：',
      actualSize: '模块化组合实际尺寸：',
      panelsCount: '标准压铸铝箱体数量',
      step4Title: '第 4 步：整套周边配件与航运配置',
      sparesFree: '免费附赠 5% 原厂易损配件（模组/电源/接收卡）',
      sparesDesc: '每张订单均免费赠送5%备用模组、排线、巨能/诚联电源及诺瓦接收卡。',
      controllerLabel: '4K超高清视频处理器及发送盒',
      controllerDesc: '支持HDMI/DP/DVI信号输入，无缝缩放拼接画中画',
      flightCasesLabel: '巡演级防震航空箱包装',
      flightCasesDesc: '高强度铝合金包边航空箱，内置高密度防震EVA，带刹车万向轮',
      hangingBarsLabel: '舞台挂装吊梁 / 桁架连接件',
      hangingBarsDesc: '通过TUV认证的高强度铝合金吊装横梁',
      destinationLabel: '海运/空运目的地国家：',
      specsTitle: '工厂技术规格书明细',
      specDimensions: '实际显示尺寸：',
      specPanels: '箱体拼装阵列：',
      specRes: '物理点阵分辨率：',
      specWeight: '屏体净重估算：',
      specPower: '平均 / 峰值功耗：',
      specDistance: '最佳观看距离：',
      priceLabel: '深圳工厂直供批发总价：',
      discountBadge: '已享受批量大宗出厂特惠！',
      saveNotice: '无中间商差价，直接对接深圳光明制造基地。',
      btnWhatsApp: '通过 WhatsApp 提交订购 (+86 177 0371 2497)',
      btnOnline: '提交线上订单并下载形式发票 (PI)',
      warrantyBadge: '三年全国原厂质保 • 72小时连续全白光老化保障',
    },
    catalog: {
      tag: '源头大厂全系产品矩阵',
      title: '商业广告与舞台演出 LED 旗舰系列',
      subtitle: '采用高精度CNC压铸铝镁合金箱体、集创北方/聚积超高刷PWM驱动芯片，出厂前经历72小时严苛老化。',
      tabAll: '全部显示屏',
      tabRental: '舞台租赁屏',
      tabIndoor: '室内小间距',
      tabOutdoor: '户外3D裸眼大屏',
      tabStadium: '体育场馆围栏屏',
      tabTransparent: '透明冰屏橱窗',
      tabCurved: '异形弧形创意屏',
      fromPrice: '起步价',
      btnOrderWhatsApp: 'WhatsApp 询价下单 (+86 177 0371 2497)',
      btnConfigure: '在线算价',
      btnFullSpecs: '完整规格',
      brightness: '峰值亮度',
      refreshRate: '刷新频率',
      cabinetSize: '箱体规格',
      protection: '防护等级',
    },
    whyUs: {
      tag: '中国深圳 • 全球LED制造基地',
      title: '为什么全球 120 多个国家的客户选择 ARESLED',
      subtitle: '世界级演唱会、教堂主日崇拜、跨国地标巨幕不能容忍任何黑屏与故障。了解15年大厂如何保障您的工程项目。',
      plantTitle: '12,000 平方米无尘车间与高速雅马哈贴片线',
      plantDesc: '位于深圳市宝安区料坑大道LED高新技术产业园。我们热烈欢迎国际客户莅临验厂，或随时发起 WhatsApp 实时视频查厂。',
      bookVideoTour: '预约 WhatsApp 工厂车间实时视频连线',
      f1Title: '15年源头实体制造工厂',
      f1Desc: '无贸易商倒手加价。从裸板高速贴片SMT、表面灌胶防水到压铸箱体拼装全流程自主把控。',
      f2Title: '72小时不间断通电老化质检',
      f2Desc: '出库前100%经过72小时高亮白光和RGB三原色循环老化，结合工业光谱仪校准，彻底消灭死灯与色差。',
      f3Title: '免费附赠 5% 易损备品件保障',
      f3Desc: '每个货柜订单均按比例赠送备用LED模组、电源适配器、接收卡与排线，保障后续数年演出无忧。',
      f4Title: '全球双清包税 (DDP) 门到门海空运',
      f4Desc: '支持美国、欧洲、中东、东南亚等全球主要港口海运整柜与拼箱，协助一站式清关关税与送货上门。',
      f5Title: '24小时全天候工程技术保障',
      f5Desc: '中英双语硬件及诺瓦控制系统工程师24小时在线，随时通过视频会议远程协助点屏与排查故障。',
      f6Title: '严选国际一线原材料',
      f6Desc: '采用国星金线/铜线灯珠、台湾聚积高刷芯片、明纬及巨能工业电源，平均无故障运行时间超过10万小时。',
      socialBannerTitle: '全球超过 120,000 名专业舞美工程人员关注',
      socialBannerDesc: '在 Instagram 和 Facebook 上每日更新车间生产实况、发货开箱和大型舞台案例。',
    },
    footer: {
      ctaTitle: '5分钟内获取深圳出厂工程批发底价',
      ctaDesc: '直接与 ARESLED 资深方案工程师对话。发送场地尺寸即可在10分钟内获取CAD布线图与专业配置单。',
      btnChatWhatsApp: 'WhatsApp 即刻沟通: +86 177 0371 2497',
      btnLaunchCalc: '启动屏幕智能算价器',
      brandDesc: 'ARESLED 屏幕源头工厂是拥有15年历史的深圳LED显示屏实体制造基地。主营舞台演艺快锁租赁屏、户外高亮暴雨防水裸眼3D大屏及广播级微间距一体机。',
      seriesTitle: '产品系列',
      testingTitle: '品质实验室',
      orderingTitle: '订购与支持',
      locationLabel: '工厂地址：中国广东省深圳市宝安区料坑大道与民生四路交叉口（全球LED产业中心）',
    }
  },
  ko: {
    nav: {
      products: 'LED 스크린 제품군',
      labReels: '공장 테스트 영상',
      liveVideo: '실시간 영상',
      calculator: '온라인 견적 계산기',
      whyFactory: '15년 소스 공장',
      globalProjects: '글로벌 설치 프로젝트',
      onlineOrder: '온라인 즉시 주문',
      whatsappOrder: 'WhatsApp 실시간 주문',
      statusHours: '24시간 오픈 • 선전 공장 엔지니어 대기',
      factoryNotice: '15년 전통 LED 소스 팩토리 • 전 세계 120개국 직수출',
    },
    hero: {
      badgeFactory: '중국 선전 소스 팩토리 • 15년 자체 R&D 및 제조',
      badgeAging: '출고 전 72시간 화이트 스크린 에이징 테스트 완료',
      titleLine1: '시네마틱 프리미엄 LED 스크린',
      titleLine2: '공장 직발송 글로벌 도매',
      subtitle: '10초 퀵락 무대 렌탈 스크린, 10,000니트 방수 3D 옥외 빌보드, 방송국·교회용 초미세 피치 LED 비디오월. 가혹한 낙하 테스트와 고압 방수 테스트를 통과한 최고 등급 내구성.',
      ctaCalculator: '온라인 스크린 규격 계산 및 주문',
      ctaWhatsApp: 'WhatsApp 1초 직통 주문',
      labTitle: 'ARESLED 내구성 검증 연구소',
      labTag: '실제 공장 릴스 영상',
      labDesc: '1.5m 높이에서 캐비닛을 던지고 밟는 충격 테스트, 작동 중 양동이 물을 쏟아붓는 방수 테스트, 40초 퀵락 조립을 직접 확인하세요.',
      watchTests: '6대 극한 내구성 테스트 영상 보기',
      metric1Val: '15년+',
      metric1Lbl: '선전 자체 제조 공장',
      metric2Val: '7680Hz',
      metric2Lbl: '초고주사율 플리커 프리',
      metric3Val: '5% 무상',
      metric3Lbl: '스페어 모듈 및 파워 증정',
      metric4Val: '3년 보증',
      metric4Lbl: '글로벌 원천공장 무상보증',
    },
    reels: {
      tag: '선전 본사 테스트 랩 실황',
      title: '충격 낙하 및 극한 방수 실측 릴스',
      subtitle: '콘서트와 방송 무대가 결코 중단되지 않도록, 낙하 충격, 고압 방수, 초고속 렌탈 조립을 완벽하게 검증합니다.',
      followInsta: '인스타그램 @aresled_factory (65.9K 팔로워)',
      inspectVideo: '테스트 영상 보기',
      quotePanel: '이 모듈 모델 견적 문의',
      liveTestCamera: 'LAB CAMERA 01 • 실시간 공장 출고 검사',
      verifiedBadge: '엔지니어링 인증 완료',
    },
    configurator: {
      tag: '스마트 공장 도매가 산출 엔진',
      title: '맞춤형 LED 스크린 규격 계산 및 즉시 주문',
      subtitle: '화면 크기, 패널 개수, 해상도, 소비전력을 실시간으로 계산하고 중국 현지 출고 도매가를 즉시 확인하세요. 온라인 정식 발주 또는 WhatsApp으로 다이렉트 주문 가능합니다.',
      presetsLabel: '인기 규격 프리셋:',
      step1Title: 'Step 1: 스크린 용도 및 유형 선택',
      step2Title: 'Step 2: 픽셀 피치(해상도) 선택',
      step3Title: 'Step 3: 스크린 크기 설정 (가로 × 세로)',
      widthLabel: '화면 총 가로 너비 (m):',
      heightLabel: '화면 총 세로 높이 (m):',
      actualSize: '모듈 조합 실제 크기:',
      panelsCount: '다이캐스팅 알루미늄 패널 수량',
      step4Title: 'Step 4: 주변기기 및 플라이트 케이스 옵션',
      sparesFree: '5% 무료 스페어 파츠 패키지 포함',
      sparesDesc: '주문 시 예비 LED 모듈, 파워서플라이, 리시빙 카드, 리본 케이블을 전량 무상 동봉합니다.',
      controllerLabel: '4K 초고화질 비디오 프로세서 & 센더',
      controllerDesc: 'HDMI, DP, DVI 입력 및 끊김 없는 화면 스케일링 지원',
      flightCasesLabel: '투어링 이동식 플라이트 하드케이스',
      flightCasesDesc: '내충격 고밀도 EVA 폼 및 브레이크 바퀴가 장착된 8구형 렌탈 케이스',
      hangingBarsLabel: '무대 리깅 / 트러스용 행잉 빔 바',
      hangingBarsDesc: '안전 인증을 통과한 알루미늄 합금 트러스 장착 바',
      destinationLabel: '배송 대상 국가:',
      specsTitle: '공장 기술 사양서 요약',
      specDimensions: '실제 화면 크기:',
      specPanels: '패널 조립 배열:',
      specRes: '물리 픽셀 해상도:',
      specWeight: '예상 총 중량:',
      specPower: '평균 / 최대 소비전력:',
      specDistance: '최적 가시거리:',
      priceLabel: '공장 직송 도매가 합계:',
      discountBadge: '대량 주문 할인 적용 완료!',
      saveNotice: '중간 마진 없는 선전 소스 팩토리 직거래로 예산을 절감하세요.',
      btnWhatsApp: 'WhatsApp으로 주문서 전송 (+86 177 0371 2497)',
      btnOnline: '온라인 주문 접수 및 견적서(PI) 발급',
      warrantyBadge: '3년 글로벌 품질 보증 • 72시간 풀 화이트 에이징 보증',
    },
    catalog: {
      tag: '공장 자체 생산 풀 라인업',
      title: '상업용 및 무대용 LED 디스플레이 시리즈',
      subtitle: '정밀 다이캐스팅 마그네슘 알루미늄 바디, 초고주사율 PWM 드라이버 IC, 72시간 연속 가동 테스트를 거쳐 완성됩니다.',
      tabAll: '전체 제품',
      tabRental: '무대 렌탈 스크린',
      tabIndoor: '실내 고해상도',
      tabOutdoor: '실외 3D 빌보드',
      tabStadium: '스타디움 펜스형',
      tabTransparent: '투명 글래스 LED',
      tabCurved: '곡면 및 90도 코너',
      fromPrice: '시작가',
      btnOrderWhatsApp: 'WhatsApp 빠른 주문 (+86 177 0371 2497)',
      btnConfigure: '규격 계산',
      btnFullSpecs: '상세 사양',
      brightness: '최대 밝기',
      refreshRate: '화면 주사율',
      cabinetSize: '캐비닛 규격',
      protection: '방수/방진 등급',
    },
    whyUs: {
      tag: '중국 선전 • 글로벌 LED 메카',
      title: '전 세계 120개국 무대 연출가가 ARESLED를 선택하는 이유',
      subtitle: '대형 스타디움 콘서트, 방송 생방송, 도심 랜드마크 광고는 단 한 번의 에러도 허용하지 않습니다. 15년 제조 공장의 기술력을 확인하세요.',
      plantTitle: '12,000 m² 첨단 클린룸 및 고속 SMT 라인',
      plantDesc: '선전 바오안구 랴오컹대로 LED 밸리에 위치. 방문 공장 실사 및 WhatsApp 실시간 라이브 영상 투어를 환영합니다.',
      bookVideoTour: 'WhatsApp 공장 실시간 영상 투어 예약',
      f1Title: '15년 제조 소스 팩토리',
      f1Desc: '유통 마진 없는 직거래. PCB 표면 실장(SMT)부터 방수 몰딩, 다이캐스팅 조립까지 자체 생산 라인에서 완결합니다.',
      f2Title: '72시간 연속 번인 및 광학 캘리브레이션',
      f2Desc: '전 제품 출고 전 100% 풀 화이트 최대 밝기 72시간 연속 에이징을 진행하여 불량 화소 발생률 0%를 지향합니다.',
      f3Title: '5% 무상 스페어 파츠 패키지',
      f3Desc: '모든 출고 물량에 예비 LED 모듈, 파워서플라이, 리시빙 카드, 케이블을 5% 이상 넉넉하게 무상 동봉합니다.',
      f4Title: '전 세계 DDP 도어투도어 안전 운송',
      f4Desc: '미국, 유럽, 중동, 아시아 등 전 세계 주요 항구 및 도어까지 통관과 세금을 원스톱으로 처리하는 DDP 해상/항공 운송 지원.',
      f5Title: '24시간 엔지니어 기술 핫라인',
      f5Desc: '영어/한국어/중국어 소통 가능한 하드웨어 및 Novastar 전문 엔지니어가 24시간 실시간 영상 원격 지원을 제공합니다.',
      f6Title: '최상급 부품만 채택',
      f6Desc: 'Nationstar 골드/구리 와이어 LED 소자, Macroblock/Chipone 초고주사율 IC, Mean Well 파워 채용으로 100,000시간 수명 보장.',
      socialBannerTitle: '전 세계 120,000명 이상의 무대 영상 전문가가 구독',
      socialBannerDesc: 'Instagram 및 Facebook에서 매일 업로드되는 공장 실시간 제작 현장과 출고 스토리를 확인하세요.',
    },
    footer: {
      ctaTitle: '5분 만에 공장 직송 최저 도매 견적 확인',
      ctaDesc: '선전 본사 시니어 엔지니어와 즉시 소통하세요. 공간 크기만 알려주시면 10분 내로 전문 CAD 도면과 사양서를 드립니다.',
      btnChatWhatsApp: 'WhatsApp 상담 바로가기: +86 177 0371 2497',
      btnLaunchCalc: '스크린 규격 계산기 열기',
      brandDesc: 'ARESLED Screen Factory는 중국 선전에 위치한 15년 전통의 LED 디스플레이 전문 제조 공장입니다. 무대 렌탈 스크린, 옥외 방수 3D 빌보드, 초고화질 교회 및 스튜디오 비디오월을 전문 생산합니다.',
      seriesTitle: '제품 시리즈',
      testingTitle: '품질 연구소',
      orderingTitle: '주문 및 고객지원',
      locationLabel: '공장 주소: 중국 광둥성 선전시 바오안구 랴오컹대로 & 민성쓰로 (글로벌 LED 밸리)',
    }
  }
};
