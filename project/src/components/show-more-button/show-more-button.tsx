import {COUNT_FILMS_IN_LIST} from '../../const';
import {State} from '../../types/state';
import {Films} from '../../types/films';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {setCountFilmsInList} from '../../store/action';


const mapStateToProps = ({countFilmsInList,films}: State) => ({
  countFilmsInList,
  films,
});
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  showMore(count:number, films:Films){
    dispatch(setCountFilmsInList(count+COUNT_FILMS_IN_LIST));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element{
  const {showMore,countFilmsInList,films} = props;
  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        onClick={()=>{
          showMore(countFilmsInList,films);
        }}
        type="button"
      >Show more
      </button>
    </div>
  );
}

export  {ShowMoreButton};
export default connector(ShowMoreButton);
