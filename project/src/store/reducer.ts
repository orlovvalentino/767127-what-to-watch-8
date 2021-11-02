import {films} from '../mocks/films';
import {BASE_GENRE} from '../const';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

const initialState = {
  genre: BASE_GENRE,
  films: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetListFilms:
      return {...state, films: films};
    default:
      return state;
  }
};

export {reducer};
