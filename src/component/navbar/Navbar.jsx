
import React from "react";
import { Button } from "antd";
import { NavLink, useNavigate,Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./navbar.css";
import TimeAndLocation from "../timeLocation/TimeAndLocation";
import TemperatureAndDetails from "../temperatureAndDetails/TemperatureAndDetails";

const Navbar = () => {

  const navigation = useNavigate();

  const handleLogout = () => {
  
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigation({ pathname: "/login" });
  };
  return (
    <div className="navbar">
        <div >
          <Link to="/">
            <h1 className="logo">Weather Forecasting</h1>
          </Link>
        </div>
      <div className="navLink">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/location" className="location">SearchByLocation</NavLink>
        <NavLink to="/todaysWeather" className="todaysWeather" >ShowTodaysWeather</NavLink>
        <NavLink to="/ten days Weather"className="tenDaysWeather">ShowTenDays weather</NavLink>
        <NavLink to="/humidity" className="humidity">ShowHumidity</NavLink>
        <NavLink to="/sunriseSunset"className="sunriseSunset">ShowSunriseSunset</NavLink>
          <SearchBar/>
          <TimeAndLocation/>
          <TemperatureAndDetails/>
      </div>
      {/* <div className='logoutBtn'> */}
      <Button className="logoutBtn" onClick={handleLogout}>
        Logout
      </Button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
