import Articles from "./Articles";

const Article = ({article}) => {
    return (
        <div>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
        <span>{article.topic}</span>
        <span>{article.created_at}</span>
        </div>
        );
 };

export default Article;