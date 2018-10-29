import React, { Component } from 'react';
import './App.scss';

import CarList from './components/CarList/CarList';
import AddCarForm from './components/AddCarForm/AddCarForm';

class App extends Component {
  state = {
    cars: [],
  };
  render() {
    return (
      <div className="App">
        <button className="main-action-button" onClick={() => this.fetchCars()}>
          Odświez listę samochodów
        </button>

        <section>
          <CarList cars={this.state.cars} />
        </section>
        <section>
          <AddCarForm className="section" />
        </section>
      </div>
    );
  }
  componentDidMount() {
    this.fetchCars();
  }

  fetchCars() {
    fetch('http://localhost:5000/api/cars', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({ cars: data.cars }))
      .catch(error => console.error(error));
  }
}

export default App;
