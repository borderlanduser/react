import { CitiesCard } from '../cities-card/cities-card';
import { FullOffer, OffersList } from '../../types/offer';

type CitiesCardListProps = {
  offers: OffersList;
  onCardMouseEnter?: (offer: FullOffer) => void;
  onCardMouseLeave?: () => void;
};

function CitiesCardList({
  offers,
  onCardMouseEnter,
  onCardMouseLeave,
}: CitiesCardListProps) {
  return (
    <>
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </>
  );
}

export { CitiesCardList };
