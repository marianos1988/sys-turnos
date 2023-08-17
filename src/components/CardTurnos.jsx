import React from 'react'
import "../styles/CardTurnos.css";
import { Checkbox } from '@mui/material'

export const CardTurnos = ({ nombreCliente, telefono, fecha, hora, corte, alisado, peinado, tintura, observacion }) => {
  return (
    <>
      <div className="ag-courses_item">
        <a href="#" className="ag-courses-item_link">
          <div className="ag-courses-item_bg">1</div>
          <div className="ag-courses-item_title">
            Cliente: {nombreCliente}
          </div>
          <div className="ag-courses-item_title">
            Tel: {telefono}
          </div>
          <div className='observacion-box'>{observacion}</div>
          <div className='group-checkbox-mis-turnos'>
            <div className='checkbox-mis-turnos'>
              <h4>Corte: </h4>
              <Checkbox
              color="primary"
              className='checkbox-tipo-trabajo'
              name='corte'
              value="Corte"
              checked={true}
              disabled={false}
              />
            </div>
            <div className='checkbox-mis-turnos'>
              <h4>Peinado: </h4>
              <Checkbox 
                color="primary"
                className='checkbox-tipo-trabajo'
                name='peinado'
                value="Peinado"
                checked={true}


              />
            </div>
            <div className='checkbox-mis-turnos'>
              <h4>Alisado: </h4>
              <Checkbox 
                color="primary"
                className='checkbox-tipo-trabajo'
                name='alisado'
                value="Alisado"
                checked={false}

              />
            </div>
            <div className='checkbox-mis-turnos'>
              <h4>Tintura: </h4>
              <Checkbox 
                color="primary"
                className='checkbox-tipo-trabajo'
                name='tintura'
                value="Tintura"
                checked={false}

              />
            </div>
          </div>
          <div className="ag-courses-item_date-box">
            <span className="ag-courses-item_date">
              Fecha: {fecha}
            </span>
            <span className="ag-courses-item_date">
              Hora: {hora}
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
