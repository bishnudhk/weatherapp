import React from "react";
import Navbar from "../../component/navbar/Navbar";

import "./tenDaysWeather.css";
import { useState, useEffect ,useContext} from "react";
import axios from "axios";
import { data } from "autoprefixer";
// import { AppContext } from "./context";
import { useGlobalContext } from "./context";
// import {
  // formatToLocalTime,
  // getFormattedWeatherData,
  // iconUrlFromCode,
// } from "../../services/weatherServices";
// import { createHashHistory } from "history";
// import { data } from "autoprefixer";

const formatFiveWeather = () => {
    
 
  const data = useGlobalContext();
  const {hits,lon} = useGlobalContext();
  
  // const [weather, setWeather] = useState(null);
  // const [query] = useState({ q: "country" });
  // const [units] = useState("metric");

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     await getFormattedWeatherData({ ...query, units }).then((data) => {
  //       setWeather(data);
  //       //  console.log(data);
  //     });
  //   };

  //   fetchWeather();
  // }, [query, units]);
  return (
    <>
    
      {/* {weather && (
        <div className="container">
          <p className="detailsPara">
           
             
            <span className="detailsSpan">{data.city}fdsaf</span>
          </p>
          <div className="tempDetails">
            <div className="imageDetails">
              <img
                src={iconUrlFromCode(weather.icon)}
                alt=""
                className="image"
                width="200px"
                height="200px"
              />
            </div>
            <p className="todaysTemp">
              {formatToLocalTime(weather.dt, weather.timeZone)}
            </p>
          </div>

          <div className="todaysWeathers">
          { data.list ? <h1>{data.list[1].clouds}fds</h1> : null} 
            <h3>Hourly Forecast {data.list}</h3>
            <div className="todaysWeatherCards">
             
              {weather.daily.slice(1, 10).map((item) => (
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
              ))}
            </div>
          </div>
        </div>
      )} */}

{/* <div className="container"> */}
{/* <h2>dfsal</h2> */}
  {
    hits.map((curPost) => {  <Navbar />
      
   return <p className="detailsPara">
         {curPost.temp}  </p>
    })
  }
          
            {/* </div> */}
    </>
  );
};

export default formatFiveWeather;
