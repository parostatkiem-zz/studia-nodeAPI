import React, { Component } from "react";
import "./App.scss";

import CarList from "./components/CarList/CarList";
import AddCarForm from "./components/AddCarForm/AddCarForm";

class App extends Component {
  state = {
    cars: []
  };

  fetchCars = async () =>
    await fetch("http://localhost:5000/api/cars", {
      method: "GET"
    })
      .then(response => response.json())
      .then(carList => {
        this.setState({ cars: carList.cars });
      })
      .catch(error => console.error(error));

  componentDidMount() {
    this.fetchCars();
  }

  render() {
    return (
      <div className="App">
        <section>
          <CarList
            cars={this.state.cars}
            onCarRemoved={() => {
              this.fetchCars();
            }}
          />
        </section>
        <section>
          <AddCarForm
            onCarAdded={() => {
              this.fetchCars();
            }}
            className="section"
          />
        </section>
      </div>
    );
  }
}

export default App;
