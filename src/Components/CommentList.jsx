import { useState, useEffect } from "react";
import { getCommentsById } from "../api.js";
import CommentCard from "./CommentCard.jsx"
import '../Styles.css';

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsById(props.id)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {
        props.setError(true);
      });
  }, []);

  console.log(comments)

  return (
    <div>
      <h3 className="Header-Text">Comments</h3>
      <ul className="Comment-List">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;