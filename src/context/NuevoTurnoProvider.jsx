import { useState } from 'react'
import { NuevoTurnoContext } from './NuevoTurnoContext';

export const NuevoTurnoProvider = ({ children }) => {

  const [ listaTurnos, setListaaTurnos ] = useState([]);

  const handleSetListaTurnos = (nuevoTurno) => {

    setListaaTurnos([nuevoTurno, ...listaTurnos])

  }

  return (
    <NuevoTurnoContext.Provider value= {{ listaTurnos, handleSetListaTurnos }}>
        { children }
    </NuevoTurnoContext.Provider>
  )
} 