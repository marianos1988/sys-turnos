export type userLogin = {
    user: string,
    password: string
}

export type Fecha = {
    $D: number,
    $M: number,
    $y: number
}

export type Hora = {
    $H: number,
    $m: number 
}

export type NuevoTurno = {
    nombreCliente: string,
    telefono: string,
    fecha: Fecha,
    hora: Hora,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion: string
}
export interface EditarTurno {
        id: number,
        nombreCliente: string,
        telefono: string,
        fecha: Fecha,
        hora: Hora,
        corte: boolean,
        peinado: boolean,
        alisado: boolean,
        tintura: boolean,
        observacion: string
}

export interface EditarTurnoSinValidar {
    id: number,
    nombreCliente: string,
    telefono: string,
    fecha: Fecha | "",
    hora: Hora | "",
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion: string
}
export interface NuevoTurnoParaValidar {
    nombreCliente: string,
    telefono: string,
    fecha: string,
    hora: string,
    corte: boolean,
    peinado: boolean,
    alisado: boolean,
    tintura: boolean,
    observacion: string
}

export interface ListaTurnos extends NuevoTurnoParaValidar {
    id: number,
    fecha: string,
    hora: string
}

