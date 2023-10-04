

export interface InitialForm {
  initialForm: {
    id: number,
    telefono?: string,
    nombreCliente: string,
    fecha: string
    hora: string,
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
    fecha: string
    hora: string,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  },
  handleSetListaTurnos: (nuevoTurno:INuevoTurnoContext["nuevoTurno"]) =>void,
  handleModificarTurno: (turnoModificado:INuevoTurnoContext["nuevoTurno"]) =>void,

  listaTurnos: {
    id: any,
    nombreCliente: string
    telefono?: string,
    fecha: string,
    hora: string,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion?: string
  }[]

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
