
import React from "react";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles, getTopicsApi, CommentsApi } from "../utils/api";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import ArticleVote from "./ArticleVote";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { article_id } = useParams();
  const { topic } = useParams();
  const [sortMethod, setSortMethod] = useState("created_at"); //3
  const [isAscend, setIsAscend] = useState(false); 
  useEffect(() => {
    if (topic) {
      getTopicsApi(topic).then((topicFromArticle) => {
        setArticles(topicFromArticle);
      });
    } else {
      getArticles(null, sortMethod, isAscend ? "asc" : "desc").then(
        (articlesFromApi) => {
          setArticles(articlesFromApi.articles);
        }
      );
    }
  }, [topic, sortMethod, isAscend]);
  return (
    <main>
      <h2 className="Topic">{topic}</h2>
      <select
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)} //1
      >
        <option value={"created_at"}>Date</option>
        <option value={"comment_count"}>Comment Count</option>
        <option value={"votes"}>Votes</option>
      </select>
      <input
        type="checkbox"
        checked={isAscend}
        onChange={(e) => setIsAscend(e.target.checked)} // 클릭갛면(값바꾸) 함수실행된다.
      ></input>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
              <ArticleVote
                article_id={article.article_id}
                vote={article.votes}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
