import {Film, Films} from './types/films';

export function getCurrentFilm(films: Films, id?: string): Film {
  return films.find((item: Film) => item.id.toString() === id) ?? films[0];
}

export function getFilmsByGenre(films: Films, genre: string): Films {
  if(genre.toLowerCase() === 'all genres'){
    return films;
  }
  return films.filter((item: Film) => item.genre.toLowerCase() === genre.toLowerCase()) ?? films
}
