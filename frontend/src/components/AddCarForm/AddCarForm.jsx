import React, { useState } from 'react';
import './AddCarForm.scss';

const AddCarForm = () => {
  const [form, setValues] = useState({
    brand: '',
    model: '',
  });

  const SubmitForm = () => {
    fetch('http://localhost:5000/api/car', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  };
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="add-car-form" onSubmit={() => SubmitForm()}>
      <label htmlFor="brand">Marka:</label>
      <input onChange={updateField} name="brand" type="text" />

      <label htmlFor="model">Model:</label>
      <input onChange={updateField} name="model" type="text" />

      <input className="button" type="submit" value="Dodaj" />
    </form>
  );
};

export default AddCarForm;
