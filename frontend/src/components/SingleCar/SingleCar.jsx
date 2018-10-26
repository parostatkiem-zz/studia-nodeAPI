import React from 'react';

const SingleCar = ({ carToDisplay }) => (
  <div className="single-car">
    <span>{carToDisplay.brand}</span>
    <span>{carToDisplay.model}</span>
  </div>
);

export default SingleCar;
