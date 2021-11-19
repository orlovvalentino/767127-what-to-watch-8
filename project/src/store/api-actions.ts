import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {saveToken, Token} from '../services/token';
import {
  getListFilms,
  setAuthorizationStatus,
  setFilteredFilms,
  redirectToRoute,
  setCurrentFilm,
  setSimilarFilms, setComments
} from './action';
import {APIRoute,AppRoute} from '../const';
import {ServerFilms} from '../types/serverFilms';
import {adaptFilmsToClient,adaptFilmToClient} from '../services/adapter';


export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilms>(APIRoute.Films);
    dispatch(getListFilms(adaptFilmsToClient(data)));
    dispatch(setFilteredFilms(adaptFilmsToClient(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {payload} = await api.get(APIRoute.Login) as {payload:any};
    dispatch(setAuthorizationStatus(payload));
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(true));
    dispatch(redirectToRoute(AppRoute.Root));
  };

export const getCurrentFilm = (id:string | undefined):ThunkActionResult=>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Films}/${id}`);
    dispatch(setCurrentFilm(adaptFilmToClient(data)));
  };

export const getSimilarFilms = (id:string | undefined):ThunkActionResult=>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Films}/${id}/similar`);
    dispatch(setSimilarFilms(adaptFilmsToClient(data)));
  };

export const getComments = (id:string | undefined):ThunkActionResult=>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Comments}/${id}`);
    dispatch(setComments(data));
  };
