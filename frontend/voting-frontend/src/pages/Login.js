import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");



  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await loginUser(loginData);

      const user = response.data;


      if (!user) {

        setMessage("Invalid Email or Password");
        return;

      }


      localStorage.setItem("user", JSON.stringify(user));


      // VERY IMPORTANT FIX
      const role = user.role.trim().toUpperCase();



      if (role === "CREATOR") {

        navigate("/creator");

      }

      else if (role === "VOTER") {

        navigate("/voter");

      }

    }

    catch {

      setMessage("Login Failed");

    }

  };



  return (

    <div className="register-container">

      <div className="register-box">

        <h2>User Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />


          <button type="submit">

            Login

          </button>

        </form>


        {message && <p>{message}</p>}


        <p>

          New user?

          <Link to="/register">

            Register first

          </Link>

        </p>

      </div>

    </div>

  );

};

export default Login;