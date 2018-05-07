import MapView, { Animated, MAP_TYPES, ProviderPropType } from './lib/components/MapView';
import Marker from './lib/components/MapMarker.js';
import Overlay from './lib/components/MapOverlay.js';

import { default as Polyline } from './lib/components/MapPolyline.js';
import { default as Polygon } from './lib/components/MapPolygon.js';
import { default as Circle } from './lib/components/MapCircle.js';
import { default as UrlTile } from './lib/components/MapUrlTile.js';
import { default as LocalTile } from './lib/components/MapLocalTile.js';
import { default as Callout } from './lib/components/MapCallout.js';
import { default as AnimatedRegion } from './lib/components/AnimatedRegion.js';

export { Marker, Overlay, Polyline, Polygon, Circle, UrlTile, LocalTile, Callout, AnimatedRegion };
export { Animated, MAP_TYPES, ProviderPropType };

export const PROVIDER_GOOGLE = MapView.PROVIDER_GOOGLE;
export const PROVIDER_DEFAULT = MapView.PROVIDER_DEFAULT;

export const MarkerAnimated = Marker.Animated;
export const OverlayAnimated = Overlay.Animated;

export default MapView;

