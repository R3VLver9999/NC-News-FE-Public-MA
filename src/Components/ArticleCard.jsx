// import { Routes, Route, Link } from "react-router-dom";
import '../Styles.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="Article-Card">
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <h3>{article.author}</h3>
      <h3>{article.created_at}</h3>
      <h3>{article.votes}</h3>
    </div>
  );
};

export default ArticleCard;
