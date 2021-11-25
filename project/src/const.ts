export const BASE_GENRE = 'All genres';
export const COUNT_FILMS_IN_LIST = 8;

export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  FilmPage = '/films/:id/:tabs?',
  FilmAddReview = '/films/:id/review',
  Player = '/player/:id',
  Root = '/',
  NotFound = '/not-found'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  CommentPost = '/comments/',
  FavoriteFilms = '/favorite'
}

export const stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
