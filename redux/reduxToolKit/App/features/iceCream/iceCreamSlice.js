const createSlice = require("@reduxjs/toolkit").createSlice;
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    numberOfIceCreams: 20,
  },
  reducers: {
    order: (state, action) => {
      action.payload
        ? (state.numberOfIceCreams -= action.payload)
        : state.numberOfIceCreams--;
    },
    reStock: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("cake/orderCake", (state) => {
      state.numberOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions; 
