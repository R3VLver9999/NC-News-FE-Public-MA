import { UserContext } from "../Contexts/User";
import { useContext, useState } from "react";
import "../Styles.css";

const CommentCard = ({ comment }) => {
  const { loggedInUser } = useContext(UserContext);

  if (loggedInUser.username === comment.author) {
    return (
      <div className="Comment-Card">
        <h4>Author: {comment.author}</h4>
        <p>{comment.created_at}</p>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        <p>You posted this.</p>
      </div>
    );
  } else {
    return (
      <div className="Comment-Card">
        <h4>Author: {comment.author}</h4>
        <p>{comment.created_at}</p>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
      </div>
    );
  }
};

export default CommentCard;
