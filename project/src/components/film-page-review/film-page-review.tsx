import {Comments, Comment} from '../../types/comments';
import CommentItem from '../coment-item/comment-item';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import Preloader from '../preloader/preloader';

function calculateCommentsInColumn(localComments: Comments | undefined): number {
  if(localComments === undefined){
    return 0;
  }
  return Math.ceil(localComments.length / 2);
}
const mapStateToProps = ({comments}: State) => ({
  comments,
});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function FilmPageReview(props: ConnectedComponentProps): JSX.Element {
  const {comments} = props;
  const commentsInColumn = calculateCommentsInColumn(comments);

  if (!comments) {
    return <Preloader />;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, commentsInColumn).map((comment: Comment) =>
          (<CommentItem key={comment.id} comment={comment}/>))}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(commentsInColumn).map((comment: Comment) =>
          (<CommentItem key={comment.id} comment={comment}/>))}
      </div>
    </div>
  );
}

export {FilmPageReview};
export default connector(FilmPageReview);
