import { OffersList, FullOffer } from '../../types/offer';
import { NearPlacesCard } from '../near-places-card/near-places-card';

type NearPlacesListProps = {
  offers: OffersList;
  onCardMouseEnter?: (offer: FullOffer) => void;
  onCardMouseLeave?: () => void;
};

function NearPlacesList({
  offers,
  onCardMouseEnter,
  onCardMouseLeave,
}: NearPlacesListProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <NearPlacesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}

export { NearPlacesList };
