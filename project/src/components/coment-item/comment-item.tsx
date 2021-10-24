import {Comment} from '../../types/comments';

type PropsType = {
  comment: Comment
}
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDateString(date:string):string{
  const newdate = new Date(date);
  return `${monthNames[newdate.getMonth()]} ${newdate.getDate()}, ${newdate.getFullYear()}`;
}

function CommentItem({comment}:PropsType): JSX.Element {
  return(
    <div className="review" key={comment.id}>
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
