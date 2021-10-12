import {Films} from '../types/films';

export const films: Films[] = [
  {
    id: 'film1',
    genre: 'drama',
    year: '2012',
    name: 'The Grand Budapest Hotel',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    director: 'Wes Anderson',
    starring: [
      'Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe',
    ],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    ratings: {
      ratingCount: 240,
      ratingLevel: 'very good',
      ratingScore: '8.9',
    },
  },
  {
    id: 'film2',
    genre: 'triller',
    year: '2010',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    poster: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    director: 'Wes Anderson Jr',
    starring: [
      'Madonna', 'Hutz', 'Dima', 'Kolya',
    ],
    description: 'Film about pepople',
    ratings: {
      ratingCount: 133,
      ratingLevel: 'poor',
      ratingScore: '1.3',
    },
  },
];
