import React from 'react';
import SingleCar from '../SingleCar/SingleCar';

const CarList = cars => (
  <section className="car-list">
    {cars.length > 0 && cars.map(car => <SingleCar />)}
  </section>
);

export default CarList;
