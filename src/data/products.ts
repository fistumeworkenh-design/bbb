import { LEDProduct, FactoryReel, ConfiguratorCategory } from '../types';

export const HERO_STAGE_IMAGE = '/assets/images/hero_concert_stage.jpg';
export const FACTORY_IMAGE = '/assets/images/factory_aging_racks.jpg';
export const OUTDOOR_IMAGE = '/assets/images/outdoor_3d_billboard.jpg';
export const PANEL_IMAGE = '/assets/images/led_panel_diecast.jpg';
export const CHURCH_STUDIO_IMAGE = '/assets/images/church_studio_led.jpg';

export const COMPANY_INFO = {
  name: 'ARESLED Screen Factory',
  whatsappRaw: '+86 177 0371 2497',
  whatsappPhoneOnly: '8617703712497',
  whatsappLink: 'https://wa.me/8617703712497',
  instagramHandle: '@aresled_factory',
  instagramLink: 'https://www.instagram.com/aresled_factory/',
  instagramFollowers: '65.9K',
  instagramPosts: '222',
  facebookName: 'Aresled Factory',
  facebookLikes: '63,385',
  facebookLink: 'https://www.facebook.com/AresledFactory',
  factoryLocation: 'Liaokeng Blvd & Minshengsi Rd, Baoan District, Shenzhen, China (World LED Hub)',
  experienceYears: 15,
  operatingHours: 'Open 24 Hours • 3 Shifts Non-Stop',
  certifications: ['CE', 'FCC', 'RoHS', 'ISO9001', 'EMC Class B', 'CB'],
};

export const CONFIGURATOR_CATEGORIES: ConfiguratorCategory[] = [
  {
    id: 'rental',
    name: 'Stage Rental Display',
    defaultPitch: 'P2.97',
    pitches: ['P1.95', 'P2.6', 'P2.97', 'P3.91', 'P4.81'],
    panelWidthMm: 500,
    panelHeightMm: 500,
    panelWeightKg: 7.2,
    basePricePerPanel: 135,
    avgPowerWatts: 85,
    maxPowerWatts: 240,
  },
  {
    id: 'indoor',
    name: 'Church & Studio Video Wall',
    defaultPitch: 'P1.86',
    pitches: ['P1.25', 'P1.53', 'P1.86', 'P2.0', 'P2.5'],
    panelWidthMm: 600,
    panelHeightMm: 337.5,
    panelWeightKg: 6.8,
    basePricePerPanel: 165,
    avgPowerWatts: 65,
    maxPowerWatts: 180,
  },
  {
    id: 'outdoor',
    name: 'Outdoor 3D Billboard',
    defaultPitch: 'P4.0',
    pitches: ['P3.07', 'P4.0', 'P5.0', 'P6.67', 'P8.0', 'P10'],
    panelWidthMm: 960,
    panelHeightMm: 960,
    panelWeightKg: 24.5,
    basePricePerPanel: 420,
    avgPowerWatts: 280,
    maxPowerWatts: 750,
  },
  {
    id: 'stadium',
    name: 'Stadium Perimeter Banner',
    defaultPitch: 'P6.67',
    pitches: ['P5.0', 'P6.67', 'P8.0', 'P10'],
    panelWidthMm: 1280,
    panelHeightMm: 960,
    panelWeightKg: 32.0,
    basePricePerPanel: 560,
    avgPowerWatts: 320,
    maxPowerWatts: 850,
  },
  {
    id: 'transparent',
    name: 'Transparent Glass Wall',
    defaultPitch: 'P3.91',
    pitches: ['P2.8', 'P3.91', 'P7.81', 'P10.4'],
    panelWidthMm: 1000,
    panelHeightMm: 500,
    panelWeightKg: 6.5,
    basePricePerPanel: 210,
    avgPowerWatts: 110,
    maxPowerWatts: 310,
  }
];

