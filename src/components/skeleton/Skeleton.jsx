import "./skeleton.css";

export default function Skeleton({ type }) {
  const cardCount = [1, 1, 1, 1];
  if (type === "hero") {
    return (
      <div className="skeleton_hero">
        <div className="hero_title"></div>
        <div className="hero_subtitle"></div>
        <div className="hero_subtitle"></div>
        <div className="hero_subtitle_small"></div>
      </div>
    );
  }
  if (type === "blogcards") {
    return (
      <div className="skeleton_blogcards">
        {cardCount.map((_, idx) => (
          <div className="blogcards" key={idx}>
            <div className="blogcards_image"></div>
            <div className="blogcards_subtitle_small"></div>
            <div className="blogcards_title"></div>
            <div className="blogcards_subtitle"></div>
            <div className="blogcards_subtitle"></div>
            <div className="blogcards_subtitle_small"></div>
          </div>
        ))}
      </div>
    );
  }
}
