import { useState } from "react";
import { patchIncDevVote } from "../utils/api";
import Articles from "./Articles";

const ArticleVote = ({ article_id, vote }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const incrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote + 1); // 여기서 currentVote가 의미하는 것은 무엇이지
    patchIncDevVote(article_id, 1).catch(() => {
      setVotes((currentVote) => currentVote - 1);
      setErr("Sorry it doesn't work"); // 원래 vote로 리셋해주는 것
    });
  };
  const decrementVoteCount = () => {
    setErr(null);
    setVotes((currentVote) => currentVote - 1); // 브라우저에서 변경
    patchIncDevVote(article_id, -1).catch(() => {
      // 서버값변경
      setVotes((currentVote) => currentVote + 1); // 에러생기면 원래대로 바꾸기
      setErr("Sorry it doesn't work"); // 원래 vote로 리셋해주는 것
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
