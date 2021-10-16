import { useState } from 'react';
import {Films,Film} from '../../types/films';
import MovieItem from '../movie-item/movie-item';

type ListMoviess ={
  films:Films
}

function ListMovies({films}:ListMoviess): JSX.Element {
  const [currentFilm, setCurrentFilm] = useState('');
  return (
    <>
      {films.map((film:Film)=> {
        (
          <>
            <pre>{currentFilm}</pre>
            <MovieItem
              key={film.id}
              onHoverLeave={() => setCurrentFilm('')}
              onHover={() => setCurrentFilm(film.id)} film={film}
            />
          </>

        );
      })};
    </>
  );
}

export default ListMovies;