export const LED_PRODUCTS: LEDProduct[] = [
  {
    id: 'stage-rental-ares-pro',
    name: 'ARES Titan Tour Pro Rental Series',
    modelCode: 'ARS-R29 / ARS-R39',
    category: 'rental',
    tagline: 'Ultra-durable die-cast magnesium rental panel with 10s fast-lock & drop-tested chassis',
    pixelPitch: 'P2.6 / P2.97 / P3.91mm',
    cabinetSize: '500×500mm / 500×1000mm',
    cabinetMaterial: 'Die-cast Magnesium Aluminum',
    brightness: '1,200 - 4,500 nits',
    refreshRate: '3840Hz - 7680Hz Ultra-High',
    ipRating: 'IP65 Front & Rear',
    maintenance: 'Front & Rear Magnetic Fast Service',
    weight: '7.2 kg per 500×500mm panel',
    basePricePerSqm: 540,
    image: PANEL_IMAGE,
    featured: true,
    durabilityHighlight: 'Drop-tested from 1.5m without dead pixels; supports 150kg single-person step test.',
    applications: ['Concert World Tours', 'Music Festivals', 'Church Stages', 'Corporate Summits', 'Exhibition Booths']
  },
  {
    id: 'indoor-finepitch-studio',
    name: 'ARES UltraFine Studio & Conference Wall',
    modelCode: 'ARS-IF12 / ARS-IF18',
    category: 'indoor',
    tagline: 'Broadcast-grade fine pixel pitch LED video wall with HDR10+ and zero moiré pattern',
    pixelPitch: 'P1.25 / P1.56 / P1.86 / P2.0mm',
    cabinetSize: '600×337.5mm (Native 16:9)',
    cabinetMaterial: 'Precision CNC Die-cast Aluminum',
    brightness: '800 - 1,200 nits Auto-calibrated',
    refreshRate: '3840Hz Camera-flicker Free',
    ipRating: 'IP40 Dustproof Cleanroom sealed',
    maintenance: '100% Front Vacuum Service',
    weight: '6.8 kg per panel',
    basePricePerSqm: 820,
    image: CHURCH_STUDIO_IMAGE,
    featured: true,
    durabilityHighlight: 'Gold-wire packaging with COB encapsulation, scratch and impact resistant surface.',
    applications: ['TV Broadcast Studios', 'Command Centers', 'Mega Churches', 'Boardrooms', 'XR Virtual Production']
  },
  {
    id: 'outdoor-3d-billboard',
    name: 'StormGuard 3D Naked-Eye Outdoor Billboard',
    modelCode: 'ARS-OD40 / ARS-OD66',
    category: 'outdoor',
    tagline: '10,000-nit high-bright outdoor screen with 90-degree curved seamless corner technology',
    pixelPitch: 'P3.07 / P4.0 / P5.0 / P6.67mm',
    cabinetSize: '960×960mm / Custom Curved',
    cabinetMaterial: 'Waterproof Magnesium Alloy',
    brightness: '6,500 - 10,000 nits Sunlight Direct',
    refreshRate: '3840Hz High Gray Scale',
    ipRating: 'IP68 Double Waterproof Rating',
    maintenance: 'Front & Rear Dual Access',
    weight: '24.5 kg per 960×960mm cabinet',
    basePricePerSqm: 680,
    image: OUTDOOR_IMAGE,
    featured: true,
    durabilityHighlight: 'Survived continuous torrential water pouring test and 60°C high-temp baking test.',
    applications: ['Naked-eye 3D Corners', 'Commercial Plazas', 'Highway Billboards', 'Building Facades', 'Transit Terminals']
  },
  {
    id: 'stadium-perimeter-banner',
    name: 'ArenaShield FIFA-Standard Perimeter Display',
    modelCode: 'ARS-SP66 / ARS-SP80',
    category: 'stadium',
    tagline: 'Professional sports perimeter banner with soft silicone mask and 15° to 90° adjustable angle kickstand',
    pixelPitch: 'P5.0 / P6.67 / P8.0 / P10mm',
    cabinetSize: '1280×960mm / 960×960mm',
    cabinetMaterial: 'Impact-resistant Aluminum',
    brightness: '6,000 - 8,000 nits',
    refreshRate: '7680Hz Ultra-High Broadcast Spec',
    ipRating: 'IP65 All-weather Outdoor',
    maintenance: 'Rear Fast Door Service',
    weight: '32 kg per cabinet',
    basePricePerSqm: 590,
    image: HERO_STAGE_IMAGE,
    durabilityHighlight: 'Soft athlete protection cushion prevents player injuries during high-speed collisions.',
    applications: ['Football Stadiums', 'Basketball Arenas', 'Racing Tracks', 'Athletic Centers', 'Live Broadcast Venues']
  },
  {
    id: 'crystal-transparent-glass',
    name: 'CrystalVision Architectural Glass Screen',
    modelCode: 'ARS-TR39 / ARS-TR78',
    category: 'transparent',
    tagline: 'Up to 75% high transparency aesthetic LED film wall without blocking natural daylight',
    pixelPitch: 'P3.91-7.81mm / P7.81mm',
    cabinetSize: '1000×500mm / 1000×1000mm',
    cabinetMaterial: 'Slim Aircraft Aluminum Profile',
    brightness: '4,500 - 5,500 nits Daylight Visible',
    refreshRate: '3840Hz',
    ipRating: 'IP54 Indoor Window',
    maintenance: 'Modular Front Strip Replacement',
    weight: '6.5 kg per 1000×500mm panel',
    basePricePerSqm: 620,
    image: FACTORY_IMAGE,
    durabilityHighlight: 'Ultra-thin 10mm profile, lightweight hollow structure allows breeze and natural light flow.',
    applications: ['Luxury Retail Storefronts', 'Auto 4S Showrooms', 'Glass Atriums', 'Airport Terminals', 'Architectural Landmarks']
  },
  {
    id: 'creative-curved-wave',
    name: 'FlexCurve Wave & Cylinder Creative Series',
    modelCode: 'ARS-FC25 / ARS-FC30',
    category: 'curved',
    tagline: 'Flexible magnetic silicone module supporting concave, convex, wave, and cylindrical geometries',
    pixelPitch: 'P1.86 / P2.0 / P2.5 / P3.0mm',
    cabinetSize: 'Custom Architectural Curved Structure',
    cabinetMaterial: 'Flexible PCB + Silicone Base',
    brightness: '1,000 - 1,500 nits',
    refreshRate: '3840Hz',
    ipRating: 'IP43 Indoor Decorative',
    maintenance: 'Front Magnetic Service Tool',
    weight: '0.45 kg per flexible module',
    basePricePerSqm: 750,
    image: PANEL_IMAGE,
    durabilityHighlight: 'Tested through 10,000 continuous bend cycles without trace fracturing.',
    applications: ['Museum Immersive Tunnels', 'Pillar Wraps', 'Art Galleries', 'Nightclub Ceilings', 'Luxury Exhibition Booths']
  }
];

