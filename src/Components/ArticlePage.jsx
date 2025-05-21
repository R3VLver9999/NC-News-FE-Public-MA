import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api.js";
import CommentList from "./CommentList";
import '../Styles.css';


const ArticlePage = (props) => {
  const [articleData, setArticleData] = useState([]);
  const [commentData, setCommentData] = useState([])
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

  return <div className="Article-Page">
    <h3 className="Header-Text">{articleData.title}</h3>
    <img src={articleData.article_img_url}></img>
    <p>Posted: {articleData.created_at}</p>
    <p>Votes: {articleData.votes}</p>
    <p className="Article-Body">{articleData.body}</p>
    <CommentList id={article_id}/>
  </div>;
};

export default ArticlePage;
