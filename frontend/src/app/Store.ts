import { configureStore } from "@reduxjs/toolkit";

// Reducers
import turnosReducer from "../reducer/TurnosSlice"
import cartelesReducer from "../reducer/CartelesSlice"
import userLoginReducer from "../reducer/UserLoginSlice";
import SpinnerReducer from "../reducer/SpinnerSlice";

export default configureStore({
    reducer: {
        turnos : turnosReducer,
        carteles: cartelesReducer,
        users: userLoginReducer,
        spinner: SpinnerReducer

    }
   } ) 