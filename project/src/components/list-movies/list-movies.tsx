import {Films,Film} from '../../types/films';

import MovieItem from '../movie-item/movie-item';

type PropsType ={
  films:Films
}

function ListMovies({films}:PropsType): JSX.Element {
  return (
    <>
      {films.map((film:Film)=>(
        <MovieItem key={film.id}
          film={film}
        />
      ))}
    </>
  );
}

export default ListMovies;
