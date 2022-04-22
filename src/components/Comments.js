import { useEffect, useState } from "react";
import { CommentsApi, postComment } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const sendComment = (e) => {
    e.preventDefault();
    postComment(article_id, e.target.username.value, e.target.comment.value);
  };
  useEffect(() => {
    CommentsApi(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);
  return (
    <section>
      <h2>Comments</h2>
      <form onSubmit={sendComment}>
        <input name="username"></input>
        <textarea name="comment"></textarea>
        <input type="submit"></input>
      </form>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <span>{comment.author}</span>
              <span>{comment.votes}</span>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
