import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import {
  formatToLocalTime,
  getFormattedWeatherData,
  iconUrlFromCode,
} from "../../services/weatherServices";
import { useState } from "react";
import { useEffect } from "react";
// import { toast } from "react-toastify";

const Home = () => {
  // {weather:{country}}

  const [query, setQuery] = useState({ q: "nepal" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        //  console.log(data);
      });
    };

    fetchWeather();
  }, [query, units]); //every time we changes new data

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      if (navigator.geolocation) {
        // toast.info("Fetching users location.");
        navigator.geolocation.getCurrentPosition((position) => {
          // toast.success("Location fetched!");
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;

          setQuery({
            lat,
            lon,
          });
        });
      }
    }
  }

    const cities = [
      {
        id: 1,
        title: "London",
      },
      {
        id: 2,
        title: "Sydney",
      },
      {
        id: 3,
        title: "Tokyo",
      },
      {
        id: 4,
        title: "Toronto",
      },
      {
        id: 5,
        title: "Paris",
      },
    ];

    return (
      <>
        <Navbar />
        {/* {weather && ( */}
          <section>
            <div className="searchBox">
              <input
                type="text"
                className="searchBar"
                placeholder="Search..."
                // onChange={e => setQuery(e.target.value)}
                // value={query}
                // onKeyPress={search}
              />
              <IoLocationOutline
                size={25}
                className="location"
                onClick={handleLocationClick}
              />
            </div>
            {weather && (
            <section className="todayWeather">
              <h3>{weather.country}</h3>
              <p className="today">
                {formatToLocalTime(weather.dt, weather.timeZone)}
              </p>

              <div className="todayWeatherResult">
                <div className="todaysIcon">
                  {/* <TiWeatherPartlySunny /> */}
                  <img
                    src={iconUrlFromCode(weather.icon)}
                    alt=""
                    className="image"
                    width="200px"
                    height="200px"
                  />

                  <div className="">
                    <h3>{weather.temp.toFixed()}°</h3>
                    <p>Mostly sunny</p>
                  </div>
                </div>

                <h3>Choose a Country</h3>
                <div className="weatherStats">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      className="weatherStat"
                      onClick={() => setQuery({ q: city.title })}
                    >
                      {city.title}
                    </button>
                  ))}
                  {/* <div className="weatherStat">
                <p>{weather.temp.toFixed()}°</p>
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
              </div> */}
                </div>
              </div>
              <h3>Daily ForeCast</h3>
              {weather.daily.map((item) => (
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
          </div> */}
                  </div>
                </div>
              ))}
            </section>
          
        )}
        </section>
      </>
    );
  };
  

export default Home;
