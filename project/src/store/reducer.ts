import {films} from '../mocks/films';
import {State} from '../types/state';

const initialState = {
  genre: 'triller',
  films: films
};

const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export {reducer};
