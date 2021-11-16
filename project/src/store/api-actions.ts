import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {saveToken, Token} from '../services/token';
import {getListFilms, setAuthorizationStatus, setFilteredFilms,redirectToRoute} from './action';
import {APIRoute,AppRoute} from '../const';
import {ServerFilms} from '../types/serverFilms';
import {adaptFilmsToClient} from '../services/adapter';


export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilms>(APIRoute.Films);
    dispatch(getListFilms(adaptFilmsToClient(data)));
    dispatch(setFilteredFilms(adaptFilmsToClient(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(setAuthorizationStatus(true));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(true));
    dispatch(redirectToRoute(AppRoute.Root));
  };


