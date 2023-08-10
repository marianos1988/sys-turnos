import React, { useContext } from 'react'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'

export const MisTurnos = () => {

  const { listaTurnos } = useContext( NuevoTurnoContext );

  


  return (
    <>MisTurnos</>
  )
}
