import { createSlice } from '@reduxjs/toolkit';

const initialLocationState = {
  lat: 0,
  lng: 0,
};

const locationSlice = createSlice({
  name: 'location',
  initialState: initialLocationState,
  reducers: {
    setLocation(state, action) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const locationAction = locationSlice.actions;
export default locationSlice.reducer;
