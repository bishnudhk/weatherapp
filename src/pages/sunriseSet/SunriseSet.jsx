import React from "react";
import "./sunriseSet.css";
import Navbar from "../../component/navbar/Navbar";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { useState, useEffect } from "react";
import { formatToLocalTime, getFormattedWeatherData } from "../../services/weatherServices";

function SunriseSet() {
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
        <div className="sunriseSets">
          <GiSunrise />
          <p className="font-light">
            Rise: <span className="sunrise">{formatToLocalTime(weather.sunrise,weather.timezone,'hh:mm a')}</span>
          </p>
          <p className="font-light">|</p>

          <GiSunset />
          <p className="font-light">
            Set: <span className="sunSet">{formatToLocalTime(weather.sunset,weather.timezone,'hh:mm a')}</span>
          </p>
          <p className="font-light">|</p>

          <BiUpArrowAlt />
          <p className="high">
            High:
            <span className="">{weather.temp_max.toFixed()}°</span>
          </p>
          <p className="font-light">|</p>
          <BsArrowDownShort />

          <p className="low">
            Low:
            <span className="lowTemp">{weather.temp_min.toFixed()}°</span>
          </p>
        </div>
      )}
    </>
  );
}

export default SunriseSet;
