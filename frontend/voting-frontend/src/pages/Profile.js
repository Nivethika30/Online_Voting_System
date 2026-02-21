import React, { useEffect, useState } from "react";

function Profile() {

const [user, setUser] = useState(null);

useEffect(() => {

const storedUser = JSON.parse(localStorage.getItem("user"));

setUser(storedUser);

}, []);

if (!user) {

return <h2>Please Login</h2>;

}

return (

<div style={{ padding: "20px" }}>

  <h1>User Profile</h1>

  <hr />

  <p><b>Name:</b> {user.name}</p>

  <p><b>Email:</b> {user.email}</p>

  <p><b>Role:</b> {user.role}</p>


  {user.role === "CREATOR" && (

    <div>

      <h3>Created Polls</h3>

      <p>No polls created yet</p>

    </div>

  )}


  {user.role === "VOTER" && (

    <div>

      <h3>Participated Polls</h3>

      <p>No polls participated yet</p>

    </div>

  )}

</div>

);

}

export default Profile;
