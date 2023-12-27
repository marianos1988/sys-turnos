import { createSlice } from "@reduxjs/toolkit"
import { IPicketDate, IPicketHour} from "../types/interface";


interface InitialState {
  listaTurnos: InitialState["editarTurno"][],
  editarTurno: {
    id: any,
    telefono?: string,
    nombreCliente: string,
    fecha: IPicketDate,
    hora: IPicketHour,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  },
  idTurnos: number
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
  idTurnos: 0
}


export const TurnosSlice = createSlice({

	name: "turnos",
	initialState: initialState,
	reducers: {
    setEditarTurno: (state, action) => {

      state.editarTurno = {
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
      }
    },
    cleanEditarTurno: (state) => {
      state.editarTurno = {
        id: null,
        nombreCliente: "",
        telefono: "",
        fecha: null,
        hora: null,
        corte: false,
        peinado: false,
        alisado: false,
        tintura: false,
        observacion: ""
      }
    },
	}
});
  
  export const { setEditarTurno, cleanEditarTurno } = TurnosSlice.actions;
  
  export default TurnosSlice.reducer;