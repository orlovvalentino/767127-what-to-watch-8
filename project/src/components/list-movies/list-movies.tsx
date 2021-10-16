import { useState } from 'react';
import {Films} from '../../types/films';
import MovieItem from '../movie-item/movie-item';

type ListMoviess ={
  films:Films
}

function ListMovies({films}:ListMoviess): JSX.Element {
  const [currentFilm, setCurrentFilm] = useState('');
  return (
    <>
      {films.map((film)=> {
        return(
          <MovieItem
            key={film.id}
            onHoverLeave={() => setCurrentFilm('')}
            onHover={() => setCurrentFilm(film.id)} film={film} />
        )
      })};
    </>
  );
}

export default ListMovies;
