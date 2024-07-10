import "./hero.css";
import bar from "../../assets/bar.png";
import { useState } from "react";
import UseFetchUserNews from "./../../Hooks/Fetches/usefetchUserNews";
import moment from "moment";

export const Hero = ({ type, article }) => {
  const { data: heroData, isLoading } = UseFetchUserNews();
  const [currentHeroScreen, setCurrentHeroScreen] = useState(1);
  const slideHeroScreen = (e) => {
    setCurrentHeroScreen(e.target.dataset.idx);
    document
      .querySelectorAll(".hero-controller span")
      .forEach((span) => span.classList.remove("active"));

    e.target.classList.add("active");
  };

  switch (type) {
    case "main":
      return (
        <>
          {isLoading && <p>Loading ...</p>}
          <div className="hero">
            <div
              className="hero-swiper"
              style={{ left: `${(currentHeroScreen - 1) * -100}vw` }}
            >
              {heroData &&
                heroData?.slice(0, 3)?.map((data, idx) => (
                  <div className="hero-screen" key={idx}>
                    <div className="cover-img">
                      <img src={data.photo} alt="Cover Photo" loading="lazy" />
                    </div>

                    <div className="hero__content">
                      <div className="pill">{data.categories}</div>
                      <h1 className="h-300">{data.title}</h1>
                      <div className="hero__content-bottom">
                        <p className="text-body">
                          {moment(data.createdAt).format("MMMM Do YYYY")}
                        </p>
                        <img src={bar} alt="" />
                        <p className="text-body">
                          {data.desc.length < 200
                            ? data.desc
                            : data.desc.slice(0, 200) + "..."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="hero-controller">
              {heroData &&
                heroData
                  ?.slice(0, 3)
                  ?.map((data, idx) => (
                    <span
                      key={idx}
                      className={currentHeroScreen === idx + 1 ? "active" : ""}
                      onClick={slideHeroScreen}
                      data-idx={idx + 1}
                    ></span>
                  ))}
            </div>
          </div>
        </>
      );
    case "single":
      return (
        <>
          {isLoading && <p>Loading ...</p>}
          {article && (
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
          )}
        </>
      );
  }
};
