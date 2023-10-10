import React,{ useState} from 'react'
import { EditarTurnoContext } from './EditarTurnoContext'
import { IEditarTurno, INuevoTurnoContext } from '../types/interface'

type Props = {
  children: JSX.Element | JSX.Element[],
}

export const EditarTurnoProvider = ({ children }:Props) => {

  const [turnoParaEditar, setTurnoParaEditar] = useState({})

  const handleSetTurnoParaEditar = (turno:IEditarTurno["editarTurno"]) =>{
    setTurnoParaEditar(turno)
  }

  return (
    <EditarTurnoContext.Provider value={{ handleSetTurnoParaEditar, turnoParaEditar }}>
       { children }
    </EditarTurnoContext.Provider>
  )
}
