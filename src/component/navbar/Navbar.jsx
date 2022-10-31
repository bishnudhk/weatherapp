import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigation({ pathname: "/login" });
  };
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h1 className="logo">Weather Forecasting</h1>
        </Link>
      </div>

      <div className="navLinks">
        <NavLink to="/" className=""></NavLink>
        <NavLink to="/todaysWeather" className="todaysWeather">
          Show Todays Weather
        </NavLink>
        <NavLink to="/tenDaysWeather" className="tenDaysWeather">
          Show Ten Days weather
        </NavLink>
        <NavLink to="/humidity" className="humidity">
          Show Humidity
        </NavLink>
        <NavLink to="/sunriseSunset" className="sunriseSunset">
          Show Sunrise Sunset
        </NavLink>
      </div>

      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
