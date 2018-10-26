import React from 'react';
import SingleCar from '../SingleCar/SingleCar';

const CarList = ({ cars }) => (
  <section className="car-list">
    {cars.length &&
      cars.map(car => <SingleCar key={car.id} carToDisplay={car} />)}
  </section>
);

export default CarList;
