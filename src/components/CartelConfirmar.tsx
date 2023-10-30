import React from 'react'
import "../styles/CartelConfirmar.css"
import { BotonNav } from "./BotonNav"
import { cerrarCartelConfirmar } from '../reducer/CartelesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEditarTurno, cleanEditarTurno } from "../reducer/TurnosSlice"
import { NavLink, useNavigate } from 'react-router-dom'
import { ICarteles } from '../types/interface'


export const CartelConfirmar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartelConfirmar } = useSelector((state:ICarteles) => state.carteles);
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
                  <NavLink to="/MisTurnos">
                    <BotonNav 
                      className= "boton-cartel-confirmar"
                      handleOnClick= { ()=>  {
                        dispatch(cerrarCartelConfirmar());
                        dispatch(deleteEditarTurno());
                        dispatch(cleanEditarTurno());
                        navigate("/");
                      }}
                    >Aceptar</BotonNav>
                  </NavLink>
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
