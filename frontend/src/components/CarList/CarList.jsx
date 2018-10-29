import React from 'react';
import SingleCar from '../SingleCar/SingleCar';

const CarList = ({ cars }) => (
  <div className="car-list">
    {cars.length &&
      cars.map(car => <SingleCar key={car.id} carToDisplay={car} />)}
  </div>
);

export default CarList;
