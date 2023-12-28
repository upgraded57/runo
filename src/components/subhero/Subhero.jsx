import "./subhero.css";
import heroImg1 from "../../assets/hero5.png";
import bar from "../../assets/bar.png";

export const Subhero = () => {
  return (
    <div className="subhero">
      <div className="subhero-cover">
        <img src={heroImg1} alt="" />
      </div>
      <div className="subhero-content">
        <div className="pill">adventure</div>
        <h1 className="h-300">
          Richird Norton photorealistic rendering as real photos
        </h1>
        <p className="text-body">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <img src={bar} alt="" />
        <p className="text-body">08.02.2021</p>
      </div>
    </div>
  );
};
