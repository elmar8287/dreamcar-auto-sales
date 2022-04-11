import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";

const sprinter = require("./ll.png");
// const sprinter2 = require("./sprinter2.png");

const Inventory = ({ name, price, year, condition, cylinders, transmission, fuel, odometer, link }) => {
  return (
    <div className="car-block" id="cars">
      <h2 className="car-list-header">Latest updates</h2>
      <div className="car-list">
        <div className="card">
          <img src={sprinter} />
          <div className="car-container">
            <h4>{name}</h4>
            <p className="price">{price}</p>
            <ul>
              <li>Year: {year}</li>
              <li>Condition: {condition}</li>
              <li>Cylinders: {cylinders}</li>
              <li>Transmission: {transmission}</li>
              <li>Fuel: {fuel}</li>
              <li>Odometer: {odometer}</li>
            </ul>
            <button type='button' className="card-button"><a href={link} target="_blank" rel="noreferrer">More detail</a></button>
          </div>
        </div>
        {/* <div className="card">
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
        </div> */}
      </div>
    </div>
  );
};

export default Inventory;

Inventory.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  year: PropTypes.string,
  condition: PropTypes.string,
  cylinders: PropTypes.string,
  transmission: PropTypes.string,
  fuel: PropTypes.string,
  odometer: PropTypes.string,
  link: PropTypes.string
};
