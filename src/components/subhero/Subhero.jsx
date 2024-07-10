import "./subhero.css";
import bar from "../../assets/bar.png";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";
import moment from "moment";

export const Subhero = ({ small }) => {
  const { data: heroData, isLoading } = UseFetchUserNews();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {heroData && (
        <div className="subhero" style={{ height: small ? "300px" : "" }}>
          <div className="subhero-cover">
            <img src={heroData[0]?.photo} alt="" />
          </div>
          <div className="subhero-content">
            <div className="pill">{heroData[0]?.categories}</div>
            <h1 className={small ? "h-200" : "h-300"}>{heroData[0]?.title}</h1>
            <p className="text-body">
              {heroData[0]?.desc < 1000
                ? heroData[0]?.desc
                : heroData[0]?.desc?.slice(0, 1000) + "..."}
            </p>
            <img src={bar} alt="" />
            <p className="text-body">
              {moment(heroData[0]?.createdAt).format("MMMM Do YYYY")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
