import { NavLink, Link } from "react-router-dom";
import "./header.css";

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaBehanceSquare,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { SlEarphones } from "react-icons/sl";

export default function Header() {
  const toggleSidebar = () => {
    document.querySelector(".nav-mobile").classList.toggle("active");
  };
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">RUNO</Link>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <div className="nav-mobile">
          <NavLink
            to="/"
            onClick={() =>
              document.querySelector(".nav-mobile").classList.remove("active")
            }
          >
            <span>
              <RiHome2Line />
            </span>
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() =>
              document.querySelector(".nav-mobile").classList.remove("active")
            }
          >
            <span>
              <GoQuestion />
            </span>
            About
          </NavLink>
          <NavLink
            to="/articles"
            onClick={() =>
              document.querySelector(".nav-mobile").classList.remove("active")
            }
          >
            <span>
              <HiOutlineDocumentDuplicate />
            </span>
            Articles
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() =>
              document.querySelector(".nav-mobile").classList.remove("active")
            }
          >
            <span>
              <SlEarphones />
            </span>
            Contact Us
          </NavLink>

          <div
            className="social-mobile"
            onClick={() =>
              document.querySelector(".nav-mobile").classList.remove("active")
            }
          >
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

        <div className="social">
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

        <div className="search">
          <span
            onClick={() =>
              document.querySelector(".search-box").classList.toggle("active")
            }
          >
            <FiSearch />
          </span>
          <span className="burger" onClick={toggleSidebar}>
            <FaBarsStaggered />
          </span>
        </div>

        <div className="search-box">
          <form>
            <div className="icon">
              <FiSearch />
            </div>
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </header>
    </>
  );
}
