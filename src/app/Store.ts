import { configureStore } from "@reduxjs/toolkit";

// Reducers
import turnosReducer from "../reducer/TurnosSlice"
import cartelesReducer from "../reducer/CartelesSlice"


export default configureStore({
    reducer: {
        turnos : turnosReducer,
        carteles: cartelesReducer

    }
   } ) 