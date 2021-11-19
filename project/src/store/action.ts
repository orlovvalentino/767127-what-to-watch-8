import {Films} from '../types/films';
import {AppRoute} from '../const';

import {ActionType} from '../types/action';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getListFilms = (films: Films) => ({
  type: ActionType.GetListFilms,
  payload: films,
} as const);

export const setFilteredFilms = (films: Films) => ({
  type: ActionType.SetFilteredFilms,
  payload: films,
} as const);

export const setCountFilmsInList = (count: number) =>({
  type:ActionType.SetCountFilmsInList,
  payload: count,
} as const);

export const setAuthorizationStatus = (status: boolean) =>({
  type: ActionType.SetAuthorizationStatus,
  payload:status,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

