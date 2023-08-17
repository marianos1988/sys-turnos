import { useState } from 'react'
import { NuevoTurnoContext } from './NuevoTurnoContext';

export const NuevoTurnoProvider = ({ children }) => {

  const [ listaTurnos, setListaTurnos ] = useState([]);

  const handleSetListaTurnos = (nuevoTurno) => {
    
    setListaTurnos([...listaTurnos, nuevoTurno])
    
  }

  return (
    <NuevoTurnoContext.Provider value= {{ listaTurnos, handleSetListaTurnos }}>
        { children }
    </NuevoTurnoContext.Provider>
  )
} 