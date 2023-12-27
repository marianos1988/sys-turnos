import React from 'react'
import "../styles/CartelConfirmar.css"
import { BotonNav } from "./BotonNav"
import { cerrarCartelConfirmar } from '../reducer/CartelesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ICarteles, IEditarTurno } from '../types/interface'
import { useEditarTurno } from '../hooks/useEditarTurno'


export const CartelConfirmar = () => {
  const dispatch = useDispatch();
  const { cartelConfirmar } = useSelector((state:ICarteles) => state.carteles);
  const { editarTurno } = useSelector((state:any) => state.turnos)
  const { deleteEditarTurno } = useEditarTurno();
  return (
    <>
    {
      (cartelConfirmar.mostrar) 
      ?  
        (      
          <div className='container-cartel-confirmar'>
              <div className='cartel-confirmar'>
                <h2 className='titulo-cartel-confirmar'>{cartelConfirmar.mensaje}</h2>
                <div className='group-botones-confirmar'>
                    <BotonNav 
                      className= "boton-cartel-confirmar"
                      handleOnClick= { ()=>  {
                        dispatch(cerrarCartelConfirmar());
                        deleteEditarTurno(editarTurno.id);
                      }}
                    >Aceptar</BotonNav>
                  <BotonNav 
                    className= "boton-cartel-confirmar"
                    handleOnClick= { ()=>  {
                      dispatch(cerrarCartelConfirmar());
                    }}

                  >Cancelar</BotonNav>
                </div>
              </div>
          </div>
        ) 
      : (
          <div></div>
        )
    }
  </>
  )
}
