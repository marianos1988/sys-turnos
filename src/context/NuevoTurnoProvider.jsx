import { useState } from 'react'
import { NuevoTurnoContext } from './NuevoTurnoContext';

export const NuevoTurnoProvider = ({ children }) => {

  const [ listaTurnos, setListaTurnos ] = useState([]);

  const handleSetListaTurnos = (nuevoTurno) => {
    
    setListaTurnos([...listaTurnos, nuevoTurno])
    
  }

  const handleModificarTurno = (turnoModificado) => {

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
 
  return (
    <NuevoTurnoContext.Provider value= {{ listaTurnos, handleSetListaTurnos,handleModificarTurno }}>
        { children }
    </NuevoTurnoContext.Provider>
  )
} 