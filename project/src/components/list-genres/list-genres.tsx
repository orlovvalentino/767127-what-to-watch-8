import {MouseEvent} from 'react';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {changeGenre} from '../../store/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

type PropsType = {
  genres: string[],
}
const mapStateToProps = ({genre}: State) => ({
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre:string) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PropsType;

function ListGenres(props: ConnectedComponentProps):JSX.Element{
  const {genres, onChangeGenre, genre} = props;

  function getActiveClass(item:string){
    return item.toLowerCase()===genre ? 'catalog__genres-item--active': '';
  }
  function getHref(item:string){
    if(item === 'all genres'){
      return '/';
    }
    return item.toLowerCase();
  }
  return (
    <ul className="catalog__genres-list">
      {genres.map((item:string,index: number)=> (
        <li key={`genre-${item}`}
          className={`catalog__genres-item ${getActiveClass(item)}`}
        >
          <a href={getHref(item)}
            onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
              e.preventDefault();
              onChangeGenre(item.toLowerCase());
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
