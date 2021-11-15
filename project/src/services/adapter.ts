import {Films,Film} from '../types/films';
import {ServerFilms,ServerFilm} from '../types/serverFilms';

const adaptFilmToClient = (film: ServerFilm): Film => {
  const {
    name,
    description,
    rating,
    director,
    genre,
    released,
    id,
    starring,
  } = film;


  return {
    id,
    name,
    posterImage: film['poster_image'],
    previewImage: film['preview_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    description,
    rating,
    scoresCount: film['scores_count'],
    director,
    starring,
    runTime: film['run_time'],
    genre,
    released,
    isFavorite: film['is_favorite'],
  };
};

export const adaptFilmsToClient = (films: ServerFilms): Films  => films.map((item) => adaptFilmToClient(item));
