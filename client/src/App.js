import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import store from './store';
//import { Provider } from 'react-redux';
import ShoppingList from './components/ShoppingList';
import Example from './components/Boot';
import AppNavbar from './components/AppNavbar';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <AppNavbar />
          <Container>            
            <Route exact path='/' component={ShoppingList}/>
          </Container>
            <Route exact path='/boot' component={Example}/>
            
        </div>
      </Router>      
    );
  }
}

export default App;
