import React from "react";
import Navbar from "../../component/navbar/Navbar";
import {
  formatToLocalTime,
  getFormattedWeatherData,
  iconUrlFromCode,
} from "../../services/weatherServices";
// import getFormattedWeatherData from "../../services/weatherServices";
import myImg from "./images/young-man.png";
import "./todaysWeather.css";
import { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

function TodaysWeather() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "nepal" });
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        //  console.log(data);
      });
    };

    fetchWeather();
  }, [query, units]);
  return (
    <>
      <Navbar />
      {weather && (
        <div className="container">
          <div className="tempDetails">
            <p className="detailsPara">{weather.details}</p>
          </div>
          <div className="imageDetails">
            <img
              src={iconUrlFromCode(weather.icon)}
              alt=""
              className="image"
              width="200px"
              height="200px"
            />
            <p className="todaysTemp">
              {formatToLocalTime(weather.dt, weather.timeZone)}
            </p>
          </div>
           <h3>Hourly Forecast</h3>
          {weather.hourly.map((item) => (
            <div className="todaysWeathers">
             

              <div className="todaysWeatherCards">
                <div className="todaysWeatherDetails">
                  <p>{item.title}</p>
                  <img
                    src={iconUrlFromCode(item.icon)}
                    alt=""
                    className="image"
                    width="200px"
                    height="200px"
                  />
                  <p>{item.temp.toFixed()}°</p>
                </div>
                {/* <div className="todaysWeatherDetails">
                <p> </p>
                <TiWeatherPartlySunny />
              </div>
              <div className="todaysWeatherDetails">
                <p>sun</p>
                <TiWeatherPartlySunny />
              </div>

              <div className="todaysWeatherDetails">
                <p>sun</p>
                <TiWeatherPartlySunny />
              </div>
              <div className="todaysWeatherDetails">
                <p>sun</p>
                <TiWeatherPartlySunny />
              </div>
              <div className="todaysWeatherDetails">
                <p>sun</p>
                <TiWeatherPartlySunny />
              </div>
              <div className="todaysWeatherDetails">
                <p>sun</p>
                <TiWeatherPartlySunny />
              </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TodaysWeather;
