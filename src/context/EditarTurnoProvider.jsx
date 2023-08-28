import { useEffect, useState} from 'react'
import { EditarTurnoContext } from './EditarTurnoContext'

export const EditarTurnoProvider = ({ children }) => {

  const [turnoParaEditar, setTurnoParaEditar] = useState({})

  const handleSetTurnoParaEditar = (turno) =>{
    setTurnoParaEditar(turno)
  }


  return (
    <EditarTurnoContext.Provider value={{ handleSetTurnoParaEditar, turnoParaEditar }}>
       { children }
    </EditarTurnoContext.Provider>
  )
}
