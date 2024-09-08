import React from "react";

const name = "YourName"; // Replace with your actual value
const city = "YourCity"; // Replace with your actual value

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
}

export default Home;