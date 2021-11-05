import {ActionType, ChangeGenre, GetListFilms} from '../types/action';

export const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getListFilms = (genre: string): GetListFilms => ({
  type: ActionType.GetListFilms,
  payload: genre,
});
