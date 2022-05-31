import { useEffect, useState } from "react";
import { CommentsApi, deleteComment, postComment } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [username, setUser] = useState("");
  const [newComment, setNewComment] = useState("");

  const sendComment = (e) => {
    e.preventDefault();
    postComment(article_id, username, newComment).catch((err) => {
      console.log(err.response.data.msg);
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
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
