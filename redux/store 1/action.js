const redux = require("redux");
const combineReducer = redux.combineReducers;
const createStore = redux.createStore;
const helper = redux.bindActionCreators;
const INCREMENT = "INCREMENT ";
const DECREMENT = "DECREMENT ";
const INCREMENTBY2 = "INCREMENTBY";

//action creatorD

const incrementby2 = (INC = 2) => {
  return {
    type: INCREMENTBY2,
    payload: INC,
  };
};
const increment = () => {
  return {
    type: INCREMENT,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case INCREMENTBY2:
      return {
        ...state,
        counter: state.counter + 2 + action.payload,
      };

    default:
      return state;
  }
};


cont
const store = createStore(reducer);

console.log(store.getState());
const subscribe = store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(increment());
store.dispatch(incrementby2(10));
const actions = helper({ increment, decrement }, store.dispatch);
actions.increment();
