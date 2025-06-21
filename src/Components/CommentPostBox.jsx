import { UserContext } from "../Contexts/User";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postCommentToArticle } from "../api.js";
import "../Styles.css";

const CommentPostBox = (props) => {
  const [input, setInput] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentLoading(true);
    props.appendComment({body: input, author: loggedInUser.username})
    postCommentToArticle(article_id, {
      body: input,
      username: loggedInUser.username,
    })
      .then((res) => {
      })
      .catch((err) => {
        props.filterComment(props.comments[props.comments.length - 1])
        setCommentError(true);
      })
      .finally(() => {
        setCommentLoading(false);
      });
  };

  if (commentLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div id="Comment-Box">
        {commentError ? (
          <p>There was an error posting your comment. Please try again.</p>
        ) : (
          <></>
        )}
        <form>
          <input
            id="Comment-Input"
            type="text"
            minLength="1"
            maxLength="500"
            onChange={handleChange}
            required
          />
          <button id="Submit-Comment-Button" onClick={handleSubmit}>
            Submit Comment
          </button>
        </form>
      </div>
    );
  }
};

export default CommentPostBox;
