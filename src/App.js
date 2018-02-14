import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';

import Data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">

        {Data.data.map(item => (
          <Card
          key={item.id}
          name={item.name}
          photo={item.photo}
          description={item.description}
          
          
          
          />

        ))}
        </div>
      </div>
    );
  }
}

export default App;
