// import React, { useContext } from 'react'
import React from "react"
import "../styles/CartelAdvertencia.css"
import { BotonNav } from "./BotonNav"
// import { CartelAdvertenciaContext } from '../context/CartelAdvertenciaContext'
import { useSelector, useDispatch } from "react-redux"
import { cerrarCartelAdvertencia } from "../reducer/CartelesSlice"
import { ICarteles } from "../types/interface"



export const CartelAdvertencia = () => {
  const dispatch = useDispatch();
  const { cartelAdvertencia } = useSelector((state:ICarteles) => state.carteles);
  // const { mostrarCartelAdvertencia, handleMostrarCartelAdvertencia } = useContext( CartelAdvertenciaContext )
  return (  
    <>
      {
        (cartelAdvertencia.mostrar) 
        ? 
          (      
            <div className='container-cartel-advertencias'>
                <div className='cartel-advertencia'>
                  <h2 className='titulo-cartel-advertencia'>{cartelAdvertencia.mensaje}</h2>
                  <BotonNav 
                    className= "boton-cartel-advertencia"
                    handleOnClick= { ()=>  {
                      dispatch(cerrarCartelAdvertencia());
                    }}
                  >Aceptar</BotonNav>
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
