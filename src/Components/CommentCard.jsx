import { UserContext } from "../Contexts/User";
import { deleteCommentById } from "../api.js";
import { useContext, useState } from "react";
import "../Styles.css";

const CommentCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const [deletePending, setDeletePending] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [visible, setVisible] = useState(true);

  const handleDelete = () => {
    setDeletePending(true);
    deleteCommentById(props.comment.comment_id)
      .then((res) => {
        setVisible(false);
        setDeletePending(false);
      })
      .catch((err) => {
        setDeletePending(false);
        setVisible(true);
        setDeleteError("There was an error deleting your comment.");
      })
      .finally(() => {});
  };

  if (visible === false) {
    return null;
  }

  if (deletePending === true) {
    return (
      <div className="Comment-Card">
        <p>Deleting...</p>
      </div>
    );
  }

  if (loggedInUser.username === props.comment.author) {
    return (
      <div className="Comment-Card">
        <h4>Author: {props.comment.author}</h4>
        <p>{props.comment.created_at}</p>
        <p>{props.comment.body}</p>
        <p>Votes: {props.comment.votes}</p>
        <button id="Delete-Comment-Button" onClick={handleDelete}>
          Delete Comment
        </button>
      </div>
    );
  } else {
    return (
      <div className="Comment-Card">
        <h4>Author: {props.comment.author}</h4>
        <p>{props.comment.created_at}</p>
        <p>{props.comment.body}</p>
        <p>Votes: {props.comment.votes}</p>
      </div>
    );
  }
};

export default CommentCard;
