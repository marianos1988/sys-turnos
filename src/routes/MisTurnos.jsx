import React, { useEffect } from 'react'
import { useContext } from 'react'
import { BotonNav } from "../components/BotonNav"
import { useState } from 'react';
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
import { DatePickerComponent } from '../components/DatePickerComponent';
import { CardTurnos } from '../components/CardTurnos';
import "../styles/MisTurnos.css";
import { useMisTurnos } from '../hooks/useMisTurnos';
import { CartelAdvertenciaContext } from '../context/CartelAdvertenciaContext';
import { NavLink } from 'react-router-dom';


export const MisTurnos = () => {

  const { listaTurnos } = useContext( NuevoTurnoContext );
  const [ listaTurnosView, setListaTurnosView ]= useState(listaTurnos)
  const { mostrarFecha, mostrarHora, handleSelectDate,listaFiltrada} = useMisTurnos()
  const { handleMostrarCartelAdvertencia } = useContext( CartelAdvertenciaContext )


  return (
    <>
      <div className='container-mis-turnos'>
        <form className='container-input-date'>
          <h2>Elegir la fecha:</h2>
          <div className='datepicker'>
            <DatePickerComponent 
              handleValue={(value)=>{
                handleSelectDate(value)
              }}
            />
          </div>
          <BotonNav
            handleOnClick={(e)=>{
              e.preventDefault();
              setListaTurnosView([])
              if(listaFiltrada < 1) {
                handleMostrarCartelAdvertencia("No existen turnos")
              }

              setListaTurnosView(listaFiltrada)
            }}
            newClass={"btn-search-mis-turnos"}
          >Buscar</BotonNav>        
        </form>
        <h2 className="titulo-lista-turnos">Lista de turnos: </h2>
        <div className='container-cards-turnos'>
          { 
            listaTurnosView.map(turno => (
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
