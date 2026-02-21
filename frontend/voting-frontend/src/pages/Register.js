import React, { useState } from "react";
import "../styles/Register.css";
import { registerUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "VOTER"
  });

  const [message, setMessage] = useState("");



  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await registerUser(user);

      const msg = response.data;

      setMessage(msg);


      // redirect ONLY if success
      if(msg === "User Registered Successfully"){

        navigate("/login");

      }

    }
    catch(error){

      setMessage("Registration Failed");

    }

  };



  return (

    <div className="register-container">

      <div className="register-box">

        <h2>User Register</h2>


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
            required
          />


          <select
            name="role"
            value={user.role}
            onChange={handleChange}
          >

            <option value="VOTER">

              Voter

            </option>


            <option value="CREATOR">

              Creator

            </option>

          </select>



          <button type="submit">

            Register

          </button>


        </form>



        {message &&

          <p>

            {message}

          </p>

        }



        <p>

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>


      </div>

    </div>

  );

};

export default Register;