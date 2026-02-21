import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function VoterDashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));


  return (

    <div>

      <Navbar />


      <h2>

        Welcome, {user?.name}

      </h2>


      <button onClick={() => navigate("/polls")}>

        View Public Polls

      </button>


      <button onClick={() => navigate("/profile")}>

        Profile

      </button>


    </div>

  );

}

export default VoterDashboard;