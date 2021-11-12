import {Films} from '../types/films';
import {ActionType, ChangeGenre, GetListFilms,SetFilteredFilms,SetCountFilmsInList} from '../types/action';

export const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getListFilms = (genre: string): GetListFilms => ({
  type: ActionType.GetListFilms,
  payload: genre,
});

export const setFilteredFilms = (films: Films): SetFilteredFilms => ({
  type: ActionType.SetFilteredFilms,
  payload: films,
});

export const setCountFilmsInList = (count: number):SetCountFilmsInList =>({
  type:ActionType.SetCountFilmsInList,
  payload: count,
});

