import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map';
import { CityOffer, FullOffer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  className: string;
  city: CityOffer;
  points: FullOffer[];
  selectedPoint?: FullOffer | null;
};

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ className, city, points, selectedPoint }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  // 🔹 НОВЫЙ ЭФФЕКТ: при смене города двигаем центр карты
  useEffect(() => {
    if (!map) {
      return;
    }

    const { latitude, longitude, zoom } = city.location;
    map.setView({ lat: latitude, lng: longitude }, zoom);
  }, [map, city]);

  // существующий эффект с маркерами
  useEffect(() => {
    if (!map) {
      return;
    }

    const layer = leaflet.layerGroup().addTo(map);

    points.forEach((offer) => {
      const isSelected = selectedPoint && offer.id === selectedPoint.id;

      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          { icon: isSelected ? currentIcon : defaultIcon }
        )
        .addTo(layer);
    });

    return () => {
      map.removeLayer(layer);
    };
  }, [map, points, selectedPoint]);

  return <section className={className} ref={mapRef}></section>;
}

export { Map };
