import React, { useEffect } from 'react'
import { BotonNav } from "../components/BotonNav"
import { useState } from 'react';
import { useSelector } from "react-redux";
import { DatePickerComponent } from '../components/DatePickerComponent';
import { CardTurnos } from '../components/CardTurnos';
import "../styles/MisTurnos.css";
import { useMisTurnos } from '../hooks/useMisTurnos';
import { NavLink, useNavigate } from 'react-router-dom';
import { IEditarTurno, IListaTurnos, IPicketEdit, IUserLogeado, SpinnerSlice } from '../types/interface';
import { useDispatch } from 'react-redux';
import { Spinner } from '../components/Spinner';
import { activeSpinner, inactiveSpinner } from "../reducer/SpinnerSlice"

export const MisTurnos = () => {
  const { userLogeado } = useSelector((state:IUserLogeado) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stateSpinner } = useSelector((state:SpinnerSlice) => state.spinner);
 
  const { handleSelectDate, fechaFiltrada, getAllListaTurnos, searchDateFilter} = useMisTurnos()

  const [ listaTurnosView, setListaTurnosView ]= useState<any>([]) // aca va los turnos de la BD


useEffect(()=>{
    if(userLogeado.logeado === false && userLogeado.user === "") {
      navigate("/");
    }
    dispatch(activeSpinner("searchTurnos"));
    const list = getAllListaTurnos();
    list.then(list => setListaTurnosView(list))
    dispatch(inactiveSpinner("searchTurnos"));
},[])
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
              dispatch(activeSpinner("searchTurnos"));
              const fechaListaTurnos = searchDateFilter(fechaFiltrada);
              fechaListaTurnos.then((lista:any)=>{
               setListaTurnosView(lista);
               dispatch(inactiveSpinner("searchTurnos"));
              });
              
            } }
            newClass={"btn-search-mis-turnos"}>Buscar</BotonNav>
            <div className='container-spinner-search-misturnos'>
              <Spinner active={stateSpinner.stateSearchTurno}></Spinner>   
            </div>
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
                  fecha={turno.fecha}
                  hora={turno.hora}
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
