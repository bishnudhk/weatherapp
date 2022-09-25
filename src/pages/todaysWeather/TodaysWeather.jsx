import React from "react";
import Navbar from "../../component/navbar/Navbar";
import myImg from "./images/young-man.png";
import "./todaysWeather.css";

function TodaysWeather() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="tempDetails">
          <p>Cloudy or whatever</p>
        </div>
        <div className="imageDetails">
          <img
            src={myImg}
            alt=""
            className="image"
            width="200px"
            height="200px"
          />
          <p className="todaysTemp">34°</p>
        </div>
      </div>
    </>
  );
}

export default TodaysWeather;
