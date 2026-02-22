import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {

  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={
            getUser() ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            getUser() ? <Navigate to="/dashboard" replace /> : <Register />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            getUser() ? <Dashboard /> : <Navigate to="/" replace />
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            getUser() ? <Profile /> : <Navigate to="/" replace />
          }
        />

        {/* Catch invalid routes */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;