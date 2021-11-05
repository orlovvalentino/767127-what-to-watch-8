export enum ActionType {
  ChangeGenre = 'player/changeGenre',
  GetListFilms = 'player/getListFilms',
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre,
  payload: string,
}
export type GetListFilms = {
  type: ActionType.GetListFilms,
  payload: string,
}

export type Actions = ChangeGenre | GetListFilms;
