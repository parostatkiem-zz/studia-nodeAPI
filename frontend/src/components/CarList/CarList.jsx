import React from "react";
import SingleCar from "../SingleCar/SingleCar";

const CarList = ({ cars, onCarRemoved }) => (
  <div className="car-list">
    {cars.length ? (
      cars.map(car => (
        <SingleCar
          key={car.id}
          onCarRemoved={onCarRemoved}
          carToDisplay={car}
        />
      ))
    ) : (
      <p>Uuuu, ni ma autek :(</p>
    )}
  </div>
);

export default CarList;
