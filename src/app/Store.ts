import { configureStore } from "@reduxjs/toolkit";

// Reducers
import turnosReducer from "../reducer/TurnosSlice"
import cartelesReducer from "../reducer/CartelesSlice"
import userLogin from "../reducer/UserLogin";


export default configureStore({
    reducer: {
        turnos : turnosReducer,
        carteles: cartelesReducer,
        users: userLogin

    }
   } ) 