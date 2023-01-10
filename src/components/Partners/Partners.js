/* eslint-disable */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Inventory/Inventory.css";

const Partners = () => {

  return (
    <div className="main-block" id="partners">
      <span className="cars-number">Our partners</span>
      <div className="car-block">
            <div className="card">
            <img src={require('./ridgevans.png')} hight="100px" alt="ridgevans" />
              <div className="car-container">
                <h4>Ridgevans</h4>
                <p>Ridgevans is a coalition of Sprinter vans enthusiasts, mechanics, dealers, cabinetry makers, RV specialists and engineers with over 15 years of experience with camper vans and RV’s.
We offer full spectrum of services from finding a van to complete build to your taste, all kinds of mechanical repairs including engine and transmission rebuilds, RV repairs, modifications to existing builds and many more!!!</p>
                <button type='button' className="card-button"><a href="https://ridgevans.com/" target="_blank" rel="noreferrer">Read more</a></button>
              </div>
            </div>
            <div className="card">
            <img src={require('./sprinterspec.png')} alt="ridgevans" hight="100px"/>
              <div className="car-container">
                <h4>Sprinter Specialists</h4>
                <p>We are the sprinter specialist</p>
                <button type='button' className="card-button"><a href="https://sprinterspecialists.com/" target="_blank" rel="noreferrer">Read more</a></button>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Partners;
