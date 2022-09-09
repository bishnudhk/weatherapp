import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';

function Navbar() {
 
  return (
    <div className='  w-full mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br
    from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        
        <div >
            <ul className='flex justify-between items-center w-full h-full px-2'>
           
            <input type="text" 
            className='bg-gray-200 px-6 py-2 border border-input rounded-2xl shadow-xl ' 
            placeholder='Search Location ?' />
            <Link to="/">
                <li className='text-white tex-xl cursor-pointer'>Shows Todays Weather</li>
                </Link>
                <Link to="/">
                <li className='text-white tex-xl cursor-pointer'>Shows 10 days weather</li>
                </Link>
                <Link to="/">
                <li className='text-white tex-xl cursor-pointer'>Shows Humidity</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar