import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";
import { useSelector } from "react-redux";

const sprinter = require("./ll.png");
const sprinter3 = require("./sprinter3.png");
const sprinter4 = require("./sprinter4.png");
const sprinter5 = require("./sprinter5.png");
const sprinter6 = require("./sprinter6.png");
const sprinter7 = require("./sprinter7.png");
const sprinter8 = require("./sprinter8.png");
const sprinter9 = require("./sprinter9.png");

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
          <img src={sprinter6} />
          <div className="car-container">
            <h4>Mercedes Sprinter Conversion Camper RV 2015</h4>
            <p className="price">59.995$</p>
            <ul>
              <li>Year: 2015</li>
              <li>Condition: Like new</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 78000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter/7502514374.html" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
        <div className="card">
          <img src={sprinter7} />
          <div className="car-container">
            <h4>Thor Citation Mercedes Sprinter</h4>
            <p className="price">79.995$</p>
            <ul>
              <li>Year: 2016</li>
              <li>Condition: Like new</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 47000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7498016513.html" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
        <div className="card">
          <img src={sprinter8} />
          <div className="car-container">
            <h4>Mercedes Sprinter Cargo VAN</h4>
            <p className="price">24.995$</p>
            <ul>
              <li>Year: 2014</li>
              <li>Condition: Good</li>
              <li>Cylinders: 4 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 180000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/ctd/d/kirkland-2014-mercedes-sprinter-diesel/7496303349.html" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
        <div className="card">
          <img src={sprinter9} />
          <div className="car-container">
            <h4>Mercedes Sprinter Four Winds Camper</h4>
            <p className="price">45.000$</p>
            <ul>
              <li>Year: 2008</li>
              <li>Condition: Good</li>
              <li>Cylinders: 6 cylinders</li>
              <li>Transmission: Automatic</li>
              <li>Fuel: Diesel</li>
              <li>Odometer: 112000</li>
            </ul>
              <button type='button' className="card-button"><a href="https://seattle.craigslist.org/see/ctd/d/kirkland-2008-mercedes-sprinter-four/7492862186.html" target="_blank" rel="noreferrer">Detail</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
