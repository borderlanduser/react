import type {FullOffer, OffersList} from '../types/offer';

export const mapFullOffersToOffersList = (fullOffers: FullOffer[]): OffersList[] => {
    return fullOffers.map((offer) => ({
        id: offer.id,
        title: offer.title,
        type: offer.type,
        price: offer.price,
        city: offer.city,
        location: offer.location,
        isFavorite: offer.isFavorite,
        isPremium: offer.isPremium,
        rating: offer.rating,
        previewImage: offer.images[0] || ''
    }));
};