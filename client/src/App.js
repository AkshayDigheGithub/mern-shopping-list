import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ShoppingList from './components/ShoppingList';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
