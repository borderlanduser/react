import type {ReviewType} from "../types/reviews";

const reviews: ReviewType[] = [
    {
        id: 1,
        offerId: 'bbb86a0e-3f92-446d-9a6e-cbd4b5d38e2b', 
        comment: "Honestly, we didn't want to leave. Every morning, having coffee on that little balcony tucked away from the bustle, and every evening stumbling upon the tiny wine bar Sophie recommended down the street, it made us feel like we lived there, not just visited. It's got that perfect, lived-in charm.",
        date: "2024-03-15T10:30:00.000Z",
        rating: 5,
        user: {
            name: "Diana",
            avatarUrl: "https://i.pravatar.cc/150?img=1",
            isPro: true
        }
    },
    {
        id: 2,
        offerId: 'bbb86a0e-3f92-446d-9a6e-cbd4b5d38e2b', 
        comment: "This apartment is pure Parisian magic. Yes, it's beautiful, but the real star was the smell of fresh bread from the bakery downstairs, the sound of the courtyard fountain, and the feeling that we'd discovered 'our' little corner of the city.",
        date: "2024-03-10T14:45:00.000Z",
        rating: 4,
        user: {
            name: "Adam",
            avatarUrl: "https://i.pravatar.cc/150?img=2",
            isPro: false
        }
    },
    {
        id: 3,
        offerId: 'ccc86a0e-3f92-446d-9a6e-cbd4b5d38e2c', 
        comment: "The highlight wasn't just the amazing location in the old warehouse district, but opening the windows to smell the river air, hear the ships' horns, and feeling the city's incredible energy pulse right into the living room. It was industrial, historic, and weirdly cozy all at once.",
        date: "2024-03-05T09:15:00.000Z",
        rating: 5,
        user: {
            name: "Mark",
            avatarUrl: "https://i.pravatar.cc/150?img=3",
            isPro: true
        }
    },
    {
        id: 4,
        offerId: 'ddd86a0e-3f92-446d-9a6e-cbd4b5d38e2d', 
        comment: "Sophisticated loft elegance right on the chic Place du Grand Sablon, placing you steps from the city's best chocolate, antiques, and culture.",
        date: "2024-02-28T16:20:00.000Z",
        rating: 4,
        user: {
            name: "Harry",
            avatarUrl: "https://i.pravatar.cc/150?img=4",
            isPro: false
        }
    },
    {
        id: 5,
        offerId: 'eee86a0e-3f92-446d-9a6e-cbd4b5d38e2e', 
        comment: "I could have spent the entire trip curled up in that window nook, watching the world go by on the canal. The sound of bikes, the gentle light... it was so peaceful, but with the energy of the city right at your doorstep. We felt completely at home.",
        date: "2024-02-20T11:10:00.000Z",
        rating: 5,
        user: {
            name: "Sam",
            avatarUrl: "https://i.pravatar.cc/150?img=5",
            isPro: true
        }
    },
    {
        id: 6,
        offerId: 'eee86a0e-3f92-446d-9a6e-cbd4b5d38e2e', 
        comment: "It rained one whole afternoon and we didn't care one bit! We played the provided board games, made hot chocolate, and just watched the canal turn all moody and romantic from the cozy loft bed. A perfect, hygge-filled memory.",
        date: "2024-02-15T13:55:00.000Z",
        rating: 4,
        user: {
            name: "Billie",
            avatarUrl: "https://i.pravatar.cc/150?img=6",
            isPro: false
        }
    }
];

export {reviews};