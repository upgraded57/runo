import "./hero.css";
import heroImg1 from "../../assets/hero1.png";
import heroImg2 from "../../assets/hero2.png";
import heroImg3 from "../../assets/hero4.png";
import bar from "../../assets/bar.png";
import { useState } from "react";

const heroData = [
  {
    idx: "1",
    tag: "adventure",
    headLine: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    coverImg: heroImg1,
    desc: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  },
  {
    idx: "2",
    tag: "adventure",
    headLine: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    coverImg: heroImg2,
    desc: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  },
  {
    idx: "3",
    tag: "adventure",
    headLine: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    coverImg: heroImg3,
    desc: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  },
];

export const Hero = ({ type }) => {
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
            {heroData?.map((data) => (
              <div className="hero-screen" key={data.idx}>
                <div className="cover-img">
                  <img src={data.coverImg} alt="Cover Photo" loading="lazy" />
                </div>

                <div className="hero__content">
                  <div className="pill">{data.tag}</div>
                  <h1 className="h-300">{data.headLine}</h1>
                  <div className="hero__content-bottom">
                    <p className="text-body">{data.date}</p>
                    <img src={bar} alt="" />
                    <p className="text-body">{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-controller">
            <span
              className="active"
              onClick={slideHeroScreen}
              data-idx="1"
            ></span>
            <span onClick={slideHeroScreen} data-idx="2"></span>
            <span onClick={slideHeroScreen} data-idx="3"></span>
          </div>
        </div>
      );
    case "single":
      return (
        <div className="hero single">
          <div className="cover-img">
            <img src={heroData[0].coverImg} alt="Cover Photo" loading="lazy" />
          </div>

          <div className="hero__content">
            <div className="pill">{heroData[0].tag}</div>
            <h1 className="h-300">{heroData[0].headLine}</h1>
            <div className="hero__content-bottom">
              <p className="text-body">{heroData[0].desc}</p>
              <p className="text-body text-bold">By Jennifer Lawrence</p>
            </div>
          </div>
        </div>
      );
  }
};
