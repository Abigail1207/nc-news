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
  const [isAscend, setIsAscend] = useState(false); //체크되면 트루
  useEffect(() => {
    if (topic) {
      getTopicsApi(topic).then((topicFromArticle) => {
        setArticles(topicFromArticle);
      });
    } else {
      getArticles(null, sortMethod, isAscend ? "asc" : "desc").then(
        (articlesFromApi) => {
          // 트루면 asc로 아니면 desc
          setArticles(articlesFromApi.articles);
        }
      );
    }
  }, [topic, sortMethod, isAscend]); // 여기 값 바뀔때마다함수 실행 (토픽) 2
  // date를 클릭해서 다른 것으로 바꾸었다. 보츠로 바꾸었다 35번 코드 실행된다. 그러면 그 함수가 실
  //행되서 그게 보트로 바뀔것이다. 그러면 밸류도 바뀌고 그리고 솔트메소드가 바뀌면 유즈이펙트가 실행이 된다.

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
