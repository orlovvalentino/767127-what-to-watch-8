import {useState, ChangeEvent, FormEvent} from 'react';
import Header from '../header/header';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {pushComment} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import Preloader from '../preloader/preloader';
import {CommentPost} from '../../types/comments';

const mapStateToProps = ({currentFilm}: State) => ({
  currentFilm,
});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(comment: CommentPost) {
    dispatch(pushComment(comment));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function AddReview(props: PropsFromRedux): JSX.Element {
  const {onSubmit,currentFilm: film} = props;
  const [comment, setComment] = useState('');

  function handleChangeComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (comment.length>0 && film) {
      onSubmit({
        id:film.id,
        rating:8,
        comment:comment,
      });
    }
  };

  if(!film){
    return <Preloader/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form
          className="add-review__form"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9"/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7"/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea onChange={handleChangeComment} className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}

export {AddReview};
export default connector(AddReview);

