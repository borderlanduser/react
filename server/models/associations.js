import { User } from './user.js';
import { Offer } from './offer.js';

export const defineAssociations = () => {
  // Связь с автором
  Offer.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
  User.hasMany(Offer, { as: 'offers', foreignKey: 'authorId' });

  // Связь для избранного
  User.belongsToMany(Offer, {
    through: 'UserFavoriteOffers',
    as: 'favoriteOffers',
    foreignKey: 'userId'
  });

  Offer.belongsToMany(User, {
    through: 'UserFavoriteOffers',
    as: 'usersWhoFavorited',
    foreignKey: 'offerId'
  });
};