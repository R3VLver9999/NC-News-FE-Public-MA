import '../Styles.css';

const CommentCard = ({ comment }) => {
  return (
    <div className="Comment-Card">
      <h4>Author: {comment.author}</h4>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;