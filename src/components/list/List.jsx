import "./list.css";
import listImg from "../../assets/blog Image.png";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

export default function List() {
  const navigate = useNavigate();
  return (
    <div className="list" onClick={() => navigate("/articles/sgsg")}>
      <div className="list_img">
        <img src={listImg} alt="" />
      </div>

      <div className="list_content">
        <h2 className="h-200">
          Richird Norton photorealistic rendering as real photos
        </h2>
        <p className="text-body">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
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
