import React from 'react';
import SingleCar from '../SingleCar/SingleCar';

const CarList = ({ cars }) => (
  <div className="car-list">
    {cars.length ? (
      cars.map(car => <SingleCar key={car.id} carToDisplay={car} />)
    ) : (
      <p>Uuuu, ni ma autek :(</p>
    )}
  </div>
);

export default CarList;
