import {ThunkAppDispatch} from '../../types/action';
import {pushFavorite} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import {MouseEvent, useEffect, useState} from 'react';
import {State} from '../../types/state';
import {Film} from '../../types/films';


type PropsType = {
  id: number,
}
const mapStateToProps = ({favoriteFilms}: State) => ({
  favoriteFilms,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickFavorite(id: number, status: number) {
    dispatch(pushFavorite(id, status));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & PropsType;

function AddToFavorite(props: PropsFromRedux): JSX.Element {
  const {id, onClickFavorite, favoriteFilms} = props;
  const [status, setStatus] = useState(0);
  useEffect(() => {
    if (!favoriteFilms) {
      return;
    }
    if (favoriteFilms.find((item: Film) => item.id === id)) {
      setStatus(1);
    } else {
      setStatus(0);
    }
  }, [id, status, favoriteFilms]);
  return (
    <button
      className="btn btn--list film-card__button"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        onClickFavorite(id, 1 - status);
      }}
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {status ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
    </button>
  );
}

export {AddToFavorite};
export default connector(AddToFavorite);
