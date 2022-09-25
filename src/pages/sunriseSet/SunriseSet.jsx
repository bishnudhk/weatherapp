import React from 'react'
import './sunriseSet.css';
import Navbar from '../../component/navbar/Navbar';
import {GiSunrise,GiSunset} from 'react-icons/gi';
import {BiUpArrowAlt} from 'react-icons/bi';
// import {BsArrowDownShort} from 'react-icons/bs';


function SunriseSet() {
  return (
    <>
        <Navbar/>
         <div className='sunriseSets'>
        <GiSunrise/>
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
           <sunrise>    </sunrise>
          </span>
        </p>
        <p className="font-light">|</p>

        <GiSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            sunset
          </span>
        </p>
        <p className="font-light">|</p>

        <BiUpArrowAlt />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">332°</span>
        </p>
        <p className="font-light">|</p>

        {/* <BsArrowDownShort /> */}
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">12°</span>
        </p>
      </div>
        
    </>
  )
}

export default SunriseSet