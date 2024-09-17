import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  num: 0,
  hello: 'hello',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.num++;
    },
    decrement: state => {
      state.num--;
    },
    reset: state => {
      state.num = initialState.num;
    },
  },
});

export default counterSlice.reducer;
export const {increment, decrement, reset} = counterSlice.actions;
