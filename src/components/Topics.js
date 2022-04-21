import { useEffect, useState } from "react";
import { GetTopicsApi} from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => { GetTopicsApi().then((topic) => {
        setTopics(topic);

    });
}, []);

return (
    <nav>
    <Link to="/">articles</Link>
    {topics.map(({slug}) => {
        return <Link to={`/topics/${slug}`}>{slug}</Link>;
    })}
    </nav>
)};

export default Topics