import React from 'react';
import './AddCarForm.scss';

const AddCarForm = ({ carToDisplay }) => {
  return (
    <form
      action="http://localhost:5000/api/car"
      method="POST"
      className="add-car-form"
    >
      <label htmlFor="brand">Marka:</label>
      <input name="brand" type="text" />

      <label htmlFor="model">Model:</label>
      <input name="model" type="text" />

      <input className="button" type="submit" value="Dodaj" />
    </form>
  );
};

export default AddCarForm;
