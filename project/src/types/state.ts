import {Films} from './films';

export type State = {
  genre: string,
  countFilmsInList:number,
  films: Films,
  filteredFilms:Films,
};
