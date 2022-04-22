import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://news-api-nc.herokuapp.com/api",
});

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
export const getArticles = (article_id, sort_by, order) => {
  return articlesApi
    .get(`/articles?sort_by=${sort_by}&order=${order}`)
    .then(({ data }) => {
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
    inc_votes: votes, // 이게 의미하는게 뭔지 모르겠다. 왜 inc_votes로 시작해야하는건지
  });
};
// 여기 parameter는 사용자가 입력하는 정보를 가져오는 것이다 ( 링크에서 입력하는 정보 )
export const postComment = (article_id, username, comment) => {
  return articlesApi.post(`/articles/${article_id}/comments`, {
    // 서버에 데이터 보내라
    body: comment,
    username: username, // 보내달라는 대로 맞춰서 보내기
  }); // 물어보기
}; // 내보내기 위해 ${} => :으로 전송

// 문의 404 오류 주소로 post보내면 서버에서 준비를 안하고 있다는 것
