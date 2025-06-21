import { useState, useEffect } from "react";
import { getTopics } from "../api.js";
import TopicCard from "./TopicCard.jsx";
import "../Styles.css";

const TopicsList = (props) => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    props.setLoading(true);
    getTopics()
      .then((res) => {
        console.log(res, "Topics")
        setTopics(res);
      })
      .catch((err) => {
        props.setError(true);
      })
      .finally(() => {
        props.setLoading(false);
      });
  }, []);

  if (props.isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h3 className="Header-Text">Topics</h3>
        <ul className="Topic-List">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic}/>
          ))}
        </ul>
      </div>
    );
  }
};

export default TopicsList;
