import { useContext } from 'react'
import { useState } from 'react';
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
import { DatePickerComponent } from '../components/DatePickerComponent';
import { CardTurnos } from '../components/CardTurnos';
import "../styles/MisTurnos.css";

export const MisTurnos = () => {

  const { listaTurnos } = useContext( NuevoTurnoContext );
  console.log(listaTurnos);

  const [valorFecha, setValorFecha] = useState("");

  return (
    <>
      <div className='container-mis-turnos'>
        <form className='container-input-date'>
          <h2>Elegir la fecha:</h2>
          <div className='datepicker'>
            <DatePickerComponent />
          </div>
        </form>
        <h2 className="titulo-lista-turnos">Lista de turnos: </h2>
        <div className='container-cards-turnos'>
          <CardTurnos />
          <CardTurnos />
          <CardTurnos />
        </div>
      </div>
    </>
  )
}
