import "./editorcard.css";
import blogImg1 from "../../assets/Blog Image(1).png";
import blogImg2 from "../../assets/Blog Image(2).png";
import blogImg3 from "../../assets/Blog Image(4).png";

const picks = [
  {
    idx: 1,
    tag: "adventure",
    date: "08.08.2021",
    headline: "Dream destinations to visit this year in Paris",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg1,
  },
  {
    idx: 2,
    tag: "travel",
    date: "08.08.2021",
    headline: "Breathtaking first-person photos around Europe",
    desc: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg2,
  },
  {
    idx: 3,
    tag: "technology",
    date: "08.08.2021",
    headline: "What collectors need to know about authenticity",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg3,
  },
];

export const EditorCard = () => {
  return (
    <>
      <div className="flex">
        {picks.map((pick) => (
          <div className="editorcard" key={pick.idx}>
            <div className="editorcard-cover">
              <img src={pick.coverImg} alt="" />
            </div>
            <div className="pill">{pick.tag}</div>
            <div className="editorcard-content">
              <p className="text-body">08.02.2021</p>
              <h2 className="h-200">
                Richird Norton photorealistic rendering as real photos
              </h2>
              <p className="text-body">
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
