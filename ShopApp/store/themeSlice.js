import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme', // Name the slice 'theme'
  initialState: {
    darkTheme: false, // The initial state for the theme
  },
  reducers: {
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme; // Toggle the theme
    },
  },
});

export const {toggleTheme} = themeSlice.actions; // Export the action
export default themeSlice.reducer; // Export the reducer
