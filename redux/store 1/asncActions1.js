// imports
const redux = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").thunk;
const produce = require("immer").produce;
const applyMiddleware = redux.applyMiddleware;
const logger = require("redux-logger").createLogger();

const createStore = redux.createStore;

//initialState
const initialState = {
  loading: false,
  data: [],
  error: "",
};

//action in string constants
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_RECEIVED = "FETCH_USER_RECEIVED";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

//action creator and actions
const request = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};
const received = (users) => {
  return {
    type: FETCH_USER_RECEIVED,
    payload: users,
  };
};
const error = (err = null) => {
  return {
    type: FETCH_USER_ERROR,
    payload: err,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USER_RECEIVED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.data = action.payload;
        draft.error = "no error";
      });
    case FETCH_USER_ERROR:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.data = []; // change `users` to `data`
        draft.error = action.payload;
      });

    default:
      return state; // Add return state here to avoid undefined state
  }
};

//async action creator
const fetchUser = () => {
  return function (dispatch) {
    dispatch(request());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data.map((user) => user.id);
        dispatch(received(user));
      })
      .catch((err) => {
        dispatch(error(err.message)); // Use err.message to get a readable error
      });
  };
};

// Store
const store = createStore(reducer, applyMiddleware(thunk, logger));

// Dispatch the fetchUser action
store.dispatch(fetchUser());
