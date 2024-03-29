import {Films, Film} from './films';
import {Comments} from './comments';

export type State = {
  genre: string,
  countFilmsInList:number,
  films: Films,
  filmPromo?:Film,
  currentFilm?: Film,
  similarFilms?:Films,
  favoriteFilms?:Films,
  filteredFilms:Films,
  authorizationStatus:boolean,
  comments?:Comments,
  commentSubmitted?:boolean,
};
