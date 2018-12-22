import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar />
        <h1>Hello</h1>
        <Button color="danger">Danger!</Button>

      </div>
    );
  }
}

export default App;
