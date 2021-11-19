import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {
  changeGenre,
  getListFilms,
  setCurrentFilm,
  setFilteredFilms,
  setCountFilmsInList,
  setAuthorizationStatus,
  redirectToRoute,
  setSimilarFilms,
  setComments
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'player/changeGenre',
  GetListFilms = 'player/getListFilms',
  SetCurrentFilm = 'player/setCurrentFilm',
  SetFilteredFilms ='player/setFilteredFilms',
  SetCountFilmsInList = 'player/SetCountFilmsInList',
  SetAuthorizationStatus='user/SetAuthorizationStatus',
  RedirectToRoute = 'player/redirectToRoute',
  SetSimilarFilms = 'player/setSimilarFilms',
  SetComments = 'player/setComments'
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getListFilms>
  | ReturnType<typeof setCurrentFilm>
  | ReturnType<typeof setFilteredFilms>
  | ReturnType<typeof setCountFilmsInList>
  | ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setSimilarFilms>
  | ReturnType<typeof setComments>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
