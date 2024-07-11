import { NavLink, Link, useNavigate } from "react-router-dom";
import "./header.css";

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaBehanceSquare,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { SlEarphones } from "react-icons/sl";
import { useState } from "react";

export default function Header({ withPadding, isLoading }) {
  const navigate = useNavigate();
  const toggleSidebar = () => {
    document.querySelector(".nav-mobile").classList.toggle("active");
  };

  const [searchQuery, setSearchQuery] = useState("");

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  const closeNav = () => {
    document.querySelector(".nav-mobile").classList.remove("active");
  };

  return (
    <>
      <header
        style={{
          backgroundColor: withPadding ? "#343a40" : isLoading ? "#343a40" : "",
        }}
      >
        <div className="logo">
          <Link to="/">RUNO</Link>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <div className="nav-mobile">
          <NavLink to="/" onClick={closeNav}>
            <span>
              <RiHome2Line />
            </span>
            Home
          </NavLink>

          <NavLink to="/articles" onClick={closeNav}>
            <span>
              <HiOutlineDocumentDuplicate />
            </span>
            Articles
          </NavLink>
          <NavLink to="/about" onClick={closeNav}>
            <span>
              <GoQuestion />
            </span>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeNav}>
            <span>
              <SlEarphones />
            </span>
            Contact Us
          </NavLink>

          <div className="social-mobile" onClick={closeNav}>
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
              <FaLinkedin />
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
            <FaLinkedin />
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
          <form onSubmit={search}>
            <div className="icon">
              <FiSearch />
            </div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </header>
      {withPadding && <div className="headerPadding"></div>}
    </>
  );
}
