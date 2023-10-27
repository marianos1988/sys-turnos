import { createSlice } from "@reduxjs/toolkit"

type DatosCartel = {
  cartelAdvertencia: {
    mostrar: boolean
    mensaje?: string
    confirmarBtn?:string
  }
}

const initialState:DatosCartel = {
  cartelAdvertencia: {
    mostrar: false,
    mensaje: "",
    confirmarBtn : ""
  }
}

export const CartelAdvertenciaSlice = createSlice({
  name: "cartelAdvetencia",
  initialState: initialState,
  reducers: {
    mostrarCartelAdvertencia: (state,action) => {
      state.cartelAdvertencia.mostrar= !state.cartelAdvertencia.mostrar;
      state.cartelAdvertencia.mensaje= action.payload;
    },
    cerrarCartelAdvertencia: (state) => {
      state.cartelAdvertencia = {
          mostrar: false,
          mensaje: "",
          confirmarBtn : ""
      }
    }
  }
})

export const { mostrarCartelAdvertencia,cerrarCartelAdvertencia } = CartelAdvertenciaSlice.actions;
  
export default CartelAdvertenciaSlice.reducer;