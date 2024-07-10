import "./author.css";

import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaBehanceSquare,
} from "react-icons/fa";

import noAvatar from "../../assets/noAvatar.png";

export const Author = ({ article }) => {
  return (
    <div className="author">
      <div className="author-left">
        <div className="author-img">
          <img src={noAvatar} alt="" loading="lazy" />
        </div>
        <span>
          <p className="text-bold">By {article?.username}</p>
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
