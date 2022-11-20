import React, { useState } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import Admin from './Admin'
const Login = () => {
  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(true)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };
  function loginUser() {
    console.log("post");
    var bodyFormData = new FormData();
    bodyFormData.append('username', user.email);
    bodyFormData.append('password', user.password);
    var myHeader = new Headers();
    myHeader.append('content-type', 'multipart/form-data');
    axios({
      method: "post",
      url: "/login",
      data: bodyFormData,
      headers: myHeader,
    })
    .then((response)=>{
      console.log(response);
      if(response.status === 200){
        // setSuccess(true)
        console.log("working");
      }
    });
  } 

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    loginUser();
  };

  return (
      
            <div className='App'>
            <form>
              <h1>Login</h1>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                value={user.email}
              />
              <p className={basestyle.error}>{formErrors.email}</p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={changeHandler}
                value={user.password}
              />
              <p className={basestyle.error}>{formErrors.password}</p>
              <button className={basestyle.button_common} onClick={loginHandler}>
                Login
              </button>
            </form>
          </div>
  );
};
export default Login;
