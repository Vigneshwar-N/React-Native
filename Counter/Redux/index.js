const {retry} = require('@reduxjs/toolkit/query');
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  num: 0,
};

// string constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

//action creator
function increment() {
  return {type: INCREMENT};
}

function decrement() {
  return {type: DECREMENT};
}
function reset() {
  return {type: RESET};
}

//const reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        num: state.num + 100,
      };

    default:
      break;
  }
};
const store = createStore(reducer);
console.log(store.getState());
