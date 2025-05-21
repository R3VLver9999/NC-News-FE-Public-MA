import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api.js";
import '../Styles.css';


const ArticlePage = (props) => {
  const [articleData, setArticleData] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticleData(article)
      })
      .catch((err) => {
        props.setError(true);
      });
  }, []);

  console.log(articleData)

  return <div className="Article-Page">
    <h3 className="Header-Text">{articleData.title}</h3>
    <img src={articleData.article_img_url}></img>
    <p>Posted: {articleData.created_at}</p>
    <p>Votes: {articleData.votes}</p>
    <p className="Article-Body">{articleData.body}</p>
  </div>;
};

export default ArticlePage;
