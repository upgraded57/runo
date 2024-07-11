import "./editorcard.css";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Skeleton from "../skeleton/Skeleton";

export const EditorCard = () => {
  const navigate = useNavigate();
  const { data: picks, isLoading } = UseFetchUserNews();

  if (isLoading) return <Skeleton type="blogcards" />;
  return (
    <>
      <div className="flex">
        {picks &&
          picks?.map((pick, idx) => (
            <div
              className="editorcard"
              key={idx}
              onClick={() => navigate("/articles/" + pick._id)}
            >
              <div className="editorcard-cover">
                <img src={pick.photo} alt="" />
              </div>
              <div className="pill">{pick.categories}</div>
              <div className="editorcard-content">
                <p className="text-body">
                  {moment(pick.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
                <h2 className="h-200">{pick.title}</h2>
                <p className="text-body">
                  {pick.desc.length < 100
                    ? pick.desc
                    : pick.desc.slice(0, 100) + "..."}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
