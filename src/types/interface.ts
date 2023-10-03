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
    telefono: string,
    fecha: string,
    hora: string,
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: string
  }[]

}

export interface ICartelAdvertenciaContext {
  mostrarCartelAdvertencia: {
    mostrar: boolean
    mensaje?: string
    confirmarBtn?:string
  }
  handleMostrarCartelAdvertencia(): (mensaje:string) => void
}
