

export interface InitialForm {
  initialForm: {
    id: any,
    telefono?: string,
    nombreCliente: string,
    fecha?: IPicketDate,
    hora?: IPicketHour,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  },
  tipoForm: string

}

export type CheckboxAction = {
  type: "[Checkbox] corte"
} | {
  type: "[Checkbox] peinado"
} | {
  type: "[Checkbox] alisado"
} | {
  type: "[Checkbox] tintura"
}

 
export interface INuevoTurnoContext {
  nuevoTurno: {
    id: any,
    nombreCliente: string
    telefono?: string,
    fecha: IPicketDate,
    hora: IPicketHour,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  },
  agregarTurno: {
    id: number,
    nombreCliente: string,
    telefono: string,
    fecha: IPicketEdit,
    hora: IPicketEdit,
    corte: boolean, 
    alisado: boolean,
    peinado: boolean,
    tintura: boolean,
    observacion: string,
  },
  handleSetListaTurnos: (nuevoTurno:INuevoTurnoContext["nuevoTurno"]) =>void,
  handleModificarTurno: (turnoModificado:INuevoTurnoContext["nuevoTurno"]) =>void,
  handleSetTurnoParaEditar: (turno:INuevoTurnoContext["nuevoTurno"]) => void,
  handleOnClick:(turno: INuevoTurnoContext["nuevoTurno"])=>void,
  handleEliminarTurno: (turno:IEliminarTurno)=>void,

  listaTurnos: {
    id: any,
    nombreCliente: string
    telefono?: string,
    fecha: IPicketDate,
    hora: IPicketHour,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  }[]

}

export interface IEditarTurnoContext {
  turnoParaEditar: {
    id: number,
    nombreCliente: string,
    telefono: string,
    fecha: IPicketEdit,
    hora: IPicketEdit,
    corte: boolean, 
    alisado: boolean,
    peinado: boolean,
    tintura: boolean,
    observacion: string,
  },
  handleSetTurnoParaEditar: (turno:IEditarTurnoContext["turnoParaEditar"])=>void,
}

export interface IEditarTurno {
  turnos: {
    editarTurno: {
      id: number, 
      nombreCliente: string,
      telefono:string, 
      fecha: IPicketDate,
      hora: IPicketHour,
      corte: boolean; 
      alisado: boolean; 
      peinado: boolean; 
      tintura: boolean; 
      observacion: string;
  }
},
turnoParaEditar: {
  id: number,
  nombreCliente: string,
  telefono: string; 
  fecha: IPicketDate,
  hora: IPicketHour,
  corte: boolean, 
  alisado: boolean,
  peinado: boolean,
  tintura: boolean,
  observacion: string,
},
handleSetTurnoParaEditar: (turno: any)=>void,
viewTurnos: {
    id: number,
    nombreCliente: string,
    telefono: string,
    fecha: IPicketEdit,
    hora: IPicketEdit,
    corte: boolean, 
    alisado: boolean,
    peinado: boolean,
    tintura: boolean,
    observacion: string,
}

}

export interface ICartelAdvertenciaContext {
  mostrarCartelAdvertencia: {
    mostrar: boolean
    mensaje?: string
    confirmarBtn?:string
  }
  handleMostrarCartelAdvertencia: (mensaje:string) => void
}

export interface OnInputChange {
  target: {
    name: string,
    value: string | number | boolean | undefined
  }

}

export type IPicket = {
  $M2: {
    $D: number,
    $H: number,
    $L: string,
    $M: number,
    $W: number,
    $d: string,
    $m: number,
    $ms: number,
    $s: number,
    $u: any,
    $x: any,
    $y:number
  }
} | { 
  $M2: null | string
}

export interface IListaTurnos {
  turnos:{
    listaTurnos:      {
      id: any,
      nombreCliente: string
      telefono?: string,
      fecha: IPicketDateSinNull,
      hora: IPicketHourSinNull,
      corte: boolean,
      peinado: boolean,
      alisado: boolean,
      tintura: boolean,
      observacion?: string
    }[]
  }
}
export type IPicketDate = {
  $D?: number,
  $M?: number,
  $y?: number
} | null | ""

export type IPicketDateSinNull = {
  $D?: number,
  $M?: number,
  $y?: number
}

export type IPicketHour = {
  $H: number | null,
  $m: number | null
} | null | ""

export type IPicketHourSinNull = {
  $m: number,
  $H: number
}
export interface IPicketEdit {
  $D: number,
  $H: number,
  $L: string,
  $M: number,
  $W: number,
  $d: string,
  $m: number,
  $ms: number,
  $s: number,
  $u: any,
  $x: any,
  $y:number
}

export interface IEliminarTurno {
  id: number,
  nombreCliente: string,
  telefono: string,
  fecha: IPicketEdit,
  hora: IPicketEdit,
  corte: boolean, 
  alisado: boolean,
  peinado: boolean,
  tintura: boolean,
  observacion: string,
}

export interface ICartelConfirmarContext {
 aplicarCambios: boolean,
 handleMostrarCartelConfirmar: (mensaje: string)=>void,
 handleConfirmarCartel:(valor: boolean)=>void,
 mostrarCartelConfirmar: {
  mostrar: boolean;
  mensaje: string;
}

}
