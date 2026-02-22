import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ VERY IMPORTANT FIX
  if (!user) {

    window.location.href = "/login";

    return null;

  }

  return (

    <div>

      <Navbar />

      <div style={{ padding: "40px" }}>

        <h1>

          Welcome, {user.name}

        </h1>

        <p>

          VoteSphere is a secure and transparent online voting platform.
          You can participate in polls, view results, and create your own polls.

        </p>


        {/* Show ONLY for Creator */}

        {user.role === "CREATOR" && (

          <button>

            Create Poll

          </button>

        )}

      </div>

    </div>

  );

};

export default Dashboard;