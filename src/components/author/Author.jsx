import "./author.css";
import authorImg from "../../assets/author2.png";

import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaBehanceSquare,
} from "react-icons/fa";

export const Author = () => {
  return (
    <div className="author">
      <div className="author-left">
        <div className="author-img">
          <img src={authorImg} alt="" loading="lazy" />
        </div>
        <span>
          <p className="text-bold">By Jennifer Lawrence</p>
          <p>Thinker & Designer</p>
        </span>
      </div>
      <div className="author-social">
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaPinterest />
        </span>
        <span>
          <FaBehanceSquare />
        </span>
      </div>
    </div>
  );
};
