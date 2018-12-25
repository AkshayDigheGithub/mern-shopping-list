import { GET_ITEMS,DELETE_ITEM } from '../actions/types';

  
  const initialState = {
    items: [
      {id: Math.floor(Math.random() * 10 + 1), name: "Eggs"},
      {id: Math.floor(Math.random() * 20 + 1), name: "Milk"},
      {id: Math.floor(Math.random() * 30 + 1), name: "Steak"},
      {id:Math.floor(Math.random() * 40 + 1), name: "Candy"}
    ]
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,          
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item=>item.id !== action.payload)
        }
      
      default:
        return state;
    }
  }