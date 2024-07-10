import "./createarticle.css";
import { useContext, useEffect } from "react";
import Userheader from "../../components/header/Userheader";
import { UserContext } from "./../../utils/UserContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateArticle() {
  const baseUrl = import.meta.env.VITE_DEV_URL;
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Reno - Create Article";
  }, []);

  const createArticle = async (e) => {
    e.preventDefault();
    const article = new FormData(e.target);

    article.append("username", user.username);

    const toastId = toast.loading("Creating article ...");
    await axios
      .post(baseUrl + "/posts", article)
      .then(() => {
        toast.success("Article created", { id: toastId });
        navigate("/user");
      })
      .catch((err) => {
        toast.error("Something went wrong", { id: toastId });
        console.log(err.response);
      });
  };

  const user = useContext(UserContext).user;

  return (
    <div className="new">
      <Userheader />

      <form onSubmit={createArticle}>
        <h2 className="h-200">Create a new article</h2>
        <label htmlFor="title">
          <p className="text-body">Article title</p>
          <input type="text" name="title" id="title" required />
        </label>
        <label htmlFor="categories">
          <p className="text-body">Article Category</p>
          <input type="text" name="categories" id="categories" required />
        </label>
        <label htmlFor="desc">
          <p className="text-body">Article Body</p>
          <textarea name="desc" id="desc" required />
        </label>
        <label htmlFor="photo">
          <p className="text-body">Article Image</p>
          <input type="file" name="photo" id="photo" accept="image/*" />
        </label>
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}
