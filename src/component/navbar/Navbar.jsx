import { Button } from "antd";
import React from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./navbar.css";
import TimeAndLocation from "../timeLocation/TimeAndLocation";

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
        <NavLink to="/location" className="location">Search by location</NavLink>
        <NavLink to="/todaysWeather" className="todaysWeather" >Show todays weather</NavLink>
        <NavLink to="/ten days Weather"className="tenDaysWeather">Show ten days weather</NavLink>
        <NavLink to="/humidity" className="humidity">Show Humidity</NavLink>
        <NavLink to="/sunriseSunset"className="sunriseSunset">Show sunrise sunset</NavLink>
          <SearchBar/>
          <TimeAndLocation/>
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
