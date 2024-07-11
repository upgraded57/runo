import moment from "moment";
import "./blogcard.css";
import { useNavigate } from "react-router-dom";

export default function Card({ blog }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="blogCard"
        onClick={() => navigate("/articles/" + blog._id)}
      >
        <div className="cover">
          <img src={blog.photo} alt="" loading="lazy" />
          <div className="shade"></div>
          <div className="pill">{blog.categories}</div>
        </div>
        <p className="text-body">
          {moment(blog.createdAt).format("MMMM Do YYYY")}
        </p>
        <h2 className="h-200">
          {blog.title.length < 20
            ? blog.title
            : blog.title.slice(0, 20) + "..."}
        </h2>
        <p className="text-body">
          {blog.desc.length < 60 ? blog.desc : blog.desc.slice(0, 60) + "..."}
        </p>
      </div>
    </>
  );
}
