import React from 'react'
import { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'
import { useParams, Link} from 'react-router-dom';


const Articles = () => {
  const [articles, setArticles] = useState([]); 
  const { article_id } = useParams();
  
  useEffect(() => {
    getArticles().then(articlesFromApi => {
      setArticles(articlesFromApi.articles)
    });
  },[article_id]);

  return (
    <main> 
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