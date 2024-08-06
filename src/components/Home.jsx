import React from "react";
import fsd from "../assets/backend_online_2.jpg";
import fsd2 from "../assets/home-main.svg";
import "./css/home.css";

const Home = () => {
  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col-md-7 d-flex flex-column justify-content-center content">
            <h1>
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="py-2">I'm Balasivam</h1>
            <h1 className="course">MERN STACK DEVELOPER</h1>
          </div>
          <div className="col-md-5 ">
            <img
              src={fsd2}
              alt="Mern Stack"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                position: "relative",
                top: "6rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
