import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";
import { useSelector } from "react-redux";

const sprinter = require("./ll.png");
const sprinter2 = require("./sprinter2.png");
const sprinter3 = require("./sprinter3.png");
const sprinter4 = require("./sprinter4.png");
const sprinter5 = require("./sprinter5.png");

const Inventory = () => {
  const carNumber = useSelector((state)=>state);
  return (
    <div className="car-block" id="cars">
      <h2 className="car-list-header">Latest updates ({carNumber} cars)</h2>
      <div className="car-list">
      <div className="card">
          <img src={sprinter3} />
          <div className="car-container">
            <h4>Thor citation Mercedes</h4>
            <p className="price">89.995$</p>
            <ul>
              <li>Year: 2016</li>
              <li>Condition: Like new</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 47000</li>
            </ul>
            <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7484841063.html" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
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
            <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7480695217.html" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
        <div className="card">
          <img src={sprinter4} />
          <div className="car-container">
            <h4>Renovated leisure vans Mercedes sprinter</h4>
            <p className="price">45.000$</p>
            <ul>
              <li>Year: 2007</li>
              <li>Condition: Good</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 144000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://vanlifetrader.com/listing/renovated-leisure-vans-mercedes-sprinter/" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
        <div className="card">
          <img src={sprinter5} />
          <div className="car-container">
            <h4>Low miles pre-def sprinter</h4>
            <p className="price">79.995$</p>
            <ul>
              <li>Year: 2007</li>
              <li>Condition: Good</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 23000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://vanlifetrader.com/listing/new-professional-build-low-miles-pre-def-sprinter/" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
      </div>
      <div className="car-list">
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
