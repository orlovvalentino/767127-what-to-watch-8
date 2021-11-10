import {Films} from './films';
export enum ActionType {
  ChangeGenre = 'player/changeGenre',
  GetListFilms = 'player/getListFilms',
  SetFilteredFilms ='player/setFilteredFilms',
  SetCountFilmsInList = 'player/SetCountFilmsInList'
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre,
  payload: string,
}
export type GetListFilms = {
  type: ActionType.GetListFilms,
  payload: string,
}
export type SetFilteredFilms ={
  type:ActionType.SetFilteredFilms,
  payload:Films
}
export type SetCountFilmsInList = {
  type: ActionType.SetCountFilmsInList,
  payload:number
}

export type Actions = ChangeGenre | GetListFilms | SetFilteredFilms | SetCountFilmsInList;
