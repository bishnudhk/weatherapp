import React from "react";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { TbWindmill } from "react-icons/tb";
import Navbar from "../../component/navbar/Navbar";
import './humidity.css';

function Humidity() {
  return (
    <div>
      <Navbar/>
      <div className="mainHumidity">
        <div className="temperature">
          <TbTemperature size={25} className="realFell" />
          Real fell:
          <span className="font-medium ml-1">32°</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <WiHumidity size={18} className="mr-1" />
          Humidity:
          <span className="font-medium ml-1">32°</span>
        </div>

        <div className="flex font-light text-sm items-center justify-center">
          <TbWindmill size={18} className="mr-1" />
          Wind:
          <span className="font-medium ml-1">11km/h</span>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
