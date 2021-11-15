import {BASE_GENRE, COUNT_FILMS_IN_LIST} from '../const';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

const initialState = {
  genre: BASE_GENRE,
  countFilmsInList:COUNT_FILMS_IN_LIST,
  films: [],
  filteredFilms: [],
  authorizationStatus:false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetListFilms:
      return {...state, films: action.payload};
    case ActionType.SetFilteredFilms:
      return {...state, filteredFilms: action.payload};
    case ActionType.SetCountFilmsInList:
      return {...state, countFilmsInList: action.payload};
    case ActionType.SetAuthorizationStatus:
      return {...state, authorizationStatus:action.payload};
    default:
      return state;
  }
};

export {reducer};
