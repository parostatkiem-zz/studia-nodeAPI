import React, { useState } from "react";
import "./SingleCar.scss";
var classNames = require("classnames");

const SingleCar = ({ carToDisplay, onCarRemoved }) => {
  const [isUpdated, setIsUpdated] = useState(false);

  const deleteCar = id => {
    fetch("http://localhost:5000/api/car/" + id, {
      method: "DELETE"
    })
      .then(() => onCarRemoved())
      .catch(error => console.error(error));
  };

  const handleEditableFocused = (event, isFocused = true) => {
    event.target.contentEditable = isFocused;
    if (isFocused) {
      event.target.classList.add("editable");
      event.target.focus();
    } else {
      event.target.classList.remove("editable");
      if (carToDisplay[event.target.id] !== event.target.innerHTML) {
        carToDisplay[event.target.id] = event.target.innerHTML;
        saveChanges();
      }
    }
  };

  const saveChanges = () => {
    setIsUpdated(true);
    fetch("http://localhost:5000/api/car/" + carToDisplay.id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        brand: carToDisplay.brand,
        model: carToDisplay.model
      })
    })
      .then(() => {})
      // .then(() => onCarRemoved())
      .then(() => {})
      .catch(error => console.error(error))
      .finally(() => {
        setIsUpdated(false);
      });
  };

  return (
    <div className={classNames("single-car", { frozen: isUpdated })}>
      <span className="small">
        ID:
        {carToDisplay.id}
      </span>
      <span
        id="brand"
        onClick={e => handleEditableFocused(e, true)}
        onBlur={e => handleEditableFocused(e, false)}
      >
        {carToDisplay.brand}
      </span>
      <span
        id="model"
        onClick={e => handleEditableFocused(e, true)}
        onBlur={e => handleEditableFocused(e, false)}
      >
        {carToDisplay.model}
      </span>
      <button className="btn-delete" onClick={() => deleteCar(carToDisplay.id)}>
        X
      </button>
    </div>
  );
};

export default SingleCar;
