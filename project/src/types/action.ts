import {Films} from './films';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeGenre = 'player/changeGenre',
  GetListFilms = 'player/getListFilms',
  SetFilteredFilms ='player/setFilteredFilms',
  SetCountFilmsInList = 'player/SetCountFilmsInList',
  SetAuthorizationStatus='user/SetAuthorizationStatus'
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre,
  payload: string,
}
export type GetListFilms = {
  type: ActionType.GetListFilms,
  payload: Films,
}
export type SetFilteredFilms ={
  type:ActionType.SetFilteredFilms,
  payload:Films
}
export type SetCountFilmsInList = {
  type: ActionType.SetCountFilmsInList,
  payload:number
}
export type SetAuthorizationStatus= {
  type: ActionType.SetAuthorizationStatus,
  payload:boolean
}

export type Actions = ChangeGenre | GetListFilms | SetFilteredFilms | SetCountFilmsInList | SetAuthorizationStatus;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
