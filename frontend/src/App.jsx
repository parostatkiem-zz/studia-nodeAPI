import React, { Component } from 'react';

import CarList from './components/CarList/CarList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <CarList />
      </div>
    );
  }
}

export default App;
