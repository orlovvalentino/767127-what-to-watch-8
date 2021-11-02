import {Films} from '../../types/films';

type PropsType = {
  films: Films
}

function ListGenres({films}: PropsType):JSX.Element{
  const genres = [...new Set(films.map((item) => item.genre))];
  genres.unshift('All genres');
  return (
    <ul className="catalog__genres-list">
      {genres.map((item:string,index: number)=> (
        <li key={`genre-${item}`}
          className={`catalog__genres-item ${index===0 ? 'catalog__genres-item--active': ''}`}
        >
          <a href={`/${item.toLowerCase().replace(/ /g,'_')}`}
            className='catalog__genres-link'
          >{item}
          </a>
        </li>
      ),
      )}
    </ul>
  );
}
export default ListGenres;
