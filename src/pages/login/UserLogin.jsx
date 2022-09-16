import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import openNotification from "../../utils/Notification";
// import { UserAuth } from "../context/AuthContext";

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

//   const {user,logIn} = UserAuth()
  const navigate = useNavigate()

  // const reset(){

  // }

  // gonna be a async function 
  const handleSubmit = async (values) =>{
    console.log("success:", values);
    // e.preventDefault();
    try{
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
      // openNotification("login successfull");
      
        // await logIn(email,password)
        navigate('/')
      
    }catch(error){
        openNotification("password or email doesnot match ");
        setError(error.message);

    }
  }


  return (
    <div className="text-white w-ful h-full">
      <div className="bg-black/60 fixed top-0 left-0 w-full min-h-screen "></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[660px] mx-auto bg-black">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="p-3 bg-red-400">{error}</p> : null}

            <form onSubmit={handleSubmit} id="myForm"
            className="w-full flex flex-col py-3">
              <input onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input onChange={(e)=> setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password "
              />

              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p className="mr-2">
                  <input type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to weatherapp?</span>
                <Link to="/register">Sign Up</Link>
              </p>

              <p></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
