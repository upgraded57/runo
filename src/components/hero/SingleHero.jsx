import "./hero.css";

export default function SingleHero({ article }) {
  return (
    <div className="hero single">
      <div className="cover-img">
        <img src={article?.photo} alt="Cover Photo" loading="lazy" />
      </div>

      <div className="hero__content">
        <div className="pill">{article?.categories}</div>
        <h1 className="h-300">{article?.title}</h1>
        <div className="hero__content-bottom">
          <p className="text-body">
            {article?.desc.length < 200
              ? article.desc
              : article.desc.slice(0, 200) + "..."}
          </p>
          <p className="text-body text-bold">By {article?.username}</p>
        </div>
      </div>
    </div>
  );
}
