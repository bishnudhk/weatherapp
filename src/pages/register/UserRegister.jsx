import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserRegister.css";
import * as createUser  from "../../utils/https";

const Register = () => {
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
    // const res = await http.createUser(values);
    e.preventDefault();
    setFormErrors(validatae(formValues));
    setIsSubmit(true);

    navigation({ pathname: "/login" });
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
    <>
      <div className="register">
        <h1 className="registerHeading">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label name="username" className="name">
            Name:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="enter your name"
            // ref={userRef}
            autoComplete="off"
            required
            value={formValues.name}
            onChange={handleChanage}
          />
          <p>{formErrors.email}</p>
          <label name="username" className="username">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="username@gmail.com"
            autoComplete="off"
            required
            value={formValues.email}
            onChange={handleChanage}
          />
          <p>{formErrors.email}</p>

          <label name="password" className="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter a password"
            required
            value={formValues.password}
            onChange={handleChanage}
          />
          <p>{formErrors.password}</p>
          <button className="loginBtn" htmlType="submit">
            Sign Up
          </button>
        </form>
        <p className="para">
          Need an Account?
          <br />
          <span className="line">
            <Link to="/login" className="signIn">
              {" "}
              Sign In
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
