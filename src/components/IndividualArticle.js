import React from "react";
import { useEffect, useState } from "react";
import { getArticleById, CommentsApi } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Error from "./Error";

const IndividualArticle = () => {
  const [err, setErr] = useState(null);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then((articleFromApi) => {
        setIsLoading(false);
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setErr(err.response.statusText);
      });
  }, []);

  if (err) {
    return <Error errorMsg={err} />;
  }
  if (isLoading) {
    return <h1> Loading...</h1>;
  }
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
