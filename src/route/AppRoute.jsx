
import { useEffect } from 'react';
import{Routes,Route,Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/UserLogin';
import Signup from '../pages/register/UserRegister';
// import About from '../pages/about/About';

// import AddVaccineAppointment from '../pages/AddVaccineAppointment';
// import Home from '../pages/home/Home';



const AppRoutes = () => {

  const navigation = useNavigate();
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() =>{
    if(isLoggedIn !== "true"){
      navigation({pathname:"/login"});
    }
  },[isLoggedIn])
  return (
       
    
    
    <Routes> 
      {/* <Route path=''></Route> */}
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/register" element={<Signup/>}></Route>
     <Route path='/' element={<Navbar/>}></Route>
     <Route path='/' element={<Home/>}></Route>
       {/*
      <Route path='/about' element={<About/>}></Route>
      <Route path='/addPatient' element={<AddPatient/>}></Route>
      <Route path='/patient' element={<Patient/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/addServices' element={<AddServices/>} ></Route>
      <Route path='/vaccineAppointment' element={<VaccineAppointment/>} ></Route>
      <Route path='/addvaccineAppointment' element={<AddVaccineAppointment/>} ></Route> */}
      
      <Route path='*' element={<h1>Page Not found</h1>}></Route>
    </Routes>
    
  )
}

export default AppRoutes