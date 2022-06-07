const Article = ({ article }) => {
  return (
    <div>
      <p className="article-card__topic">{article.topic}</p>
      <span className="article-card__date">
        {article.created_at.match(/([0-9]){4}\-([0-9]){2}\-([0-9]){2}/)[0]}
      </span>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__author">by {article.author}</p>

      <p className="article-card__comment">
        comments : {article.comment_count}
      </p>
    </div>
  );
};

export default Article;
