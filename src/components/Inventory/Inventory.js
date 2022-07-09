import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inventory.css";
import { useSelector } from "react-redux";

const Inventory = () => {
  const carsList = useSelector((state)=>state);
  const [more, setMore] = useState(4);
  const showMore = (e) => {
    e.preventDefault();
    setMore(more+8);
  };

  return (
    <div className="main-block" id="cars">
      <div className="car-block">
        {
          carsList.map(car=>(
            <div className="card" key={car.id}>
              <img src={car.img} onError={(e)=>{e.target.onerror = null; e.target.src="https://img.freepik.com/free-vector/sold-out-price-tag-sign_123447-162.jpg"}} alt={car.model} />
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
          )).slice(0, more)
        }
      </div>
      <div className="show-more-section">
        <button onClick={showMore} className="show-more">
        Show more cars
        </button>
      </div>
    </div>
  );
};

export default Inventory;
