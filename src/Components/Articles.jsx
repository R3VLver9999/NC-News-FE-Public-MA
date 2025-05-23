import { useState, useEffect } from "react";
import { getArticles } from "../api.js";
import ArticleCard from "./ArticleCard.jsx";
import "../Styles.css";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    props.setLoading(true)
    getArticles()
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
        <h3 className="Header-Text">Articles</h3>
        <ul className="Article-List">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default ArticleList;
