import "./user.css";
import { useContext, useEffect } from "react";
import Userheader from "../../components/header/Userheader";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";
import { UserContext } from "./../../utils/UserContext";
import noAvatar from "../../assets/noAvatar.png";
import { Link, useNavigate } from "react-router-dom";
import breakingImg from "../../assets/breakingNews.jpeg";
import toast from "react-hot-toast";
import { AxiosConfig } from "./../../utils/AxiosInstance";

export default function User() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Reno - User";
  }, []);

  const deletePost = async (id) => {
    if (confirm("Post will be deleted. This action is permanent")) {
      const toastId = toast.loading("Deleting post");
      await AxiosConfig.delete("/posts/" + id, { username: user.username })
        .then((res) => {
          toast.success("Post deleted successfully", { id: toastId });
          console.log(res.data);
        })
        .catch((err) => {
          toast.error("Something went wrong. Please retry", { id: toastId });
          console.log(err);
        });
    } else return;
  };

  const editArticle = (news) => {
    navigate(`/articles/${news._id}/update`, { state: news });
  };

  const user = useContext(UserContext).user;

  const { data: userNews, isLoading } = UseFetchUserNews();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="user">
        <Userheader />

        <div className="user_top">
          <div className="user_top_left">
            <img src={user?.avatar || noAvatar} alt="" />
            <h1 className="h-100">{user?.username}</h1>
          </div>
          <Link to="/articles/new">Create new Post</Link>
        </div>

        <div className="user_articles">
          <h2 className="h-200">Your Articles</h2>
          {userNews?.map((news) => (
            <div key={news._id} className="user_article">
              <div className="user_article_left">
                <div className="image">
                  <img src={news.photo || breakingImg} alt="Article Image" />
                </div>
                <div className="article_details">
                  <h3 className="h-100">{news.title}</h3>
                  <p>
                    {news.desc.length < 1000
                      ? news.desc
                      : news.desc.slice(0, 1000) + "..."}
                  </p>
                </div>
              </div>
              <div className="user_article_right">
                <button onClick={() => editArticle(news)}>Edit</button>
                <button onClick={() => deletePost(news._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
