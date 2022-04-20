import React from 'react'
import { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'

const Articles = () => {
  const [articles, setArticles] = useState([]); 
  
  useEffect(() => {
    getArticles().then(articlesFromApi => {
      console.log(articlesFromApi); 
      setArticles(articlesFromApi.articles)
    });
  },[]);

  return (
    <main>
    {articles.map(article => {
      return <ul>
      <li key = {article.article_id}>
       <h2>{article.title}</h2>
       <h3>{article.author}</h3>
       <h4>{article.created_at}</h4>
      </li>
      </ul>
    })}
    </main>
  );
};

export default Articles;