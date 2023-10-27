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
		setNuevoTurno: (state:InitialState, action)=>{
      state.idTurnos += 1;
      state.listaTurnos = [...state.listaTurnos, {
        id: state.idTurnos,
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
    saveEditarTurno: (state,action) => {
      let nuevalista = state.listaTurnos;


      nuevalista.map(turno => {
        if(turno.id === state.editarTurno.id) {
          turno.nombreCliente = action.payload.nombreCliente;
          turno.telefono = action.payload.telefono;
          turno.fecha = action.payload.fecha;
          turno.hora = action.payload.hora;
          turno.corte = action.payload.corte;
          turno.peinado = action.payload.peinado;
          turno.alisado = action.payload.alisado;
          turno.tintura = action.payload.tintura;
          turno.observacion = action.payload.observacion;
        }
      })

      state.listaTurnos = nuevalista;

    },
    deleteEditarTurno: (state) => {
      let nuevalista = state.listaTurnos;
      let nuevalistaFiltrada = nuevalista.filter(turno => turno.id !== state.editarTurno.id);

      state.listaTurnos = nuevalistaFiltrada;

    }
	}
});
  
  export const { setNuevoTurno, saveEditarTurno, setEditarTurno, cleanEditarTurno, deleteEditarTurno } = TurnosSlice.actions;
  
  export default TurnosSlice.reducer;