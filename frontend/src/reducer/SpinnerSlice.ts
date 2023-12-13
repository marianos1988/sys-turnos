import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateSpinner: false
}

export const SpinnerSlice = createSlice({
    name: "spinner",
    initialState: initialState,
    reducers: {
      activeSpinner: (state) => {
        state.stateSpinner = true;
      },
      inactiveSpinner: (state) => {
        state.stateSpinner = false;
      }
    }
});

export const { activeSpinner, inactiveSpinner} = SpinnerSlice.actions;

export default SpinnerSlice.reducer;
