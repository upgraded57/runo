import "./hero.css";
import { useState } from "react";
import Skeleton from "../skeleton/Skeleton";
import SwipeHero from "./SwipeHero";
import SingleHero from "./SingleHero";

export const Hero = ({ heroData, isLoading, type, article }) => {
  const [currentHeroScreen, setCurrentHeroScreen] = useState(1);
  const slideHeroScreen = (e) => {
    setCurrentHeroScreen(e.target.dataset.idx);
    document
      .querySelectorAll(".hero-controller span")
      .forEach((span) => span.classList.remove("active"));

    e.target.classList.add("active");
  };

  const reversedArray = heroData?.slice(-3).reverse();

  switch (type) {
    case "main":
      return (
        <>
          {isLoading && <Skeleton type="hero" />}
          <div className="hero">
            <div
              className="hero-swiper"
              style={{ left: `${(currentHeroScreen - 1) * -100}vw` }}
            >
              {heroData &&
                reversedArray?.map((data, idx) => (
                  <SwipeHero key={idx} data={data} />
                ))}
            </div>

            <div className="hero-controller">
              {heroData &&
                heroData
                  ?.slice(0, 3)
                  ?.map((_, idx) => (
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
          {isLoading && <Skeleton type="hero" />}
          {article && <SingleHero article={article} />}
        </>
      );
  }
};
