import {Films, Film} from './films';
import {Comments} from './comments';

export type State = {
  genre: string,
  countFilmsInList:number,
  films: Films,
  currentFilm?: Film,
  similarFilms?:Films,
  filteredFilms:Films,
  authorizationStatus:boolean,
  comments?:Comments,
};
