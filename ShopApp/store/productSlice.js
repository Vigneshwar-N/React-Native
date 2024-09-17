import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const fetchData = createAsyncThunk('data/fetch', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  const products = response.data.products;
  await AsyncStorage.setItem('products', JSON.stringify(products));
  return products;
});

export const loadOfflineData = createAsyncThunk(
  'data/loadOffline',
  async () => {
    const offlineData = await AsyncStorage.getItem('products');
    if (offlineData) {
      return JSON.parse(offlineData);
    } else {
      throw new Error('No offline data found');
    }
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(loadOfflineData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(loadOfflineData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
