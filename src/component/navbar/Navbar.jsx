import { Button } from "antd";
import React from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
// import "./navbar.css";

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
      <div className="navLink">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/location">Search by location</NavLink>
        <NavLink to="/todaysWeather">Show todays weather</NavLink>
        <NavLink to="/tendaysWeather">Show ten days weather</NavLink>
        <NavLink to="/humidity">Show Humidity</NavLink>
        <NavLink to="/sunriseSunset">Show sunrise sunset</NavLink>

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
