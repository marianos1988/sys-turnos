import { createSlice } from "@reduxjs/toolkit"


type DatosCartel = {
  cartelAdvertencia: {
    mostrar: boolean,
    mensaje?: string
  }
  cartelConfirmar: {
    mostrar: boolean,
    mensaje?: string
  }
}

const initialState:DatosCartel = {
  cartelAdvertencia: {
    mostrar: false,
    mensaje: ""
  },
  cartelConfirmar: {
    mostrar: false,
    mensaje: "",
  }
}

export const CartelAdvertenciaSlice = createSlice({
  name: "cartelAdvetencia",
  initialState: initialState,
  reducers: {
    mostrarCartelAdvertencia: (state,action) => {

      state.cartelAdvertencia.mostrar= true;
      state.cartelAdvertencia.mensaje= action.payload;
    },
    cerrarCartelAdvertencia: (state) => {
      state.cartelAdvertencia = {
          mostrar: false,
          mensaje: "",
      }
    },
    mostrarCartelConfirmar: (state, action) => {
      state.cartelConfirmar.mostrar = true;
      state.cartelConfirmar.mensaje = action.payload;
    },
    cerrarCartelConfirmar: (state) => {
      state.cartelConfirmar.mostrar = false,
      state.cartelConfirmar.mensaje = ""
    }
  }
})

export const { mostrarCartelAdvertencia,cerrarCartelAdvertencia, mostrarCartelConfirmar, cerrarCartelConfirmar } = CartelAdvertenciaSlice.actions;
  
export default CartelAdvertenciaSlice.reducer;