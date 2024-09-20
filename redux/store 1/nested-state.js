const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const UPDATE_STREET = "UPDATE_STREET";
const UPDATE_WithImmer = "UPDATE_WithImmer";

const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};
const updateWithImmer = (street) => {
  return {
    type: UPDATE_WithImmer,
    payload: street,
  };
};
const initialUserState = {
  id: 1,
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  address: {
    street: "456 Elm St",
    city: "Somewhere",
    state: "NY",
    postalCode: "67890",
  },
};

function reducer(state = initialUserState, action) {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    //   Updating with immer

    case UPDATE_WithImmer:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());
const subscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(updateStreet("321 ask st"));
store.dispatch(updateWithImmer("123 asd stlouis"));
subscribe();
