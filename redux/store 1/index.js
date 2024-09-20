const redux = require("redux");
const reduxLogger = require("redux-logger");
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
//action binder this is a redux helper function
const helper = redux.bindActionCreators;
//combine reducer
const combineReducer = redux.combineReducers;
const ORDER_CAKE = "ORDER_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ORDER_ICECREAM = "ORDER_ICECREAM";
const RESTOCK_ICECREAM = " RESTOCK_ICECREAM";

//action creator and actions
const orderCake = (qty = 1) => {
  return {
    type: ORDER_CAKE,
    payload: qty,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
};
const orderIceCream = (qty = 1) => {
  return {
    type: ORDER_ICECREAM,
    payload: qty,
  };
};
const restockIceCream = (qty = 1) => {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty,
  };
};
// initalStates
const initialCakeState = {
  numberOfCake: 10,
};

const initialIceCream = {
  numberOfIceCream: 20,
};
// reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numberOfCake: !action.payload
          ? state.numberOfCake - 1
          : state.numberOfCake - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake + 1,
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
        numberOfIceCream: !action.payload
          ? state.numberOfIceCream - 1
          : state.numberOfIceCream - action.payload,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + 1,
      };
    case ORDER_CAKE:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

//combining the reducers
const RootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// store

const store = createStore(RootReducer, applyMiddleWare(logger));

// console.log(`initialState:`, store.getState());

store.dispatch(orderCake());
store.dispatch(orderCake(2));
store.dispatch(restockCake());
store.dispatch(restockCake());
// action binder
const actions = helper(
  {
    orderCake,
    orderIceCream,
    restockCake,
    restockIceCream,
  },
  store.dispatch
);
actions.orderIceCream(5);
actions.restockIceCream();
