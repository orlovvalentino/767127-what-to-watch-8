import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {
  changeGenre,
  getListFilms,
  setFilteredFilms,
  setCountFilmsInList,
  setAuthorizationStatus,
  redirectToRoute
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'player/changeGenre',
  GetListFilms = 'player/getListFilms',
  SetFilteredFilms ='player/setFilteredFilms',
  SetCountFilmsInList = 'player/SetCountFilmsInList',
  SetAuthorizationStatus='user/SetAuthorizationStatus',
  RedirectToRoute = 'player/redirectToRoute'
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getListFilms>
  | ReturnType<typeof setFilteredFilms>
  | ReturnType<typeof setCountFilmsInList>
  | ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof redirectToRoute>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
