import { useContext, useState } from 'react'
import "../styles/EditarTurno.css"
import { Checkbox } from '@mui/material'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import dayjs from 'dayjs';
import { EditarTurnoContext } from '../context/EditarTurnoContext'
import { useEditarTurno } from '../hooks/useEditarTurno'
import { useForm } from '../hooks/useForm'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'


export const EditarTurno = () => {


  const { turnoParaEditar } = useContext(EditarTurnoContext);
  const  { editarContacto, datosAEditar } = useEditarTurno();
  const {handleModificarTurno} = useContext(NuevoTurnoContext)


  const initialForm = {
    id: turnoParaEditar.id,
    nombreCliente: turnoParaEditar.nombreCliente,
    telefono: turnoParaEditar.telefono,
    fecha: turnoParaEditar.fecha,
    hora: turnoParaEditar.hora,
    corte: turnoParaEditar.corte,
    peinado: turnoParaEditar.peinado,
    alisado: turnoParaEditar.alisado,
    tintura: turnoParaEditar.tintura,
    observacion: turnoParaEditar.observacion
  }

  const { onInputChange, formState, onDatePicker, onTimePicker, agregarCorte, agregarPeinado, agregarAlisado, agregarTintura, validarDatos } = useForm(initialForm);

  const handleValueDate = (value) => {onDatePicker(value)};
  const handleValueTime = (value) => {onTimePicker(value)};

  const guardarTurnoEditado = () => {
    const datosValidados = validarDatos(formState);
    if(datosValidados) {

      handleModificarTurno(formState)
    }
  }

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
              value= { formState.nombreCliente }
              onChange={onInputChange}
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
              value= { formState.telefono }
              onChange={onInputChange}
              disabled={datosAEditar.desactivarCampos}
            />
          </div>
          <div className='group-input-editar-turno'>
            <h3>Seleccionar Fecha</h3>
            <div className="datepicker">
              <DatePickerComponent
                name="fecha"
                handleValue={handleValueDate}
                value={dayjs(formState.fecha)}
                disabled={datosAEditar.desactivarCampos}
              />
            </div>
          </div>
          <div className='group-input-editar-turno'>
            <h3>Seleccionar Hora:</h3>
            <div className='timepicker'>
              <TimePickerComponent 
                name="hora"
                handleValue = {handleValueTime}
                value={dayjs(formState.hora)}
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
              onChange={agregarCorte}
              value={formState.corte}
              checked={formState.corte}
              disabled={datosAEditar.desactivarCampos}
              />
              <h4>Peinado: </h4>
              <Checkbox 
                color="success"
                className='checkbox-tipo-trabajo'
                onChange={agregarPeinado}
                value={formState.peinado}
                checked={formState.peinado}
                disabled={datosAEditar.desactivarCampos}
              />
              <h4>Alisado: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                onChange={agregarAlisado}
                value={formState.alisado}
                checked={formState.alisado}
                disabled={datosAEditar.desactivarCampos}
              />
              <h4>Tintura: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                onChange={agregarTintura}
                value={formState.tintura}
                checked={formState.tintura}
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
              onChange={onInputChange}
              value= { formState.observacion }
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
                (datosAEditar.boton === "Guardar") ? guardarTurnoEditado() : ""

              }}
            >{datosAEditar.boton}</button>
            <button 
              className="custom-btn-cargar btn-14"
              type='submit'
              // onClick={""}
            >Eliminar</button>
          </div>
        </form>
      </div>
    </>
  )
}
