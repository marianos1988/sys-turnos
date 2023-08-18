import { useContext } from 'react'
import { useState } from 'react';
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
import { DatePickerComponent } from '../components/DatePickerComponent';
import { CardTurnos } from '../components/CardTurnos';
import {v4 as uuidv4} from "uuid";
import "../styles/MisTurnos.css";
import { useMisTurnos } from '../hooks/useMisTurnos';

export const MisTurnos = () => {

  const { listaTurnos } = useContext( NuevoTurnoContext );

  const { mostrarFecha, mostrarHora } = useMisTurnos()
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
          {
            listaTurnos.map(turno => (
              <CardTurnos
                key={uuidv4(1)}
                nombreCliente={turno.nombreCliente}
                telefono={turno.telefono}
                fecha={mostrarFecha(turno.fecha)}
                hora={mostrarHora(turno.hora)}
                observacion={turno.observacion}
                corte={turno.corte}
                peinado={turno.peinado}
                alisado={turno.alisado}
                tintura={turno.tintura}

              />
            ))
          }
        </div>
      </div>
    </>
  )
}
