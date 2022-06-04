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
    <ul className="topiclist">
      <li className="topic">
        <Link to="/" style={{ paddingLeft: 13, textDecoration: "none" }}>
          home🏠
        </Link>
      </li>
      {topics.map(({ slug }) => {
        return (
          <li className="topic" key={slug}>
            <Link
              to={`/topics/${slug}`}
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              {slug}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Topics;
