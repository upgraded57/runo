import "./updatearticle.css";
import { useContext, useEffect } from "react";
import Userheader from "../../components/header/Userheader";
import { UserContext } from "./../../utils/UserContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosConfig } from "../../utils/AxiosInstance";

export default function UpdateArticle() {
  const baseUrl = import.meta.env.VITE_DEV_URL;
  const user = useContext(UserContext).user;

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Reno - Create Article";
  }, []);

  const location = useLocation();
  const previousData = location.state;

  const updateArticle = async (e) => {
    e.preventDefault();
    const a = Object.fromEntries(new FormData(e.target));

    const article = {
      ...a,
      username: user.username,
    };

    const toastId = toast.loading("Updating article ...");
    await AxiosConfig.put(baseUrl + "/posts/" + previousData._id, article)
      .then(() => {
        toast.success("Article updated", { id: toastId });
        navigate("/user");
      })
      .catch((err) => {
        if (err.response.data) {
          return toast.error(err.response.data, { id: toastId });
        }
        toast.error("Something went wrong", { id: toastId });
        console.log(err.response);
      });
  };

  return (
    <div className="new">
      <Userheader />

      <form onSubmit={updateArticle}>
        <h2 className="h-200">Update article</h2>
        <label htmlFor="title">
          <p className="text-body">Article title</p>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={previousData.title}
            required
          />
        </label>
        <label htmlFor="categories">
          <p className="text-body">Article Category</p>
          <input
            type="text"
            name="categories"
            id="categories"
            defaultValue={previousData.categories}
            required
          />
        </label>
        <label htmlFor="desc">
          <p className="text-body">Article Body</p>
          <textarea
            name="desc"
            id="desc"
            defaultValue={previousData.desc}
            required
          />
        </label>
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}
