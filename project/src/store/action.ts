import {Films} from '../types/films';
import {
  ActionType,
  ChangeGenre,
  GetListFilms,
  SetAuthorizationStatus,
  SetCountFilmsInList,
  SetFilteredFilms
} from '../types/action';

export const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getListFilms = (films: Films): GetListFilms => ({
  type: ActionType.GetListFilms,
  payload: films,
});

export const setFilteredFilms = (films: Films): SetFilteredFilms => ({
  type: ActionType.SetFilteredFilms,
  payload: films,
});

export const setCountFilmsInList = (count: number):SetCountFilmsInList =>({
  type:ActionType.SetCountFilmsInList,
  payload: count,
});

export const setAuthorizationStatus = (status: boolean): SetAuthorizationStatus =>({
  type: ActionType.SetAuthorizationStatus,
  payload:status,
});

