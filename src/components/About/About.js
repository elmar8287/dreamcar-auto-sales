import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <h2>About us</h2>
        <p>Here at Dreamcar, we specialized in diesel cargo vans.
          We carefully select them for you!
          Every van goes through extensive mechanical preparations and service at our partner
          <a className="about-href" href="https://www.google.com/maps/place/Sprinter+Repair+and+Parts/@47.7709884,-122.148323,15z/data=!4m5!3m4!1s0x0:0x1c1692d52afa4704!8m2!3d47.7709884!4d-122.148323?hl=en">
            Sprinter dedicated shop.
          </a>
          We also partner with RIDGEVANS for quality custom camper builds.
          So we may fulfill all your sprinter needs from purchase to service and camper build!
          Give us a call now!
        </p>
      </div>
    </div>
  );
};

export default About;
