import {ThunkActionResult} from '../types/action';
import {getListFilms, setFilteredFilms} from './action';
import {APIRoute} from '../const';
import {ServerFilms} from '../types/serverFilms';
import {adaptFilmsToClient} from '../services/adapter';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilms>(APIRoute.Films);
    dispatch(getListFilms(adaptFilmsToClient(data)));
    dispatch(setFilteredFilms(adaptFilmsToClient(data)));
  };
