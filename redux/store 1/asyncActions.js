const redux = require("redux");
const produce = require("immer").produce;
const applyMiddleWare = redux.applyMiddleware;
const logger = require("redux-logger").createLogger();

const createStore = redux.createStore;

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED ";
const FETCH_USER_RECEIVED = "FETCH_USER_RECEIVED ";
const FETCH_USER_ERROR = "FETCH_USER_ERROR ";

const request = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};
const received = () => {
  return {
    type: FETCH_USER_RECEIVED,
  };
};
const error = (err = null) => {
  return {
    type: FETCH_USER_ERROR,
    payload: err,
  };
};

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USER_RECEIVED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.data = { hello: "hee" };
      });
    case FETCH_USER_ERROR:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payload;
      });

    default:
      break;
  }
};

const store = createStore(reducer, applyMiddleWare(logger));
console.log(store);

console.log(store.getState());
const subscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(error("This is a error"));
store.dispatch(received());
