import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";
import Car from "../Car/Car";

const sprinter = require("./ll.png");
const sprinter2 = require("./sprinter2.png");

const Inventory = () => {
  return (
    <div className="car-block" id="cars">
      <h2 className="car-list-header">Latest updates</h2>
      <div className="car-list">
        <Car 
          image={sprinter}
          name="Winnebago view sprinter"
          price="49.995$" year="2008"
          condition="Like new"
          cylinders="6 cylinders"
          transmission="Atomatic"
          fuel="Diesel" odometer="109000"
          link="https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7462993491.html"
        />
        <Car 
          image={sprinter2}
          name="Mercedes Sprinter 2014"
          price="25.995$"
          year="2014"
          condition="Good"
          cylinders="6 cylinders"
          transmission="Atomatic"
          fuel="Diesel"
          odometer="120000"
          link="https://seattle.craigslist.org/see/ctd/d/kirkland-2014-mercedes-sprinter-2500/7463823261.html"
        />
      </div>
    </div>
  );
};

export default Inventory;
