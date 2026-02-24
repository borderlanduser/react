import { Offer } from '../models/offer.js';
import { User } from '../models/user.js';
import ApiError from '../error/ApiError.js'; 
import { adaptOfferToClient, adaptFullOfferToClient } from '../adapters/offerAdapter.js'; 

async function getAllOffers(req, res, next) {
    try {
        const offers = await Offer.findAll();
        const adaptedOffers = offers.map(adaptOfferToClient);
        res.status(200).json(adaptedOffers);
    } catch (error) {
        console.error('Не удалось получить список предложений:', error);
        next(ApiError.internal('Не удалось получить список предложений'));
    }
}

async function createOffer(req, res, next) {
 try {
   const {
     title, description, publishDate, city,
     isPremium, isFavorite, rating, type, rooms, guests, price,
     features, commentsCount, latitude, longitude, userId
   } = req.body;


   if (!req.files?.previewImage || req.files.previewImage.length === 0) {
     return next(ApiError.badRequest('Превью изображение обязательно для загрузки'));
   }


   const previewImagePath = `/static/${req.files.previewImage[0].filename}`;


   let processedPhotos = [];
   if (req.files?.photos) {
     processedPhotos = req.files.photos.map(file => `/static/${file.filename}`);
   }


   let parsedFeatures = [];
   if (features) {
     try {
       parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;
     } catch {
       parsedFeatures = features.split(',');
     }
   }


   const offer = await Offer.create({
     title,
     description,
     publishDate,
     city,
     previewImage: previewImagePath,
     photos: processedPhotos,
     isPremium,
     isFavorite,
     rating,
     type,
     rooms,
     guests,
     price,
     features: parsedFeatures,
     commentsCount,
     latitude,
     longitude,
     authorId: userId
   });


   return res.status(201).json(offer);
 } catch (error) {
   next(ApiError.internal('Не удалось добавить предложение: ' + error.message));
 }
}
async function getFullOffer(req, res, next) {
  try {
    // 1. Извлекаем id из URL
    const { id } = req.params;
    
    // 2. Находим предложение по ID вместе с автором
    const offer = await Offer.findByPk(id, {
      include: { model: User, as: 'author' }
    });
    
    // 3. Если не найдено - возвращаем ошибку
    if (!offer) {
      return next(ApiError.badRequest('Offer not found'));
    }
    
    // 4. Адаптируем данные для клиента
    const adaptedOffer = adaptFullOfferToClient(offer, offer.author);
    
    // 5. Возвращаем ответ
    res.status(200).json(adaptedOffer);
    
  } catch (error) {
    // 6. Ловим ошибки
    console.error('Ошибка при получении предложения:', error);
    next(ApiError.internal('Не удалось получить предложение'));
  }
}

async function getFavoriteOffers(req, res, next) {
  try {
    const userId = req.user.id; // ID текущего пользователя из authMiddleware
    // Находим пользователя с его избранными офферами
    const user = await User.findByPk(userId, {
      include: [{
        model: Offer,
        as: 'favoriteOffers', // Название связи в модели
        through: { attributes: [] } // Не показывать данные связующей таблицы
      }]
    });
    if (!user) {
      return next(ApiError.notFound('Пользователь не найден'));
    }
    // Адаптируем каждый оффер для клиента (как в getAllOffers)
    const adaptedOffers = user.favoriteOffers.map(adaptOfferToClient);
    // Возвращаем адаптированный список
    res.status(200).json(adaptedOffers);
  } catch (error) {
    console.error('Не удалось получить избранные предложения:', error);
    next(ApiError.internal('Не удалось получить избранные предложения'));
  }
}

const toggleFavorite = async (req, res, next) => {
  try {
    const { offerId, status } = req.params;

    const offer = await Offer.findByPk(offerId);
    if (!offer) {
    return next(ApiError.notFound('Предложение не найдено'));
    }

    offer.isFavorite = status === '1';
    await offer.save();

    res.json(offer);
  } catch (error) {
    next(ApiError.internal('Ошибка при обновлении статуса избранного'));
  }
};

export { getAllOffers, createOffer, getFullOffer, getFavoriteOffers, toggleFavorite};