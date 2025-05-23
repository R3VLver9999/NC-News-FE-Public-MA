import { useState, useEffect, useContext } from "react";
import { getArticleVotesById, patchArticleVotesById } from "../api.js";
import { UserContext } from "../Contexts/User";
import "../Styles.css";

const VoteButton = (props) => {
  const [voteCount, setVoteCount] = useState(0);
  const [voteError, setVoteError] = useState(null);
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    getArticleVotesById(props.articleId)
      .then((votes) => {
        setVoteCount(votes);
      })
      .catch((err) => {
        console.log(err);
        props.setError(true);
      });
  }, []);

  const handleClick = () => {
    setVoteCount((currentVoteCount) => currentVoteCount + 1);
    setVoteError(null);
    patchArticleVotesById(props.articleId).catch((err) => {
      setVoteCount((currentVoteCount) => currentVoteCount - 1);
      setVoteError("Sorry, your like was unsuccessful. Please try again.");
    });
  };

  if (!isLoggedIn) {
    return (
      <section>
        <p>Votes: {voteCount}</p>
        <p>Please Log In to Vote.</p>
      </section>
    );
  } else if (isLoggedIn) {
    return (
      <section>
        <p>Votes: {voteCount}</p>
        <p>{voteError}</p>
        <button id="Add-Vote-Button" onClick={handleClick}>
          + Vote
        </button>
      </section>
    );
  }
};

export default VoteButton;
