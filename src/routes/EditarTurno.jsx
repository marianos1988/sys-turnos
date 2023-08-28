import { useContext, useState } from 'react'
import "../styles/EditarTurno.css"
import { Checkbox } from '@mui/material'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import dayjs from 'dayjs';
import { EditarTurnoContext } from '../context/EditarTurnoContext'
import { useEditarTurno } from '../hooks/useEditarTurno'


export const EditarTurno = () => {


  const { turnoParaEditar } = useContext(EditarTurnoContext)
  const  { editarContacto, datosAEditar } = useEditarTurno()


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
              className={
                (datosAEditar.editando)
                 ? "input-editar-turno editando" 
                 : "input-editar-turno"
              }
              type="text"
              placeholder='Ingrese Nombre'
              name='nombreCliente'
              value= { turnoParaEditar.nombreCliente }
              // onChange={"onInputChange"}
              disabled={datosAEditar.desactivarCampos}
            />
          </div>
          <div className='group-input-editar-turno'>
            <h3>Telefono: </h3>
            <input 
              className={
                (datosAEditar.editando)
                 ? "input-editar-turno editando" 
                 : "input-editar-turno"
              }
              placeholder='Ingrese telefono'
              type="number"
              name='telefono'
              value= { turnoParaEditar.telefono }
              // onChange={"onInputChange"}
              disabled={datosAEditar.desactivarCampos}
            />
          </div>
          <div className='group-input-editar-turno'>
            <h3>Seleccionar Fecha</h3>
            <div className="datepicker">
              <DatePickerComponent
                name="fecha"
                // handleValue={""}
                value={dayjs(turnoParaEditar.fecha)}
                disabled={datosAEditar.desactivarCampos}
              />
            </div>
          </div>
          <div className='group-input-editar-turno'>
            <h3>Seleccionar Hora:</h3>
            <div className='timepicker'>
              <TimePickerComponent 
                name="hora"
                // handleValue = {""}
                value={dayjs(turnoParaEditar.hora)}
                disabled={datosAEditar.desactivarCampos}
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
              value={turnoParaEditar.corte}
              checked={turnoParaEditar.corte}
              disabled={datosAEditar.desactivarCampos}
              />
              <h4>Peinado: </h4>
              <Checkbox 
                color="success"
                className='checkbox-tipo-trabajo'
                // onChange={"agregarPeinado"}
                value={turnoParaEditar.peinado}
                checked={turnoParaEditar.peinado}
                disabled={datosAEditar.desactivarCampos}
              />
              <h4>Alisado: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                // onChange={"agregarAlisado"}
                value={turnoParaEditar.alisado}
                checked={turnoParaEditar.alisado}
                disabled={datosAEditar.desactivarCampos}
              />
              <h4>Tintura: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                // onChange={"agregarTintura"}
                value={turnoParaEditar.tintura}
                checked={turnoParaEditar.tintura}
                disabled={datosAEditar.desactivarCampos}
              />
            </div>
          </div>
          <div className='group-input-editar-turno'>
            <h3>Observacion</h3>
            <input
              className={
                (datosAEditar.editando)
                 ? 'input-editar-turno input-observacion-editar-turno editando'  
                 : 'input-editar-turno input-observacion-editar-turno' 
              }
              type="text"
              name='observacion'
              placeholder='Ingrese una observacion'
              // onChange={"OnInputChange"}
              value= { turnoParaEditar.observacion }
              disabled={datosAEditar.desactivarCampos}
            />
          </div>
          <div className='group-button-editar-turno'>
            <button 
              className="custom-btn-cargar btn-14"
              type='submit'
              onClick={(e)=>{
                e.preventDefault();
                editarContacto();
              }}
            >{datosAEditar.boton}</button>
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
