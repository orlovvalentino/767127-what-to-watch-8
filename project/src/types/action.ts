import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {
  changeGenre,
  getListFilms,
  getPromoFilm,
  setCurrentFilm,
  setFilteredFilms,
  setCountFilmsInList,
  setAuthorizationStatus,
  redirectToRoute,
  setSimilarFilms,
  setFavoriteFilms,
  setComments, setCommentSubmitted
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'player/changeGenre',
  GetListFilms = 'player/getListFilms',
  GetPromoFilm = 'player/getPromoFilm',
  SetCurrentFilm = 'player/setCurrentFilm',
  SetFilteredFilms ='player/setFilteredFilms',
  SetCountFilmsInList = 'player/SetCountFilmsInList',
  SetAuthorizationStatus='user/SetAuthorizationStatus',
  RedirectToRoute = 'player/redirectToRoute',
  SetSimilarFilms = 'player/setSimilarFilms',
  SetFavoriteFilms = 'player/setFavoriteFilms',
  SetComments = 'player/setComments',
  SetCommentSubmitted = 'player/setCommentSubmitted',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getListFilms>
  | ReturnType<typeof getPromoFilm>
  | ReturnType<typeof setCurrentFilm>
  | ReturnType<typeof setFilteredFilms>
  | ReturnType<typeof setCountFilmsInList>
  | ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setSimilarFilms>
  | ReturnType<typeof setFavoriteFilms>
  | ReturnType<typeof setComments>
  | ReturnType<typeof setCommentSubmitted>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
