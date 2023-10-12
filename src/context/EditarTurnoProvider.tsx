import React,{ useState} from 'react'
import { EditarTurnoContext } from './EditarTurnoContext'
import { IEditarTurnoContext } from '../types/interface'

type Props = {
  children: JSX.Element | JSX.Element[],
}

export const EditarTurnoProvider = ({ children }:Props) => {

  const [turnoParaEditar, setTurnoParaEditar] = useState<IEditarTurnoContext["turnoParaEditar"]>({} as IEditarTurnoContext["turnoParaEditar"])

  const handleSetTurnoParaEditar = (turno:IEditarTurnoContext["turnoParaEditar"])=>{
    setTurnoParaEditar(turno)
  }

  return (
    <EditarTurnoContext.Provider value={{ handleSetTurnoParaEditar, turnoParaEditar }}>
       { children }
    </EditarTurnoContext.Provider>
  )
}
