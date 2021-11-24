import {Films, Film} from '../types/films';
import {AppRoute} from '../const';

import {ActionType} from '../types/action';
import {Comments} from '../types/comments';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getListFilms = (films: Films) => ({
  type: ActionType.GetListFilms,
  payload: films,
} as const);
export const getPromoFilm = (film: Film) => ({
  type: ActionType.GetPromoFilm,
  payload: film,
} as const);

export const setCurrentFilm = (film: Film) => ({
  type: ActionType.SetCurrentFilm,
  payload: film,
} as const);

export const setFilteredFilms = (films: Films) => ({
  type: ActionType.SetFilteredFilms,
  payload: films,
} as const);

export const setCountFilmsInList = (count: number) => ({
  type: ActionType.SetCountFilmsInList,
  payload: count,
} as const);

export const setAuthorizationStatus = (status: boolean) => ({
  type: ActionType.SetAuthorizationStatus,
  payload: status,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export const setSimilarFilms = (films: Films) => ({
  type: ActionType.SetSimilarFilms,
  payload: films,
} as const);

export const setFavoriteFilms = (films: Films) => ({
  type: ActionType.SetFavoriteFilms,
  payload: films,
} as const);

export const setComments = (comments: Comments) => ({
  type: ActionType.SetComments,
  payload: comments,
} as const);

export const setCommentSubmitted = (status: boolean) => ({
  type: ActionType.SetCommentSubmitted,
  payload: status,
} as const);

