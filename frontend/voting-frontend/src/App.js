import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatorDashboard from "./pages/CreatorDashboard";
import VoterDashboard from "./pages/VoterDashboard";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  const role = user?.role?.trim().toUpperCase();

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        <Route
          path="/creator"
          element={
            role === "CREATOR"
              ? <CreatorDashboard />
              : <Navigate to="/login" />
          }
        />


        <Route
          path="/voter"
          element={
            role === "VOTER"
              ? <VoterDashboard />
              : <Navigate to="/login" />
          }
        />


      </Routes>

    </BrowserRouter>

  );

}

export default App;