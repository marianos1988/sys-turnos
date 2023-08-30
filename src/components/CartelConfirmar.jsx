import React from 'react'
import "../styles/CartelConfirmar.css"
import { BotonNav } from "./BotonNav"
import { useContext } from 'react'
import { CartelConfirmarContext } from '../context/CartelConfirmarContext'

export const CartelConfirmar = () => {


  const { handleConfirmarCartel, mostrarCartelConfirmar, aplicarCambios }= useContext(CartelConfirmarContext) 
  return (
    <>
    {
      (mostrarCartelConfirmar.mostrar) 
      ? 
        (      
          <div className='container-cartel-confirmar'>
              <div className='cartel-confirmar'>
                <h2 className='titulo-cartel-confirmar'>{mostrarCartelConfirmar.mensaje}</h2>
                <div className='group-botones-confirmar'>
                  <BotonNav 
                    className= "boton-cartel-confirmar"
                    handleOnClick= { ()=>  {
                      handleConfirmarCartel(true)
                    }}

                  >Aceptar</BotonNav>
                  <BotonNav 
                    className= "boton-cartel-confirmar"
                    handleOnClick= { ()=>  {
                      handleConfirmarCartel(false)
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
