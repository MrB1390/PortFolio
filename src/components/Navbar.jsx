import React from "react";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import "./css/nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a class="navbar-brand" style={{ color: "white" }} href="#">
            BS
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  <AiOutlineHome
                    style={{ marginBottom: "2px", marginRight: "5px" }}
                  />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <AiOutlineUser
                    style={{ marginBottom: "2px", marginRight: "5px" }}
                  />
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px", marginRight: "5px" }}
                  />
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/resume' className="nav-link">
                  <AiFillStar
                    style={{ marginBottom: "2px", marginRight: "5px" }}
                  />
                  Resume
                </Link>
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <ImBlog style={{marginBottom: '2px',marginRight: '5px'}}/>
                    Blogs
                  </a>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
