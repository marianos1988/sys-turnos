import { pink } from '@mui/material/colors';
import React from 'react'
import "../styles/CardTurnos.css";
import { Checkbox } from '@mui/material'

export const CardTurnos = () => {
  return (
    <>
      <div className="ag-courses_item">
        <a href="#" className="ag-courses-item_link">
          <div className="ag-courses-item_bg">1</div>
          <div className="ag-courses-item_title">
            Cliente: Mariano
          </div>
          <div className="ag-courses-item_title">
            Tel: 1523678854
          </div>
          <div className='observacion-box'>Aca va una pequeña observacion</div>
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
                disabled={false}

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
                disabled={true}
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
                disabled={true}
              />
            </div>
          </div>
          <div className="ag-courses-item_date-box">
            <span className="ag-courses-item_date">
              Fecha: 04/11/2022
            </span>
            <span className="ag-courses-item_date">
              Hora: 12:15 PM
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
