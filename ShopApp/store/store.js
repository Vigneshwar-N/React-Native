import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import dataReducer from './productSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
