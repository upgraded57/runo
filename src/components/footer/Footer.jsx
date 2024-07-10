import { useNavigate } from "react-router-dom";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaBehanceSquare,
} from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="subfooter">
        <div className="contact">
          <h2 className="h-200">Contact the Publisher</h2>
          <p className="text-body">shokunbiupgraded@gmail.com</p>
          <p className="text-body">+234 902 753 8937</p>
          <p className="text-body">shokunbiupgraded@gmail.com</p>
          <p className="text-body">+234 902 753 8937</p>
        </div>
        <div className="explore">
          <h2 className="h-200">Explorate</h2>
          <p className="text-body">About</p>
          <p className="text-body">Partners</p>
          <p className="text-body">Job Opportunities</p>
          <p className="text-body">Advertise</p>
          <p className="text-body" onClick={() => navigate("/auth")}>
            Editor Login
          </p>
        </div>
        <div className="headquarter">
          <h2 className="h-200">Headquarter</h2>
          <p className="text-body">
            18, Taiwo Street, <br />
            Ajegunle Alakuko <br />
            Lagos, Nigeria
          </p>
        </div>
        <div className="connections">
          <h2 className="h-200">Connections</h2>
          <div className="icons">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaPinterest />
            </span>
            <span>
              <FaBehanceSquare />
            </span>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-body">2021 | RUNO Publisher Studio</p>
        <p className="text-body">Subscribe Now</p>
      </footer>
    </>
  );
}
