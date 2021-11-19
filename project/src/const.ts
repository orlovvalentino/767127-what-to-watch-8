export const BASE_GENRE = 'all genres';
export const COUNT_FILMS_IN_LIST = 8;

export enum AppRoute {
  Login = '/login',
  Mylist = '/mylist',
  FilmPage = '/films/:id/:tabs?',
  FilmAddReview = '/films/:id/review',
  Player = '/player/:id',
  Root = '/'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Comments='/comments'
}
