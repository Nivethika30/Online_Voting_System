import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));


  const handleLogout = () => {

    localStorage.removeItem("user");

    // use replace so back button won't return dashboard
    navigate("/", { replace: true });

  };


  return (

    <div className="navbar">

      <h2 className="navbar-logo">

        VoteSphere

      </h2>


      <div className="navbar-menu">


        <Link to="/dashboard" className="navbar-link">

          Home

        </Link>


        <Link to="/polls" className="navbar-link">

          Public Polls

        </Link>


        {user && (

          <Link to="/profile" className="navbar-link">

            Profile

          </Link>

        )}


        {user ? (

          <button
            className="navbar-button"
            onClick={handleLogout}
          >

            Logout

          </button>

        ) : (

          <button
            className="navbar-button"
            onClick={() => navigate("/", { replace: true })}
          >

            Login

          </button>

        )}


      </div>

    </div>

  );

}

export default Navbar;