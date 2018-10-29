import React from 'react';
import './SingleCar.scss';

const SingleCar = ({ carToDisplay }) => {
  const deleteCar = id => {
    fetch('http://localhost:5000/api/car/' + id, {
      method: 'DELETE',
    })
      .then(response => response.json())

      .catch(error => console.error(error));
  };
  return (
    <div className="single-car">
      <span className="small">
        ID:
        {carToDisplay.id}
      </span>
      <span>{carToDisplay.brand}</span>
      <span>{carToDisplay.model}</span>
      <button className="btn-delete" onClick={() => deleteCar(carToDisplay.id)}>
        X
      </button>
    </div>
  );
};

export default SingleCar;
