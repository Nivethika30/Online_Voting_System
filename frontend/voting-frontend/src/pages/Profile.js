import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedUser) {
      return;
    }

    fetch(`http://localhost:8080/api/profile/${loggedUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Profile data:", data);
        setUser(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });

  }, []);



  if (!user) {
    return (
      <>
        <Navbar />
        <h2>Loading...</h2>
      </>
    );
  }



  return (

    <>
    
      <Navbar />

      <div>

        <h2>My Profile</h2>

        <p><b>Name:</b> {user.name}</p>

        <p><b>Email:</b> {user.email}</p>

        <p><b>Role:</b> {user.role}</p>

      </div>

    </>

  );

};

export default Profile;