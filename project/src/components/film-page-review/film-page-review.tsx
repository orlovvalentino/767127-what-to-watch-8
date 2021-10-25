import {comments} from '../../mocks/comments';

import {Comments, Comment} from '../../types/comments';

import CommentItem from '../coment-item/comment-item';

function calculateCommentsInColumn(cm: Comments): number {
  return Math.ceil(cm.length / 2);
}

function FilmPageReview(): JSX.Element {
  const commentsInColumn = calculateCommentsInColumn(comments);

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

export default FilmPageReview;
