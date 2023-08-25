import React from 'react'
import "../styles/EditarTurno.css"
import { Checkbox } from '@mui/material'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import dayjs from 'dayjs';


export const EditarTurno = () => {
  return (
    <>
      <div className='container-editar-turno'>
        <div className='group-tittle-editarTurno'>
          <h2>Editar Turno:</h2>
        </div>
        <form className='submit'>
          <div className='group-input-editar-turno'>
            <h3>Nombre Cliente: </h3>
            <input
              className='input-editar-turno' 
              type="text"
              placeholder='Ingrese Nombre'
              name='nombreCliente'
              value= { "nombreCliente" }
              // onChange={"onInputChange"}
              disabled={true}
            />
          </div>
          <div className='group-input-editar-turno'>
            <h3>Telefono: </h3>
            <input 
              className='input-editar-turno'
              placeholder='Ingrese telefono'
              type="number"
              name='telefono'
              value= { "1234567" }
              // onChange={"onInputChange"}
              disabled={true}
            />
          </div>
          <div className='group-input-editar-turno'>
            <h3>Seleccionar Fecha</h3>
            <div className="datepicker">
              <DatePickerComponent
                name="fecha"
                // handleValue={""}
                value={dayjs('2022-04-17')}
                disabled={true}
              />
            </div>
          </div>
          <div className='group-input-editar-turno'>
            <h3>Seleccionar Hora:</h3>
            <div className='timepicker'>
              <TimePickerComponent 
                name="hora"
                // handleValue = {""}
                value={dayjs('2022-04-17T15:30')}
                disabled={true}
              />
            </div>
          </div>
          <div className='group-input-editar-turno'>
            <h3>Tipo de Trabajo</h3>
            <div className='group-checkbox'>
              <h4>Corte: </h4>
              <Checkbox
              color="success"
              className='checkbox-tipo-trabajo'
              // onChange={""}
              value={true}
              checked={true}
              disabled={true}
              />
              <h4>Peinado: </h4>
              <Checkbox 
                color="success"
                className='checkbox-tipo-trabajo'
                // onChange={"agregarPeinado"}
                value={true}
                checked={true}
                disabled={true}
              />
              <h4>Alisado: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                // onChange={"agregarAlisado"}
                value={false}
                checked={false}
                disabled={true}
              />
              <h4>Tintura: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                // onChange={"agregarTintura"}
                value={false}
                checked={false}
                disabled={true}
              />
            </div>
          </div>
          <div className='group-input-editar-turno'>
            <h3>Observacion</h3>
            <input
              className='input-editar-turno input-observacion-editar-turno' 
              type="text"
              name='observacion'
              placeholder='Ingrese una observacion'
              // onChange={"OnInputChange"}
              value= { "observacion" }
              disabled={true}
            />
          </div>
          <div className='group-button-editar-turno'>
            <button 
              className="custom-btn-cargar btn-14"
              type='submit'
              // onClick={"guardarTurno"}
            >Editar</button>
                        <button 
              className="custom-btn-cargar btn-14"
              type='submit'
              // onClick={"guardarTurno"}
            >Eliminar</button>
          </div>
        </form>
      </div>
    </>
  )
}
