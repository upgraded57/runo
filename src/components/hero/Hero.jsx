import "./hero.css";
import bar from "../../assets/bar.png";
import { useState } from "react";
import UseFetchUserNews from "./../../Hooks/Fetches/usefetchUserNews";

export const Hero = ({ type }) => {
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
        <div className="hero">
          <div
            className="hero-swiper"
            style={{ left: `${(currentHeroScreen - 1) * -100}vw` }}
          >
            {heroData?.map((data, idx) => (
              <div className="hero-screen" key={idx}>
                <div className="cover-img">
                  <img src={data.photo} alt="Cover Photo" loading="lazy" />
                </div>

                <div className="hero__content">
                  <div className="pill">{data.categories}</div>
                  <h1 className="h-300">{data.title}</h1>
                  <div className="hero__content-bottom">
                    <p className="text-body">{data.createdAt}</p>
                    <img src={bar} alt="" />
                    <p className="text-body">{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-controller">
            {heroData?.map((data, idx) => (
              <span
                key={idx}
                className={currentHeroScreen === idx + 1 ? "active" : ""}
                onClick={slideHeroScreen}
                data-idx={idx + 1}
              ></span>
            ))}
          </div>
        </div>
      );
    case "single":
      return (
        <div className="hero single">
          <div className="cover-img">
            <img src={heroData[0].photo} alt="Cover Photo" loading="lazy" />
          </div>

          <div className="hero__content">
            <div className="pill">{heroData[0].categories}</div>
            <h1 className="h-300">{heroData[0].title}</h1>
            <div className="hero__content-bottom">
              <p className="text-body">{heroData[0].desc}</p>
              <p className="text-body text-bold">By {heroData[0].username}</p>
            </div>
          </div>
        </div>
      );
  }
};
