import { useContext, useState} from 'react'
import { CartelConfirmarContext } from './CartelConfirmarContext'
import { EditarTurnoContext } from './EditarTurnoContext';
import { NuevoTurnoContext } from './NuevoTurnoContext';
import React from "react";
import { INuevoTurnoContext } from '../types/interface';
import { deleteEditarTurno,cleanEditarTurno } from "../reducer/TurnosSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";

type Props = {
  children: JSX.Element | JSX.Element[],
}
export const CartelConfirmarProvider = ({ children }:Props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
	const [mostrarCartelConfirmar, setMostrarCartelConfirmar] = useState({

    mostrar: false,
    mensaje: "", 
 
  });
	// const { handleEliminarTurno } = useContext<INuevoTurnoContext>(NuevoTurnoContext)
	const { turnoParaEditar } = useContext(EditarTurnoContext)

	const [aplicarCambios, setAplicarCambios] = useState<boolean>(false)

  const handleMostrarCartelConfirmar = (mensaje:string) => {
    setMostrarCartelConfirmar({ 
      mostrar: !mostrarCartelConfirmar.mostrar, 
      mensaje: mensaje,
	
    });
  }

	const handleConfirmarCartel = (valor: boolean) => {

		setMostrarCartelConfirmar({
			mostrar: !mostrarCartelConfirmar.mostrar,
			mensaje: "",
		})

		setAplicarCambios(valor)

		if(aplicarCambios) {
			// handleEliminarTurno(turnoParaEditar)
      dispatch(deleteEditarTurno());
      dispatch(cleanEditarTurno());
      navigate("/");

		}
	}


  return (
    <CartelConfirmarContext.Provider value={{ handleMostrarCartelConfirmar, handleConfirmarCartel, mostrarCartelConfirmar, aplicarCambios }}>
        {children}
    </CartelConfirmarContext.Provider>
  )
}
