import React from "react";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles, getTopicsApi, CommentsApi } from "../utils/api";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { article_id } = useParams();
  const { topic } = useParams();

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
    });
    getTopicsApi(topic).then((topicFromArticle) => {
      setArticles(topicFromArticle);
    });
  }, [topic]);

  // 사용자가 아티클 아이디를 입력하면 그 아티클 아이디에 있는 커멘트를 불러 들어온다.
  // 그리고 그 정보를 현재 정보로 세팅해준다.

  return (
    <main>
      <h2>{topic}</h2>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
