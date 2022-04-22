import { useEffect, useState } from "react";
import { CommentsApi } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    CommentsApi(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);
  return (
    <section>
      <h2>Comments</h2>
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
        a
      </ul>
    </section>
  );
};

export default Comments;
