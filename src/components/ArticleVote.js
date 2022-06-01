import { useState } from "react";
import { patchIncDevVote } from "../utils/api";
import Articles from "./Articles";

const ArticleVote = ({ article_id, vote }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const incrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote + 1);
    patchIncDevVote(article_id, 1).catch(() => {
      setVotes((currentVote) => currentVote - 1);
      setErr("Sorry it doesn't work");
    });
  };
  const decrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote - 1);
    patchIncDevVote(article_id, -1).catch(() => {
      setVotes((currentVote) => currentVote + 1);
      setErr("Sorry it doesn't work");
    });
  };

  return (
    <div>
      <span>{vote + votes}</span>
      <button onClick={() => incrementVoteCount()}>Increase</button>
      <button onClick={() => decrementVoteCount()}>decrease</button>
      {err && <p>{err}</p>}
    </div>
  );
};

export default ArticleVote;