import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {saveToken, Token, removeToken} from '../services/token';
import {
  getListFilms,
  setAuthorizationStatus,
  setFilteredFilms,
  redirectToRoute,
  setCurrentFilm,
  setSimilarFilms,
  setComments,
  setCommentSubmitted,
  setFavoriteFilms, getPromoFilm
} from './action';
import {APIRoute, AppRoute} from '../const';
import {ServerFilms,ServerFilm} from '../types/serverFilms';
import {adaptFilmsToClient, adaptFilmToClient} from '../services/adapter';
import {CommentPost} from '../types/comments';


export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilms>(APIRoute.Films);
    dispatch(getListFilms(adaptFilmsToClient(data)));
    dispatch(setFilteredFilms(adaptFilmsToClient(data)));
  };
export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilm>(APIRoute.Promo);
    dispatch(getPromoFilm(adaptFilmToClient(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const resp = await api.get(APIRoute.Login);
    if (resp.status === 200) {
      dispatch(setAuthorizationStatus(true));
    } else {
      dispatch(setAuthorizationStatus(false));
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{ token: Token }>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(true));
    dispatch(redirectToRoute(AppRoute.Root));
  };
export const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(setAuthorizationStatus(false));
  };

export const getCurrentFilm = (id: string | undefined): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get(`${APIRoute.Films}/${id}`);
      dispatch(setCurrentFilm(adaptFilmToClient(data)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

  };

export const getSimilarFilms = (id: string | undefined): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Films}/${id}/similar`);
    dispatch(setSimilarFilms(adaptFilmsToClient(data)));
  };
export const getFavoriteFilms = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    if(getState().authorizationStatus){
      const {data} = await api.get(`${APIRoute.FavoriteFilms}`);
      dispatch(setFavoriteFilms(adaptFilmsToClient(data)));
    }
  };

export const getComments = (id: string | undefined): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Comments}/${id}`);
    dispatch(setComments(data));
  };

export const pushComment = ({id, comment, rating}: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.CommentPost}${id}`, {comment, rating})
      .then((resp) => {
        if (resp.status === 200) {
          dispatch(setCommentSubmitted(true));
        }
      });
  };
export const pushFavorite = (id: number,status:number): ThunkActionResult =>
  async (dispatch, getState, api) => {
    if(getState().authorizationStatus){
      await api.post(`${APIRoute.FavoriteFilms}/${id}/${status}`, {id, status});
      dispatch(getFavoriteFilms());
    }else{
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };
