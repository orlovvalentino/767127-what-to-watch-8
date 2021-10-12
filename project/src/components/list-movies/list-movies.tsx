import {Films} from '../../types/films';
import MovieItem from '../movie-item/movie-item';

type ListMoviess ={
  films:Films[]
}

function ListMovies({films}:ListMoviess): JSX.Element {
  return (
    <>
      {films.map((film)=><MovieItem film={film} key={film.id}/>)}
    </>
  );
}

export default ListMovies;
