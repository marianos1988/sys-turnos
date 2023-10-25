import { createSlice } from "@reduxjs/toolkit"
import { IPicket, InitialForm } from "../types/interface";

interface InitialState {
  listaTurnos: InitialState["editarTurno"][],
  editarTurno: {
    id: any,
    telefono?: string,
    nombreCliente: string,
    fecha: IPicket["$M2"],
    hora: IPicket["$M2"],
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  }
}

const initialState:InitialState = {
  listaTurnos: [],
  editarTurno: {
    id: 0,
    nombreCliente: "",
    telefono: "",
    fecha: "",
    hora: "",
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: ""
  },
}

export const TurnosSlice = createSlice({

	name: "turnos",
	initialState: initialState,
	reducers: {
		setNuevoTurno: (state:InitialState, action)=>{
      state.listaTurnos = [...state.listaTurnos, {
        id: action.payload.id,
        nombreCliente: action.payload.nombreCliente,
        telefono: action.payload.telefono,
        fecha: action.payload.fecha,
        hora: action.payload.hora,
        corte: action.payload.corte,
        peinado: action.payload.peinado,
        alisado: action.payload.alisado,
        tintura: action.payload.tintura,
        observacion: action.payload.observacion
      }]
		},

	}
});
  
  export const { setNuevoTurno } = TurnosSlice.actions;
  
  export default TurnosSlice.reducer;