import { Routes, Route, Link } from "react-router-dom";
import '../Styles.css';


const TopicCard = ({ topic }) => {
  return (
    <div className="Topic-Card">
      <h2>{topic.slug}</h2>
      <h3>{topic.description}</h3>
      <Link to={`/topics/${topic.slug}`} className = "pageLink">View articles about {`${topic.slug}`}</Link>
    </div>
  );
};

export default TopicCard;