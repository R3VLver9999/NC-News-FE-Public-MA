import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByQuery } from "../api.js";
import ArticleCard from "./ArticleCard.jsx";
import "../Styles.css";

const TopicArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  useEffect(() => {
    props.setLoading(true)
    getArticlesByQuery(`sort_by=article_id`, `&order=ASC`, `&topic=${topic}`)
      .then((res) => {
        setArticles(res);
      })
      .catch((err) => {
        props.setError(true);
      })
      .finally(()=> {
        props.setLoading(false)
      })
  }, []);

  if (props.isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h3 className="Header-Text">{`${topic}`.charAt(0).toUpperCase() + `${topic}`.slice(1)} Articles</h3>
        <ul className="Article-List">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default TopicArticles;