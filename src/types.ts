export type ScreenCategory = 
  | 'all' 
  | 'rental' 
  | 'indoor' 
  | 'outdoor' 
  | 'stadium' 
  | 'transparent' 
  | 'curved';

export interface LEDProduct {
  id: string;
  name: string;
  modelCode: string;
  category: 'rental' | 'indoor' | 'outdoor' | 'stadium' | 'transparent' | 'curved';
  tagline: string;
  pixelPitch: string;
  cabinetSize: string; // e.g. "500x500mm / 500x1000mm"
  cabinetMaterial: string; // "Die-cast Aluminum"
  brightness: string; // "1000 - 1500 nits" or "5500 - 7500 nits"
  refreshRate: string; // "3840Hz / 7680Hz"
  ipRating: string; // "IP65/IP54"
  maintenance: string; // "Front & Rear Dual Service"
  weight: string; // "7.5 kg/panel"
  basePricePerSqm: number; // USD per square meter
  image: string;
  featured?: boolean;
  durabilityHighlight: string;
  applications: string[];
}

export interface FactoryReel {
  id: string;
  title: string;
  caption: string;
  category: string;
  views: string;
  likes: string;
  thumbnail: string;
  videoUrl?: string;
  testType: 'drop' | 'water' | 'stadium' | 'assembly' | 'aging' | 'display';
  summary: string;
}

export interface ConfiguratorCategory {
  id: 'rental' | 'indoor' | 'outdoor' | 'stadium' | 'transparent';
  name: string;
  defaultPitch: string;
  pitches: string[];
  panelWidthMm: number;
  panelHeightMm: number;
  panelWeightKg: number;
  basePricePerPanel: number;
  avgPowerWatts: number;
  maxPowerWatts: number;
}

export interface ConfiguratorState {
  category: 'rental' | 'indoor' | 'outdoor' | 'stadium' | 'transparent' | string;
  pitch: string;
  widthMeters: number;
  heightMeters: number;
  environment?: 'indoor' | 'outdoor';
  maintenance?: 'front' | 'rear' | 'dual';
  includeController: boolean;
  controllerBrand?: 'Novastar' | 'Colorlight';
  includeFlightCases: boolean;
  includeHangingBars: boolean;
  includeSpareParts?: boolean; // Free 5%
  destinationCountry: string;
}

export interface OrderSubmission {
  orderId: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCompany?: string;
  destinationCountry: string;
  specifications: {
    category: string;
    pitch: string;
    dimensions: string;
    totalAreaSqm: number;
    panelCount: number;
    resolution: string;
    brightness: string;
    weightTotalKg: number;
    powerConsumptionKw: number;
    accessories: string[];
  };
  totalEstimatedUsd: number;
  notes?: string;
  status: 'pending_confirmation' | 'processing';
}
