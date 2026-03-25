import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet, { Map as LeafletMap } from 'leaflet';
import { CityOffer } from '../types/offer';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityOffer
): LeafletMap | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const { latitude, longitude, zoom } = city.location;

      const instance = leaflet.map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
      });

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap',
        })
        .addTo(instance);

      isRenderedRef.current = true;
      setMap(instance);
    }
  }, [mapRef, city]);

  return map;
}

export { useMap };
