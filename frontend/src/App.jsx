import React, { Component } from 'react';
import './App.scss';

import CarList from './components/CarList/CarList';
import AddCarForm from './components/AddCarForm/AddCarForm';

const fetchCars = async () =>
  await fetch('http://localhost:5000/api/cars', {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => console.error(error));
fetchCars().then(a => console.log(a));
export const EventContext = React.createContext({ fetchCars });
class App extends Component {
  state = {
    cars: [],
  };
  render() {
    return (
      <div className="App">
        <button
          className="main-action-button"
          onClick={() => this.setState({ cars: await fetchCars() })}
        >
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
    this.setState({ cars: fetchCars() });
  }
}

export default App;
