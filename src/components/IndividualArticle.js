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
            setArticle(articleFromApi) // 이미 data.article인 상태인 것이다.
        // article_id를 api에 보내서 데이터를 가져온다. 
        // 그리고 그 데이터를 가져와서 사용자가 입력한 정보(아이디)로 현재 상태를 바꾸어 준다. 
        // 그리고 그 정보를 이제 Return을 해서 렌더링해서 보여준다. 
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

// 여기 컴퍼넌트에서는 사용자가 입력한 데이터를 받는다. 그 데이터는 article id인데 useParams를 사용해서 사용자가 입력한
// 아이디를 가져와서 getArticleById에 전달받은 id를 보내준다. 그러면 api에 있는 getArticleById에서 그 아이디를 전달받아서 히로쿠에 데이터를 불러온다 그래서 그 데이터를
// 다시 보낸다 individualArticle로 그게 then(articleFromApi)이다. 그 가져온 데이터를 
// 가져와서 setArticle로 상태를 바꾸어준다. 그러면 그 바꾼 상태가 article로 들어가게 된다.  

export default IndividualArticle;