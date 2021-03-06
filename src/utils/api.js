import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://news-api-backend-prj.herokuapp.com/api",
});

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
export const getArticles = (sort_by, order) => {
  return articlesApi
    .get(`/articles?sort_by=${sort_by}&order=${order}`)
    .then(({ data }) => {
      console.log(data, "<<data");
      return data;
    });
};
export const GetTopicsApi = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
export const getTopicsApi = (topic) => {
  return articlesApi.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};
export const CommentsApi = (article_id) => {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};
export const patchIncDevVote = (article_id, votes) => {
  return articlesApi.patch(`/articles/${article_id}`, {
    inc_votes: votes,
  });
};

export const postComment = (article_id, username, newComment) => {
  return articlesApi.post(`/articles/${article_id}/comments`, {
    username: username,
    body: newComment,
  });
};

export const deleteComment = (comment_id) => {
  return articlesApi.delete(`/comments/${comment_id}`);
};
