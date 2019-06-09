import React from "react";
import "./AddCarForm.scss";

export const AddCarForm = ({ onCarAdded }) => {
  const SubmitForm = event => {
    const formData = new FormData(event.target);

    fetch("http://localhost:5000/api/car", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(Object.fromEntries(formData))
    }).then(() => {
      if (typeof onCarAdded === "function") {
        onCarAdded();
      }
    });
    event.target.reset(); //reset form
    event.preventDefault();
  };

  return (
    <form className="add-car-form" onSubmit={SubmitForm}>
      <label htmlFor="brand">Marka:</label>
      <input name="brand" type="text" />

      <label htmlFor="model">Model:</label>
      <input name="model" type="text" />

      <input className="button" type="submit" value="Dodaj" />
    </form>
  );
};

export default AddCarForm;
