import {Film, Films} from './types/films';

export function getCurrentFilm(films: Films, id: string | undefined): Film{
  return films.find((item: Film) => item.id.toString() === id) ?? films[0];
}
