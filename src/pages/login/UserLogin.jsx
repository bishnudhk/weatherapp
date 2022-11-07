import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import './userLogin.css';
import { loginUser } from "../../utils/https";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChanage = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = async (e) => {
    // const formData = {
    //   email,password
    // };
    // try{
    //   await fetch (`${process.env.REACT_APP_BASE_URL}/login`,{
    //     method:'POST',
    //     body:JSON.stringify(formData),
    //     headers:{"Content-Type":"application.json"}
    //   })
    // }catch(error){
    // console.log(error);
    // }
    // const res = await http.loginUser(values);
    e.preventDefault();
    setFormErrors(validatae(formValues));
    setIsSubmit(true);
    
    navigation({ pathname: "/" });
 
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validatae = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "password is requoired!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 character!";
    } else if (values.password > 10) {
      errors.password = "Password cannot exceed more than 10 character!";
    }
    return errors;
  };
  const navigation = useNavigate();
  // const handleLogin = () => {
    // localStorage.setItem("isLoggedIn", JSON.stringify(true));
    // navigation({ pathname: "/" });
  // };

  return (
  
      <div className="login">
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <h1 className="loginHeading">Sign In</h1>

        <form onSubmit={handleSubmit}>
          <label className="username">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="email"
            placeholder="username@gmail.com"
            // ref={userRef}
            autoComplete="off"
            required
            value={formValues.email}
            onChange={handleChanage}
            // onChange={(e) => setUser(e.target.value)}
            // value={user}
          />
          <p>{formErrors.email}</p>

          <label className="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter a password"
            required
            value={formValues.password}
            // onChange={(e) => setPwd(e.target.value)}
            // value={pwd}

            onChange={handleChanage}
          />
          <p>{formErrors.password}</p>
          <button className="loginBtn" htmlType="submit" >
            Sign In
          </button>
        </form>
        <p className="para">
          Need an Account?
          <br />
          <span className="line">
            {/*put router link here*/}
            {/* <a href="#">Sign Up</a> */}
            <Link to="/register" className="signUp"> Sign up</Link>
          </span>
        </p>
      </div>
    
  );
};

export default Login;
