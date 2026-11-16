import type { RouteSlug } from './data/routes';

export type RoutePageId = `route:${RouteSlug}`;

export type PageId =
  | 'home'
  | 'services'
  | 'ocean-freight'
  | 'routes'
  | RoutePageId
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
  /** Links the lane to its route page, if it has one. */
  routeSlug?: RouteSlug;
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
    | 'package-plus'
    | 'alert-triangle'
    | 'anchor'
    | 'repeat'
    | 'package';
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
