import {Films} from '../types/films';

export const films: Films = [
  {
    id: 'film1',
    genre: 'drama',
    year: '2012',
    duration:'2h 22m',
    name: 'The Grand Budapest Hotelss',
    poster: './img/the-grand-budapest-hotel-poster.jpg',
    banner:'./img/bg-the-grand-budapest-hotel.jpg',
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
      comments:[
        {
          comment:'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'Kate Muir',
          datePublish:'December 24, 2016',
          rating:'8,9'
        },
        {
          comment:'11Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'11Kate Muir',
          datePublish:'11December 24, 2016',
          rating:'7,9'
        },
        {
          comment:'22Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'22Kate Muir',
          datePublish:'22December 24, 2016',
          rating:'6,9'
        },
      ]
    },
  },
  {
    id: 'film2',
    genre: 'triller',
    year: '2010',
    duration:'1h 39m',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    poster: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    banner:'./img/bg-11.jpeg',
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
      comments:[
        {
          comment:'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'Kate Muir',
          datePublish:'December 24, 2016',
          rating:'8,9'
        },
        {
          comment:'11Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'11Kate Muir',
          datePublish:'11December 24, 2016',
          rating:'7,9'
        },
        {
          comment:'22Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'22Kate Muir',
          datePublish:'22December 24, 2016',
          rating:'6,9'
        },
        {
          comment:'333Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'33Kate Muir',
          datePublish:'33December 24, 2016',
          rating:'3,9'
        },
        {
          comment:'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'4Kate Muir',
          datePublish:'December 24, 2016',
          rating:'8,9'
        },
        {
          comment:'11Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'55Kate Muir',
          datePublish:'11December 24, 2016',
          rating:'7,9'
        },
        {
          comment:'22Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
          author:'66Kate Muir',
          datePublish:'22December 24, 2016',
          rating:'6,9'
        }
      ]
    },
  },
];
