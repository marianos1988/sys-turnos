import { configureStore } from "@reduxjs/toolkit";

// Reducers
import turnosReducer from "../reducer/TurnosSlice"


export default configureStore({
    reducer: {
        turnos : turnosReducer
    }
   } ) 