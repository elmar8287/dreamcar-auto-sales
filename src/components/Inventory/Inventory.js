import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";
import { useSelector } from "react-redux";

import default_img from './sprinter6.png';
// const sprinter = require("./ll.png");
// const sprinter3 = require("./sprinter3.png");
// const sprinter4 = require("./sprinter4.png");
// const sprinter5 = require("./sprinter5.png");
// const sprinter6 = require("./sprinter6.png");
// const sprinter7 = require("./sprinter7.png");
// const sprinter8 = require("./sprinter8.png");
// const sprinter9 = require("./sprinter9.png");

const Inventory = () => {
  const carsList = useSelector((state)=>state);
  return (
    <div className="car-block" id="cars">
        <div className="car-list">
          {
            carsList.map(car=>(
              <div className="card">
              <img src={car.img} onError={(e)=>{e.target.onerror = null; e.target.src="https://img.freepik.com/free-vector/sold-out-price-tag-sign_123447-162.jpg"}} alt="car-image"/>
              <div className="car-container">
                <h4>{car.model}</h4>
                <p className="price">{car.price}$</p>
                <ul>
                  <li>Year: {car.year}</li>
                  <li>Condition: {car.condition}</li>
                  <li>Cylinders: {car.cylinders} cylinders</li>
                  <li>Transmission: {car.transmission}</li>
                  <li>Fuel: {car.fuel}</li>
                  <li>Odometer: {car.odometer}</li>
                </ul>
                  <button type='button' className="card-button"><a href={car.link} target="_blank" rel="noreferrer">Detail</a></button>
              </div>
            </div>
            ))

          }
        </div>
    </div>
  )
  }

export default Inventory;
