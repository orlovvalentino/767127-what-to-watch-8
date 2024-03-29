import {Comment} from '../../types/comments';

type PropsType = {
  comment: Comment
}

function getDateString(date:string):string{
  const newDate = new Date(date);
  return `${newDate.toLocaleString(document.documentElement.lang, { month: 'long' })} ${newDate.getDate()}, ${newDate.getFullYear()}`;
}

function CommentItem({comment}:PropsType): JSX.Element {
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{getDateString(comment.date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating.toString().replace('.', ',')}</div>
    </div>
  );
}

export default CommentItem;
