import { CityOffer } from '../../types/offer';
import { MouseEvent } from 'react';

type CitiesListProps = {
  cities: CityOffer[];
  activeCityName: string;
  onCityChange: (cityName: string) => void;
};

function CitiesList({ cities, activeCityName, onCityChange }: CitiesListProps) {
  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>, cityName: string) => {
    evt.preventDefault();
    onCityChange(cityName);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={`locations__item-link tabs__item ${
              city.name === activeCityName ? 'tabs__item--active' : ''
            }`.trim()}
            href="#"
            onClick={(evt) => handleCityClick(evt, city.name)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export { CitiesList };
