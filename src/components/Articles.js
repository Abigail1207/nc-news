import React from "react";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles, getTopicsApi, CommentsApi } from "../utils/api";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import ArticleVote from "./ArticleVote";
import Error from "./Error";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { article_id } = useParams();
  const { topic } = useParams();
  const [sortMethod, setSortMethod] = useState("created_at");
  const [isAscend, setIsAscend] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (topic) {
      getTopicsApi(topic)
        .then((topicFromArticle) => {
          setArticles(topicFromArticle);
          setErr(null);
        })
        .catch((err) => {
          setErr(err.response.statusText);
        });
    } else {
      getArticles(sortMethod, isAscend ? "asc" : "desc").then(
        (articlesFromApi) => {
          setArticles(articlesFromApi.articles);
        }
      );
    }
  }, [topic, sortMethod, isAscend]);

  if (err) {
    return <Error error={err} />;
  }

  return (
    <main>
      <h2 className="Topic">{topic}</h2>
      <input
        className="select"
        type="checkbox"
        checked={isAscend}
        onChange={(e) => setIsAscend(e.target.checked)}
      ></input>
      <select
        className="select"
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)}
      >
        <option value={"created_at"}>Date</option>
        <option value={"comment_count"}>Comment Count</option>
        <option value={"votes"}>Votes</option>
      </select>

      <ul className="articles">
        {articles.map((article) => {
          return (
            <li className="article-card" key={article.article_id}>
              <Link
                to={`/articles/${article.article_id}`}
                style={{ paddingLeft: 13, textDecoration: "none" }}
              >
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
