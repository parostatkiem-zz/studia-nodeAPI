import React, { Component } from 'react';

import CarList from './components/CarList/CarList';

class App extends Component {
  state = {
    cars: [],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Ale mamy piękne autka</p>
        </header>
        <CarList cars={this.state.cars} />
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
