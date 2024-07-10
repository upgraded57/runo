import "./editorcard.css";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";

export const EditorCard = () => {
  const { data: picks, isLoading } = UseFetchUserNews();
  return (
    <>
      <div className="flex">
        {picks?.map((pick, idx) => (
          <div className="editorcard" key={idx}>
            <div className="editorcard-cover">
              <img src={pick.photo} alt="" />
            </div>
            <div className="pill">{pick.categories}</div>
            <div className="editorcard-content">
              <p className="text-body">{pick.createdAt}</p>
              <h2 className="h-200">{pick.title}</h2>
              <p className="text-body">{pick.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
