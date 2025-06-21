import { UserContext } from "../Contexts/User";
import { useState, useEffect, useContext } from "react";
import { getCommentsById } from "../api.js";
import CommentCard from "./CommentCard.jsx";
import CommentPostBox from "./CommentPostBox.jsx";
import "../Styles.css";

const CommentList = (props) => {
  const [reloadComments, setReload] = useState(0);
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

  function appendComment(newComment) {
    const currentComments = comments;

    const updatedComments = [
      ...currentComments,
      {
        author: newComment.author,
        comment_id: "000000",
        body: newComment.body,
        votes: 0,
        created_at: "Just now",
      },
    ];

    setComments(updatedComments);
  }

  function popComment() {
    const currentComments = [...comments];

    const updatedComments = currentComments.pop();

    setComments(updatedComments);
  }

  function filterComment(comment) {
    const currentComments = [...comments];

    const updatedComments = currentComments.filter((comm) => comm !== comment);

    setComments(updatedComments);
  }

  if (isLoadingComments) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h3 className="Header-Text">Comments</h3>
        <ul className="Comment-List">
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              popComment={popComment}
              filterComment={filterComment}
              appendComment={appendComment}
              reloadComments={reloadComments}
              setReload={setReload}
            />
          ))}
        </ul>
        <section>
          {isLoggedIn ? (
            <CommentPostBox
              comments={comments}
              appendComment={appendComment}
              filterComment={filterComment}
              reloadComments={reloadComments}
              setReload={setReload}
            />
          ) : (
            <p>You must be logged in to post a comment.</p>
          )}
        </section>
      </div>
    );
  }
};

export default CommentList;
