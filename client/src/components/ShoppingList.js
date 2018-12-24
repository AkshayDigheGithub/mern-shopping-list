import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import { connect } from 'react-redux';
//import { getItems, deleteItem } from '../actions/itemActions';
//import PropTypes from 'prop-types';
//import uuid from './uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {id: Math.floor(Math.random() * 10 + 1), name: "Eggs"},
            {id: Math.floor(Math.random() * 10 + 1), name: "Milk"},
            {id: Math.floor(Math.random() * 10 + 1), name: "Steak"},
            {id:Math.floor(Math.random() * 10 + 1), name: "Water"}
        ]
    }

 delItem = (id) => () => {
  this.setState(state=>({
    items: state.items.filter(item=>item.id!==id)
  }));
 }

  render() {
    // const { items } = this.props.item;
    const { items } = this.state;
    return (
      <Container>
        <Button
        color="dark"
        style={{marginBottom: "2rem"}}
        onClick = { () => {
                const name = prompt("enter name...");                        
                if(name) {
                  this.setState(state => ({
                    items: [...state.items, {id:Math.floor(Math.random() * 10 + 1), name:name} ]
                  }));
                }
            }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick= {this.delItem(id)}
                  >
                   &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;

/* ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}; */

/* const mapStateToProps = state => ({
  item: state.item
}); */

/* export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList); */