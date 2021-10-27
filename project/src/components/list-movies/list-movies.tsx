import { useState } from 'react';

import {Films,Film} from '../../types/films';

import MovieItem from '../movie-item/movie-item';

type PropsType ={
  films:Films
}

function ListMovies({films}:PropsType): JSX.Element {
  const [,setCurrentFilm] = useState('');
  return (
    <>
      {films.map((film:Film)=>(
        <MovieItem key={film.id}
          onHoverLeave={() => setCurrentFilm('')}
          onHover={() => setCurrentFilm(film.id.toString())}
          film={film}
        />
      ))};
    </>
  );
}

export default ListMovies;
