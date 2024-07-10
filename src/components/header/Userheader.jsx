import { NavLink, Link, useNavigate } from "react-router-dom";
import "./header.css";

import { FaCircleUser } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { SlEarphones } from "react-icons/sl";

export default function Userheader() {
  const toggleSidebar = () => {
    document.querySelector(".nav-mobile").classList.toggle("active");
  };

  const closeNav = () => {
    document.querySelector(".nav-mobile").classList.remove("active");
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#343a40",
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
        </div>

        <div className="search">
          <span>
            <FaCircleUser />
          </span>
          <span className="burger" onClick={toggleSidebar}>
            <FaBarsStaggered />
          </span>
        </div>
      </header>
      <div className="headerPadding"></div>
    </>
  );
}
