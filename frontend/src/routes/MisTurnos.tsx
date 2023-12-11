import React, { useEffect } from 'react'
import { BotonNav } from "../components/BotonNav"
import { useState } from 'react';
import { useSelector } from "react-redux";
import { DatePickerComponent } from '../components/DatePickerComponent';
import { CardTurnos } from '../components/CardTurnos';
import "../styles/MisTurnos.css";
import { useMisTurnos } from '../hooks/useMisTurnos';
import { NavLink, useNavigate } from 'react-router-dom';
import { IEditarTurno, IListaTurnos, IPicketEdit, IUserLogeado } from '../types/interface';
import { mostrarCartelAdvertencia } from '../reducer/CartelesSlice';
import { useDispatch } from 'react-redux';


export const MisTurnos = () => {
  const { userLogeado } = useSelector((state:IUserLogeado) => state.users);
  const navigate = useNavigate();


  const { listaTurnos } = useSelector((state:IListaTurnos) => state.turnos);
  const dispatch = useDispatch();
  const [ listaTurnosView, setListaTurnosView ]= useState<any>(listaTurnos)
  const { mostrarFecha, mostrarHora, handleSelectDate,listaFiltrada} = useMisTurnos()


useEffect(()=>{
    if(userLogeado.logeado === false && userLogeado.user === "") {
    navigate("/");
  }
})
  return (
    <>
      <div className='container-mis-turnos'>
        <form className='container-input-date'>
          <h2>Elegir la fecha:</h2>
          <div className='datepicker'>
            <DatePickerComponent 
              handleValue={(value:IPicketEdit) => {
                handleSelectDate(value);
              } }/>
          </div>
          <BotonNav
            handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              setListaTurnosView([]);
              if (listaFiltrada < 1) {
                dispatch(mostrarCartelAdvertencia("No existen turnos"));
              }
              setListaTurnosView(listaFiltrada);
            } }
            newClass={"btn-search-mis-turnos"}>Buscar</BotonNav>        
        </form>
        <h2 className="titulo-lista-turnos">Lista de turnos: </h2>
        <div className='container-cards-turnos'>
          { 
            listaTurnosView.map((turno:IEditarTurno["viewTurnos"]) => (
              <NavLink to="/EditarTurno" key={turno.id}>
                <CardTurnos
                  id={turno.id}
                  nombreCliente={turno.nombreCliente}
                  telefono={turno.telefono}
                  fecha={mostrarFecha(turno.fecha)}
                  hora={mostrarHora(turno.hora)}
                  observacion={turno.observacion}
                  corte={turno.corte}
                  peinado={turno.peinado}
                  alisado={turno.alisado}
                  tintura={turno.tintura}
                  turnoCompleto={turno}
                ></CardTurnos>
              </NavLink>
            ))
          }
        </div>
      </div>
    </>
  )
}
