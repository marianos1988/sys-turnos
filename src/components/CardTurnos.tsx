
import { useContext } from "react";
import "../styles/CardTurnos.css";
import { Checkbox } from '@mui/material'
import { EditarTurnoContext } from "../context/EditarTurnoContext";
import React from "react";
import { IEditarTurno, IEliminarTurno } from "../types/interface";

type Props = {
  id: number,
  nombreCliente: string,
  telefono: string,
  fecha:React.ReactNode
  hora:React.ReactNode
  corte: boolean,
  alisado: boolean,
  peinado: boolean,
  tintura: boolean
  observacion: string,
  turnoCompleto:IEditarTurno["turnoParaEditar"];
} 

export const CardTurnos = ({ nombreCliente, telefono, fecha, hora, corte, alisado, peinado, tintura, observacion, turnoCompleto }: Props) => {

const { handleSetTurnoParaEditar } = useContext( EditarTurnoContext )


  const handleOnClick =  (turno:IEditarTurno["turnoParaEditar"]) => { 
    const turnoAMod:any = turno;
    handleSetTurnoParaEditar(turnoAMod)

  }


  return (
    <>
        <div className="ag-courses_item" onClick={()=>handleOnClick(turnoCompleto)}>
            <div className="ag-courses-item_link">
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
                  checked={corte}
                  />
                </div>
                <div className='checkbox-mis-turnos'>
                  <h4>Peinado: </h4>
                  <Checkbox 
                    color="primary"
                    className='checkbox-tipo-trabajo'
                    name='peinado'
                    value="Peinado"
                    checked={peinado}
                  />
                </div>
                <div className='checkbox-mis-turnos'>
                  <h4>Alisado: </h4>
                  <Checkbox 
                    color="primary"
                    className='checkbox-tipo-trabajo'
                    name='alisado'
                    value="Alisado"
                    checked={alisado}
                  />
                </div>
                <div className='checkbox-mis-turnos'>
                  <h4>Tintura: </h4>
                  <Checkbox 
                    color="primary"
                    className='checkbox-tipo-trabajo'
                    name='tintura'
                    value="Tintura"
                    checked={tintura}
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
            </div>
        </div>
    </>
  )
}
