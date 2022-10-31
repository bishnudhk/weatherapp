import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import getFormattedWeatherData from "../../services/weatherServices";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  // {weather:{country}}

  const [query,setQuery] = useState({q:'nepal'})
  const [units,setUnits] = useState ('metric')
  const [weather,setWeather] = useState(null);

  useEffect(() =>{
    const fetchWeather = async () => {
     await getFormattedWeatherData({...query,units}).
     then(data =>{
     setWeather(data);
    //  console.log(data);
     });
    };
  
    fetchWeather();
  },[query,units]) //every time we changes new data 
  

  return (
    <>
      <Navbar />
      
      <div className="searchBox">
        <input
          type="text"
          className="searchBar"
          placeholder="Search..."
          // onChange={e => setQuery(e.target.value)}
          // value={query}
          // onKeyPress={search}
        />
      </div>


      {weather && 
      <section className="todayWeather">
      <h3>{weather.country}</h3>
      <p className="today">Monday 28</p>

      <div className="todayWeatherResult">
        <div className="todaysIcon">
          <TiWeatherPartlySunny />

          <div className="">
            <h3>21 deg</h3>
            <p>Mostly sunny</p>
          </div>
        </div>

        <div className="weatherStats">
          <div className="weatherStat">
            <p>23 deg</p>
            <p>High</p>
          </div>
          <div className="weatherStat">
            <p>23 deg</p>
            <p>wind</p>
          </div>
          <div className="weatherStat">
            <p>23 deg</p>
            <p>Sunrise</p>
          </div>
          <div className="weatherStat">
            <p>23 deg</p>
            <p>Sunrise</p>
          </div>
          <div className="weatherStat">
            <p>23 deg</p>
            <p>Sunrise</p>
          </div>
          <div className="weatherStat">
            <p>23 deg</p>
            <p>Sunrise</p>
          </div>
        </div>
      </div>

      <div className="todaysWeathers">
        <h3>todays Weather</h3>

        <div className="todaysWeatherCards">
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
          </div>
          <div className="todaysWeatherDetails">
            <p>sun</p>
            <TiWeatherPartlySunny />
          </div>
          <div className="todaysWeatherDetails">
            <p>sun</p>
            <TiWeatherPartlySunny />
          </div>
        </div>
      </div>
    </section>
      }
      
    </>
  );
};

export default Home;