export const PRODUCTS = LED_PRODUCTS;

export const FACTORY_REELS: FactoryReel[] = [
  {
    id: 'reel-1-drop-test',
    title: 'Drop & Stomp Durability Test',
    caption: 'Our technician drops and stomps on the active P2.97 rental panel from 1.5m. Zero dead lamps! True die-cast chassis.',
    category: 'Durability Testing',
    views: '1.2M',
    likes: '84.5K',
    thumbnail: PANEL_IMAGE,
    testType: 'drop',
    summary: 'Demonstrates ultra-stiff magnesium frame and resin encapsulation resisting direct structural shock.'
  },
  {
    id: 'reel-2-water-splash',
    title: 'Heavy Torrent Water Pouring Test',
    caption: 'Pouring full buckets of water directly onto our running outdoor IP68 LED screen. 100% waterproof sealed glue coating.',
    category: 'Weatherproofing',
    views: '2.8M',
    likes: '192K',
    thumbnail: OUTDOOR_IMAGE,
    testType: 'water',
    summary: 'Nano-coated waterproof front face and rubberized aviation plugs guarantee 24/7 all-weather stability.'
  },
  {
    id: 'reel-3-vivo-stadium',
    title: 'VIVO Stadium Perimeter Screen Test',
    caption: 'Testing FIFA-grade soft mask resilience and high-speed camera refresh on our VIVO stadium banner installation.',
    category: 'Sports Arenas',
    views: '940K',
    likes: '61.2K',
    thumbnail: HERO_STAGE_IMAGE,
    testType: 'stadium',
    summary: 'High-contrast black mask with shock-absorbing foam prevents player injury while maintaining vivid slow-mo broadcasts.'
  },
  {
    id: 'reel-4-quick-lock',
    title: '10-Second Quick-Lock Assembly',
    caption: 'One female engineer builds a 4-panel rental video wall in under 40 seconds. Ergonomic fast-locking handles.',
    category: 'Rental Ergonomics',
    views: '730K',
    likes: '48.9K',
    thumbnail: FACTORY_IMAGE,
    testType: 'assembly',
    summary: 'Patented spring locks allow rapid single-person rigging and unrigging, slashing stage setup labor costs.'
  },
  {
    id: 'reel-5-aging-racks',
    title: '72-Hour Continuous Full-White Aging',
    caption: 'Every single panel goes through our 72-hour aging chamber under 100% full-white brightness before shipping.',
    category: 'Factory QC',
    views: '650K',
    likes: '39.8K',
    thumbnail: FACTORY_IMAGE,
    testType: 'aging',
    summary: 'Strict testing ensures color uniformity, white balance delta E < 1.5, and flawless initial burn-in.'
  },
  {
    id: 'reel-6-vivid-broadcast',
    title: 'Camera Anti-Flicker 3840Hz Display Test',
    caption: 'Looking through a 4K studio broadcast camera with zero scanlines, zero moire, and rich HDR contrast.',
    category: 'Studio Broadcast',
    views: '1.5M',
    likes: '110K',
    thumbnail: HERO_STAGE_IMAGE,
    testType: 'display',
    summary: 'High PWM driver ICs deliver 3840Hz to 7680Hz refresh rates, perfect for film sets and XR virtual studios.'
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    name: 'Marcus Sterling',
    role: 'Production Director, SoundWave World Tour',
    location: 'United States',
    comment: 'We purchased 180 panels of ARESLED Titan Tour P2.97 for our summer stadium tour. The quick-lock system saved us 2 hours every night, and after 45 shows across rain and heat, we had zero panel failures. Factory direct WhatsApp response was instant.',
    rating: 5,
    project: '120 sqm Concert Rental Wall'
  },
  {
    name: 'Pastor David Henderson',
    role: 'Executive Pastor, Grace Cathedral',
    location: 'United Kingdom',
    comment: 'Ordering custom curved P1.86 fine pitch for our sanctuary was seamless. The online calculator was spot-on, and the ARESLED team supported our AVL volunteers via WhatsApp video call during installation. The image quality is breathtaking.',
    rating: 5,
    project: '8m × 3.5m Church Sanctuary Wall'
  },
  {
    name: 'Khalid Al-Mansoor',
    role: 'Managing Director, Horizon Outdoor Media',
    location: 'Dubai, UAE',
    comment: 'Operating in 50°C desert summers requires true industrial grade. Our ARESLED P6 3D billboard runs 24/7 without overheating. Shipping from Shenzhen arrived ahead of schedule with 5% spare modules included for free.',
    rating: 5,
    project: '3D Naked-Eye Commercial Billboard (240 sqm)'
  }
];
