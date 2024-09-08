import React from "react";

const image = "https://i.imgur.com/mV8PQxj.gif"; // External image URL

function About() {
  return (
    <div>
      <img src={image} alt="About" />
    </div>
  );
}

export default About;