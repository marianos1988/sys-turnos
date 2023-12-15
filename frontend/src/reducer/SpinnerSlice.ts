import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateSpinner: {
    stateLogin: false,
    stateNuevoTurno: false
  }
} 

export const SpinnerSlice = createSlice({
    name: "spinner",
    initialState: initialState,
    reducers: {
      activeSpinner: (state,action) => {
        switch(action.payload) {
          case "login" : state.stateSpinner.stateLogin = true;
            break;
          case "nuevoTurno": state.stateSpinner.stateNuevoTurno = true;
            break;
        }


      },
      inactiveSpinner: (state,action) => {
        switch(action.payload) {
          case "login" : state.stateSpinner.stateLogin = false;
            break;
          case "nuevoTurno": state.stateSpinner.stateNuevoTurno = false;
        }
      }
    }
});

export const { activeSpinner, inactiveSpinner} = SpinnerSlice.actions;

export default SpinnerSlice.reducer;
