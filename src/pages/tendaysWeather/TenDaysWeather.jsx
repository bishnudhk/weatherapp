import React from "react";
import Navbar from "../../component/navbar/Navbar";
import myImg from "./images/download.png";
import "./tenDaysWeather.css";
import { useState,useEffect } from "react";

function TenDaysWeather() {
  const [query, setQuery] = useState({ q: "nepal" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const api =
    "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=e69e3d614cdf38b6358080b7b44bb253";

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(api)
        .then((res) => res.json())
        .then((data) => setWeather(data));
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="main">
      <Navbar />
      <div className="heading">
        <p>TEN DAYS FORECAST </p>
      </div>
      <hr className="horizontalLine" />
      <div className="tenDaysForecast">
        <div className="tenDaysTime">
          <p className="timePara">04:30 PM</p>
          <div className="imageDetails">
            <img
              // src={myImg}
              alt=""
              // className="image"
              // width="200px"
              // height="200px"
            />
            <p className="todaysTemp">34°</p>
          </div>
        </div>

        <div className="tenDaysTime">
          <p className="timePara">04:30 PM</p>
          <div className="imageDetails">
            <img
              // src={myImg}
              alt=""
              className="image"
              // width="200px"
              // height="200px"
            />
            <p className="todaysTemp">34°</p>
          </div>
        </div>

        <div className="tenDaysTime">
          <p className="timePara">04:30 PM</p>
          <div className="imageDetails">
            <img
              // src={myImg}
              alt=""
              className="image"
              // width="200px"
              // height="200px"
            />
            <p className="todaysTemp">34°</p>
          </div>
        </div>

        <div className="tenDaysTime">
          <p className="timePara">04:30 PM</p>
          <div className="imageDetails">
            <img
              // src={myImg}
              alt=""
              className="image"
              // width="200px"
              // height="200px"
            />
            <p className="todaysTemp">34°</p>
          </div>
        </div>

        <div className="tenDaysTime">
          <p className="timePara">04:30 PM</p>
          <div className="imageDetails">
            <img
              // src={myImg}
              alt=""
              className="image"
              // width="200px"
              // height="200px"
            />
            <p className="todaysTemp">34°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenDaysWeather;
