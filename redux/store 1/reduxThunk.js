const redux = require("redux");
const createStore = redux.createStore;
const thunk = require("redux-thunk").thunk();
const logger = require("redux-logger").createLogger();
const applyMiddleWare = require("redux").applyMiddleware;
const initialState = {
  loading: false,
  data: [],
  error: "",
};

const FETCH = "FETCH";
const RECEIVED = "RECEIVED";
const ERROR = "ERROR";

//action creator
const fetch = () => {
  return {
    type: FETCH,
  };
};
const received = (info) => {
  return { type: FETCH, payload: info };
};
const error = (err) => {
  return { type: FETCH, payload: err };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
const store = createStore(reducer, applyMiddleWare(logger, thunk));
// console.log(store.getState());
store.dispatch(fetch());
// console.log(store.getState());
