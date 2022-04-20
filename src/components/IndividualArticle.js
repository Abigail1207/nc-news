import React from 'react'
import { useEffect, useState } from 'react'
import { getArticleById } from '../utils/api'
import { useParams} from 'react-router-dom';

const IndividualArticle = () => {
       const [article, setArticle] = useState({});
       console.log(article)
       const { article_id } = useParams();
       console.log(article_id)
       useEffect(() => {
        getArticleById(article_id).then(articleFromApi => {
            setArticle(articleFromApi)
        })
       }, [])
    return ( 
        <main> 
           <h2>{article.title}</h2>
           <h3>{article.author}</h3>
           <h4>{article.created_at}</h4> 
        </main>
    )
}

export default IndividualArticle;