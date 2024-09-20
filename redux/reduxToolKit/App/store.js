const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("./features/cake/cakeSlice");
const reduxLogger = require("redux-logger").logger;
const iceCreamReducer = require("./features/iceCream/iceCreamSlice");
const userReducer = require("./features/user/userSlice");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});
module.exports = store;
