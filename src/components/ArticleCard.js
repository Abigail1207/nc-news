const Article = ({ article }) => {
  return (
    <div>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__author">{article.author}</p>
      <span className="article-card__topic">{article.topic}</span>
      <span className="article-card__date">
        {article.created_at.match(/([0-9]){4}\-([0-9]){2}\-([0-9]){2}/)[0]}
      </span>
      <p className="article-card__comment">Comments {article.comment_count}</p>
    </div>
  );
};

export default Article;
