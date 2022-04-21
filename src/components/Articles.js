import React from 'react'
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from 'react'
import { getArticles, getTopicsApi } from '../utils/api'
import { useParams, Link} from 'react-router-dom';


const Articles = () => {
  const [articles, setArticles] = useState([]); 
  const { article_id } = useParams();
  const { topic } = useParams();
  console.log(topic)
  
  useEffect(() => {
    getArticles().then(articlesFromApi => {
      setArticles(articlesFromApi.articles)
    });
    getTopicsApi(topic).then(topicFromArticle => {
      setArticles(topicFromArticle)
    });
  },[topic]);

  

  return (
    <main> 
    <h2>{topic}</h2>
    <ul>
    {articles.map(article => {
      return (
      <li key={article.article_id}>
      <Link to={`/articles/${article.article_id}`}>
      <ArticleCard article={article} />
       </Link>
      </li>
    )})} 
    </ul>
    </main>
  );
};

export default Articles;