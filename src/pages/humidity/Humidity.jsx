import React from "react";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { TbWindmill } from "react-icons/tb";
import Navbar from "../../component/navbar/Navbar";
import "./humidity.css";
import { useState, useEffect } from "react";
import { getFormattedWeatherData } from "../../services/weatherServices";

function Humidity() {
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
    <div>
      <Navbar />
      {weather && (
        <div className="mainHumidity">
          <div className="temperature">
            <TbTemperature size={25} className="realFell" />
            Realfell: 
            <span className="font-medium ml-1">{weather.feels_like.toFixed()}°</span>
          </div>
          <div className="humidity">
            <WiHumidity size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{weather.humidity}%</span>
          </div>

          <div className="wind">
            <TbWindmill size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{weather.speed}km/h</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Humidity;
