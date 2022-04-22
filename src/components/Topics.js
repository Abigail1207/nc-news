import { useEffect, useState } from "react";
import { GetTopicsApi } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  console.log(topics);
  useEffect(() => {
    GetTopicsApi().then((topic) => {
      setTopics(topic);
    });
  }, []);

  return (
    <nav>
      <ul>
        <l1>
          <Link to="/">articles</Link>
        </l1>
        {topics.map(({ slug }) => {
          return (
            <l1 key={slug}>
              <Link to={`/topics/${slug}`}>{slug + 1}</Link>
            </l1>
          );
        })}
      </ul>
    </nav>
  );
};

export default Topics;
