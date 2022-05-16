import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";
import { useSelector, useDispatch } from "react-redux";

const sprinter = require("./ll.png");
const sprinter2 = require("./sprinter2.png");

const Inventory = () => {
  const carNumber = useSelector((state)=>state);
  const dispatch = useDispatch();
  return (
    <div className="car-block" id="cars">
      <h2 className="car-list-header">Latest updates ({carNumber} cars)</h2>
      <div className="car-list">
        <div className="card">
          <img src={sprinter} />
          <div className="car-container">
            <h4>Winnebago view sprinter</h4>
            <p className="price">49.995$</p>
            <ul>
              <li>Year: 2008</li>
              <li>Condition: Like new</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 109000</li>
            </ul>
            <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7462993491.html" target="_blank" rel="noreferrer">Sold</a></button>
          </div>
        </div>
        <div className="card">
          <img src={sprinter2} />
          <div className="car-container">
            <h4>Mercedes Sprinter 2014</h4>
            <p className="price">25.995$</p>
            <ul>
              <li>Year: 2014</li>
              <li>Condition: Good</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 120000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/ctd/d/kirkland-2014-mercedes-sprinter-2500/7463823261.html" target="_blank" rel="noreferrer">Sold</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
