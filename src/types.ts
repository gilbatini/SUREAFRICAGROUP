export type PageId =
  | 'home'
  | 'services'
  | 'ocean-freight'
  | 'book'
  | 'tracking'
  | 'about'
  | 'contact'
  | 'style-guide';

export type Language = 'en' | 'sw';

export type ViewportVariant = 'desktop' | 'mobile';

export interface RouteLane {
  id: string;
  origin: string;
  destination: string;
  corridorType: 'regional' | 'islands' | 'inbound';
  mode: string;
  transitPlaceholder: string;
  notes: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleSw: string;
  shortDesc: string;
  category: string;
  iconName:
    | 'ship'
    | 'plane'
    | 'truck'
    | 'file-check'
    | 'warehouse'
    | 'boxes'
    | 'search'
    | 'package-plus';
  featured?: boolean;
}

export interface TrackingStage {
  id: string;
  label: string;
  labelSw: string;
  location: string;
  timestampPlaceholder: string;
  status: 'completed' | 'current' | 'upcoming';
  detail: string;
}
