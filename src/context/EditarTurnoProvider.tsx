import React,{ useState} from 'react'
import { EditarTurnoContext } from './EditarTurnoContext'
import { IEditarTurno } from '../types/interface'

type Props = {
  children: JSX.Element | JSX.Element[],
}

export const EditarTurnoProvider = ({ children }:Props) => {

  const [turnoParaEditar, setTurnoParaEditar] = useState<IEditarTurno["turnoParaEditar"]>({} as IEditarTurno["turnoParaEditar"])

  const handleSetTurnoParaEditar = (turno:IEditarTurno["turnoParaEditar"])=>{
    setTurnoParaEditar(turno)
  }

  return (
    <EditarTurnoContext.Provider value={{ handleSetTurnoParaEditar, turnoParaEditar }}>
       { children }
    </EditarTurnoContext.Provider>
  )
}
