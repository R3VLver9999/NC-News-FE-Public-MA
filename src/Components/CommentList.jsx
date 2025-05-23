import { UserContext } from "../Contexts/User";
import { useState, useEffect, useContext } from "react";
import { getCommentsById } from "../api.js";
import CommentCard from "./CommentCard.jsx";
import CommentPostBox from "./CommentPostBox.jsx";
import "../Styles.css";

const CommentList = (props) => {
  const [reloadComments, setReload] = useState(false)
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setLoadingComments] = useState(false);
  const { loggedInUser, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    setLoadingComments(true);
    getCommentsById(props.id)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {
        props.setError(true);
      })
      .finally(() => {
        setLoadingComments(false);
      });
  }, [reloadComments]);

  if (isLoadingComments) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h3 className="Header-Text">Comments</h3>
        <ul className="Comment-List">
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </ul>
        <section>
          {isLoggedIn ? <CommentPostBox setReload={setReload}/> : <p>You must be logged in to post a comment.</p>}
        </section>
      </div>
    );
  }
};

export default CommentList;
