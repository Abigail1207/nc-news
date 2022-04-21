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
    let path = '/articles';
    if (article_id){
      path += `?article_id=${article_id}`;
    }
    return articlesApi.get(path).then(({ data }) => {
      return data
    });
};