import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Car = ({ image, name, price, year, condition, cylinders, transmission, fuel, odometer, link }) => {
  return (
    <div className="card">
      <img src={image} />
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
  );
};

export default Car;

Car.propTypes = {
  image: PropTypes.string,
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
