import { useEffect, useState} from 'react'
import { EditarTurnoContext } from './EditarTurnoContext'

type Props = {
  children: JSX.Element | JSX.Element[],
}
export const EditarTurnoProvider = ({ children }):Props => {

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
