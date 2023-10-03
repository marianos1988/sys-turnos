export interface INuevoTurnoContext {
  nuevoTurno: {
    id: any,
    nombreCliente: string
    telefono: string,
    fecha: string
    hora: string,
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: string
  }
  handleSetListaTurnos(): (NuevoTurno: INuevoTurnoContext["nuevoTurno"])=>void
  nuevoTurnoArrays: {
    id: any,
    nombreCliente: string
    telefono: number
    fecha: Date,
    hora: Date,
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: string
  }[]

}
