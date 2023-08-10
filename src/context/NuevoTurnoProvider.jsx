import { useState } from 'react'
import { NuevoTurnoContext } from './NuevoTurnoContext';

export const NuevoTurnoProvider = ({ children }) => {

    const [listaTurnos, setListaTurnos] = useState([]);

    const handleSetListaTurnos = (nuevoTurno) => {
        setListaTurnos([ nuevoTurno, ...listaTurnos ])
        console.log(listaTurnos)    
    }

  return (
    <NuevoTurnoContext.Provider value= {{ listaTurnos, handleSetListaTurnos }}>
        { children }
    </NuevoTurnoContext.Provider>
  )
} 