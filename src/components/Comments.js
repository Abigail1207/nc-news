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
    <section className="comments">
      <h5 className="section-tit">
        comments<span className="count-num">{comments.length}</span>
      </h5>
      <form onSubmit={sendComment}>
        <input
          placeholder="Write a nickname"
          value={username}
          name="username"
          onChange={(e) => handleUser(e)}
        ></input>
        <textarea
          placeholder="Write a comment"
          value={newComment}
          name="comment"
          onChange={(e) => handleComment(e)}
        ></textarea>
        <button type="submit">Add</button>
      </form>

      <ul>
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment.comment_id}>
              <p>{comment.body}</p>
              <span>author : {comment.author}</span>
              <p>
                created date:
                {
                  comment.created_at.match(
                    /([0-9]){4}\-([0-9]){2}\-([0-9]){2}/
                  )[0]
                }
              </p>
              <button onClick={(e) => handleDelete(comment.comment_id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
