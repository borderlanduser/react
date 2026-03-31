import { FullOffer } from '../../types/offer';
import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteCardListProps = {
  offers: FullOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps) {
  return (
    <>
      {offers.map((offer) => (
        <FavoriteCard key={offer.id} offer={offer} />
      ))}
    </>
  );
}

export { FavoriteCardList };
