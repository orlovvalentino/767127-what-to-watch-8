import {MouseEvent, useEffect} from 'react';
import {Films} from '../../types/films';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {changeGenre, setCountFilmsInList, setFilteredFilms} from '../../store/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {BASE_GENRE, COUNT_FILMS_IN_LIST} from '../../const';
import {getFilmsByGenre} from '../../tools';

const mapStateToProps = ({genre,films}: State) => ({
  genre,
  films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre:string, films:Films) {
    dispatch(changeGenre(genre));
    dispatch(setFilteredFilms(getFilmsByGenre(films,genre)));
  },
  resetCountFilmsInList(){
    dispatch(setCountFilmsInList(COUNT_FILMS_IN_LIST));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function getActiveClass(item:string, genre:string){
  return item.toLowerCase()===genre ? 'catalog__genres-item--active': '';
}
function getHref(item:string){
  if(item === 'all genres'){
    return '/';
  }
  return item.toLowerCase();
}

function ListGenres(props: ConnectedComponentProps):JSX.Element{
  const {onChangeGenre,resetCountFilmsInList, genre, films} = props;
  const genres = [...new Set(films.map((item) => item.genre))];
  genres.unshift(BASE_GENRE);

  useEffect(()=> {
    resetCountFilmsInList();
  });


  return (
    <ul className="catalog__genres-list">
      {genres.map((item)=> (
        <li key={`genre-${item}`}
          className={`catalog__genres-item ${getActiveClass(item,genre)}`}
        >
          <a href={getHref(item)}
            onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
              e.preventDefault();
              onChangeGenre(item.toLowerCase(),films);
            }}
            className='catalog__genres-link'
          >{item}
          </a>
        </li>
      ),
      )}
    </ul>
  );
}
export {ListGenres};
export default connector(ListGenres);
