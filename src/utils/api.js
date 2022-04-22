import axios from "axios";

const articlesApi = axios.create({
    baseURL: "https://news-api-nc.herokuapp.com/api",
});

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
   return data.article
  })
}
export const getArticles = (article_id) => {
    // let path = '/articles';
    // if (article_id){
    //   path += `{?article_id=${article_id}`;
    // }
    return articlesApi.get('/articles').then(({ data }) => {
      return data
    });
}
 export const GetTopicsApi = () => {
   return articlesApi.get("/topics").then(({ data }) => {
     return data.topics;
   })
 }
 export const getTopicsApi = (topic) => {
  return articlesApi.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  })
}
export const CommentsApi = (article_id) => {
  return articlesApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments
  })
} 
// 여기 parameter는 사용자가 입력하는 정보를 가져오는 것이다 ( 링크에서 입력하는 정보 )
 
 
