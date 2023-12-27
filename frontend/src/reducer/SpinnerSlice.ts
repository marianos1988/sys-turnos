import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateSpinner: {
    stateLogin: false,
    stateNuevoTurno: false,
    stateSearchTurno: false,
    stateSpinnerInDisplay: false,
    stateEditarTurno: false
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
          case "searchTurnos": state.stateSpinner.stateSearchTurno = true;
            break;
          case "spinnerInDisplay": state.stateSpinner.stateSpinnerInDisplay = true;
            break;
          case "editarTurno": state.stateSpinner.stateEditarTurno = true;
            break;
        }
      },
      inactiveSpinner: (state,action) => {
        switch(action.payload) {
          case "login" : state.stateSpinner.stateLogin = false;
            break;
          case "nuevoTurno": state.stateSpinner.stateNuevoTurno = false;
            break;
          case "searchTurnos": state.stateSpinner.stateSearchTurno = false;
            break;
          case "spinnerInDisplay": state.stateSpinner.stateSpinnerInDisplay = false;
            break;
          case "editarTurno": state.stateSpinner.stateEditarTurno = false;
            break;
        }
      }
    }
});

export const { activeSpinner, inactiveSpinner} = SpinnerSlice.actions;

export default SpinnerSlice.reducer;
