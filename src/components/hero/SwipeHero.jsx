import moment from "moment";
import bar from "../../assets/bar.png";
import "./hero.css";

export default function SwipeHero({ data }) {
  return (
    <div className="hero-screen">
      <div className="cover-img">
        <img src={data.photo} alt="Cover Photo" loading="lazy" />
      </div>

      <div className="hero__content">
        <div className="pill">{data.categories}</div>
        <h1 className="h-300">{data.title}</h1>
        <div className="hero__content-bottom">
          <p className="text-body nowrap">
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
  );
}
