import "./list.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

export default function List({ news }) {
  const navigate = useNavigate();
  return (
    <div className="list" onClick={() => navigate("/articles/" + news._id)}>
      <div className="list_img">
        <img src={news.photo} alt="" />
      </div>

      <div className="list_content">
        <h2 className="h-200">{news.title}</h2>
        <p className="text-body">{news.desc}</p>
        <div className="views">
          <span>
            <FaRegEye />
            <p className="text-body">21</p>
          </span>
          <span>
            <BsChatDots />
            <p className="text-body">7</p>
          </span>
          <p className="text-body">4 mins read</p>
        </div>
      </div>
    </div>
  );
}
