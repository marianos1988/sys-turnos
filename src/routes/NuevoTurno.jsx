import React from 'react'
import { Checkbox } from '@mui/material'
import "../styles/NuevoTurno.css"

export const NuevoTurno = () => {
  return (
    <div className='container-nuevo-turno'>
      <div className='group-tittle-nuevoTurno'>
        <h2>Nuevo Turno:</h2>
      </div>
      <form>
        <div className='group-input'>
          <h3>Nombre Cliente: </h3>
          <input type="text" />
        </div>
        <div className='group-input'>
          <h3>Telefono: </h3>
          <input type="number" />
        </div>
        <div className='group-input'>
          <h3>Seleccionar Fecha</h3>
          <input type="date" />
        </div>
        <div className='group-input'>
          <h3>Seleccionar Hora:</h3>
          <input type="time" />
        </div>
        <div className='group-input'>
          <h3>Tipo de Trabajo</h3>
          <div className='group-checkbox'>
            <h4>Corte: </h4>
            <Checkbox defaultChecked color="success" className='checkbox-tipo-trabajo' />
            <h4>Peinado: </h4>
            <Checkbox defaultChecked color="success" className='checkbox-tipo-trabajo' />
            <h4>Alisado: </h4>
            <Checkbox defaultChecked color="success" className='checkbox-tipo-trabajo' />
            <h4>Tintura: </h4>
            <Checkbox defaultChecked color="success" className='checkbox-tipo-trabajo' />
          </div>
        </div>
        <div className='group-input'>
          <h3>Observacion</h3>
          <input type="text" />
        </div>
        <div className='group-button-nuevo-turno'>
        <button class="custom-btn-cargar btn-14">Crear Turno</button>
        </div>
      </form>
    </div>
  )
}
