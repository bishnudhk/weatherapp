import React, { useState } from "react";
import {Link,useNavigate} from'react-router-dom'
import openNotification from "../../utils/Notification";
// import { UserAuth } from "../context/AuthContext";
const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   
    const navigate = useNavigate()

    // gonna be a async function 
    const handleSubmit = async (values) =>{
      // e.preventDefault();
      console.log("success",values);
      try{
        // openNotification(res.data.message);
        openNotification("Register success");
        //   await signUp(email,password)
          navigate('/login')
        
      }catch(error){
          console.log(error)

      }
    }
  return (
    <>
      <div className="text-white w-full h-screen">
        
        <div className="bg-balck/60 fixed top-0 left-0 w-full min-h-screen"></div>

        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form onSubmit={handleSubmit}
              className="w-full flex flex-col py-3">
                <input
                onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete=""
                />
                 <input 
                onChange={(e) => setPassword (e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="name"
                  placeholder="name"
                  
                />
                <input 
                onChange={(e) => setPassword (e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-white-600">
                  <p>
                    <input className="mr-2 " type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed {" "}
                  </span>{" "}
                  <Link to='/login'>
                  Sign In
                  </Link> 
                 </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
