import {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import Header from '../header/header';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {pushComment} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import Preloader from '../preloader/preloader';
import {CommentPost} from '../../types/comments';
import {stars} from '../../const';
import {setCommentSubmitted} from '../../store/action';
import {useHistory} from 'react-router-dom';

const mapStateToProps = ({currentFilm, commentSubmitted}: State) => ({
  currentFilm,
  commentSubmitted,
});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(comment: CommentPost) {
    dispatch(pushComment(comment));
  },
  updateCommentSubmitted() {
    dispatch(setCommentSubmitted(false));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function AddReview(props: PropsFromRedux): JSX.Element {
  const history = useHistory();
  const {onSubmit, currentFilm: film, commentSubmitted, updateCommentSubmitted} = props;
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState<boolean>(true);
  const [rating, setRating] = useState<number>(0);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  function handleChangeRating(event: ChangeEvent<HTMLInputElement>) {
    setRating(+event.target.value);
  }

  function handleChangeComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
    if (event.target.value.length >= 50 && event.target.value.length < 401) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }

  useEffect(() => {
    if(commentSubmitted === true){
      setIsActive(true);
      if(film){
        history.push(`/films/${film.id}`);
      }
    }
    updateCommentSubmitted();
    return function cleanup() {
      updateCommentSubmitted();
    };
  }, [commentSubmitted]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsActive(false);

    if (comment.length > 0 && film) {
      onSubmit({
        id: film.id,
        rating: rating,
        comment: comment,
      });
    }
  };

  if (!film) {
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
              {stars.map((star) => (
                <>
                  <input
                    className="rating__input"
                    id={`star-${star}`}
                    type="radio"
                    name="rating"
                    value={star}
                    onChange={handleChangeRating}
                  />
                  <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                </>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              disabled={!isActive}
              onChange={handleChangeComment}
              maxLength={400}
              minLength={50}
              className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                disabled={!canSubmit || !isActive}
                type="submit"
              >Post
              </button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}

export {AddReview};
export default connector(AddReview);

