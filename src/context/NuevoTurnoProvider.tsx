import { useState } from 'react'
import { NuevoTurnoContext } from './NuevoTurnoContext';
import React from "react"
import { INuevoTurnoContext } from '../types/interface';

type Props = {
  children: JSX.Element | JSX.Element[],
}

interface ListaTurnos {

listaTurnos: INuevoTurnoContext["listaTurnos"]

}

export const NuevoTurnoProvider = ({ children }:Props) => {

  const [ listaTurnos, setListaTurnos ] = useState<ListaTurnos["listaTurnos"]>([]);

  const handleSetListaTurnos = (nuevoTurno:INuevoTurnoContext["nuevoTurno"]) => {
    
    setListaTurnos([...listaTurnos, nuevoTurno])
    
  }

  const handleModificarTurno = (turnoModificado:INuevoTurnoContext["nuevoTurno"]) => {

    listaTurnos.map(turno => {
      if(turnoModificado.id === turno.id) {
        turno.nombreCliente = turnoModificado.nombreCliente
        turno.telefono = turnoModificado.telefono
        turno.fecha = turnoModificado.fecha
        turno.hora = turnoModificado.hora
        turno.corte = turnoModificado.corte
        turno.peinado = turnoModificado.peinado
        turno.alisado = turnoModificado.alisado
        turno.tintura = turnoModificado.tintura
        turno.observacion = turnoModificado.observacion
      }
    })

  }

  const handleEliminarTurno = (eliminarTurno:INuevoTurnoContext["nuevoTurno"]) => {
    const nuevalistaTurnos = listaTurnos.filter(turno => turno.id !== eliminarTurno.id);
    setListaTurnos(nuevalistaTurnos);
  }
 
  return (
    <NuevoTurnoContext.Provider value= {{ listaTurnos, handleSetListaTurnos,handleModificarTurno, handleEliminarTurno }}>
        { children }
    </NuevoTurnoContext.Provider> 
  )
} 