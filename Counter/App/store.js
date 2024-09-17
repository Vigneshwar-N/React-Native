import {configureStore} from '@reduxjs/toolkit';
import counterSliceReducer from './features/counter/counterSlice';
import logger from 'redux-logger';
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export default store;
