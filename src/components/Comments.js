import { useEffect, useState } from "react";
import { CommentsApi, deleteComment, postComment } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  console.log(comments);
  const [username, setUser] = useState("");
  const [newComment, setNewComment] = useState("");

  const sendComment = (e) => {
    e.preventDefault();
    if (newComment.length <= 0) return;
    postComment(article_id, username, newComment);
    setComments((currComments) => {
      const date = new Date(Date.now()).toISOString();
      const newCommentObj = {
        article_id: article_id,
        author: username,
        body: newComment,
        comment_id: 0,
        created_at: date,
        votes: 0,
      };
      const newCommentsList = [newCommentObj, ...currComments];
      setNewComment("");
      setUser("");
      return newCommentsList;
    });
  };
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleDelete = (comment_id) => {
    deleteComment(comment_id);
    setComments((currComments) => {
      return currComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
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
        <input
          value={username}
          name="username"
          onChange={(e) => handleUser(e)}
        ></input>
        <textarea
          value={newComment}
          name="comment"
          onChange={(e) => handleComment(e)}
        ></textarea>
        <button type="submit">submmit</button>
      </form>

      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <button onClick={(e) => handleDelete(comment.comment_id)}>
                delete
              </button>
              <span>{comment.author}</span>
              <p>{comment.votes}</p>
              <p>{comment.body}</p>
              <p>{comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
