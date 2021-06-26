import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const fetch = require('node-fetch');
require("regenerator-runtime/runtime");

export const fetchCities = createAsyncThunk('search/fetchCities', async () => {
  const response = await fetch(`${process.env.LOCATIONS_API_URL}/search?apikey=${process.env.WEATHER_API_KEY}&q=moscow&offset=25`)
  const json = await response.json();
  return json;
});

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    cities: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchCities.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCities.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.cities = action.payload;
    },
    [fetchCities.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCities } = searchSlice.actions
export default searchSlice.reducer

