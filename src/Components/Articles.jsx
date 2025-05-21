import { useState, useEffect } from "react";
import { getArticles } from "../api.js";
import ArticleCard from "./ArticleCard.jsx"
import '../Styles.css';

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles()
      .then((res) => {
        console.log(res)
        setArticles(res);
      })
      .catch((err) => {
        console.log(err)
        props.setError(true);
      });
  }, []);
  return (
    <div>
      <h3 className="Header">Articles</h3>
      <ul className="Article-List">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
