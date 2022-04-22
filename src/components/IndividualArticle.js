import React from "react";
import { useEffect, useState } from "react";
import { getArticleById, CommentsApi } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);
  return (
    <main className="individualArticle">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <h3>{article.author}</h3>
      <h4>{article.created_at}</h4>
      <h4>{article.votes}</h4>
      <Comments article_id={article_id}></Comments>
    </main>
  );
};

export default IndividualArticle;
