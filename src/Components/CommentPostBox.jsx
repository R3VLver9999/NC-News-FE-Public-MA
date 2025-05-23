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

  console.log("Username:", loggedInUser.username);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentLoading(true);
    postCommentToArticle(article_id, {
      body: input,
      username: loggedInUser.username,
    })
      .then((res) => {
        console.log("Comment Posted");
        props.setReload(true)
      })
      .catch((err) => {
        console.log(err);
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
