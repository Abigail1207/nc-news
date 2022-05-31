import { useEffect, useState } from "react";
import { GetTopicsApi } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    GetTopicsApi().then((topic) => {
      setTopics(topic);
    });
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">articles</Link>
        </li>
        {topics.map(({ slug }) => {
          return (
            <li key={slug}>
              <Link to={`/topics/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Topics;
