
import React, { useEffect } from 'react'
import "../styles/EditarTurno.css"
import { Checkbox } from '@mui/material'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import dayjs from 'dayjs';
import { useSelector, useDispatch } from "react-redux";
import { useEditarTurno } from '../hooks/useEditarTurno'
import { useFormEdit } from '../hooks/useFormEdit'
import { IEditarTurno, IPicketDateSinNull, IPicketHourSinNull, IUserLogeado, InitialFormEdit, SpinnerSlice } from '../types/interface'
import { mostrarCartelConfirmar } from '../reducer/CartelesSlice'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

export const EditarTurno = () => {
  const { userLogeado } = useSelector((state:IUserLogeado) => state.users);
  const { stateSpinner } = useSelector((state:SpinnerSlice)=> state.spinner)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { editarTurno } = useSelector((state:IEditarTurno) => state.turnos);

  const  { iniciarEditarContacto, finalizarEditarContacto, datosAEditar, parseo$mHoraEdit, parseo$HHoraEdit, parseo$DFechaEdit, parseo$MFechaEdit, parseo$yFechaEdit } = useEditarTurno();

  const tipoForm:InitialFormEdit["tipoForm"] = "editar";

  const initialForm = {
    id:editarTurno.id,
    nombreCliente: editarTurno.nombreCliente,
    telefono: editarTurno.telefono,
    fecha: {
      $D: parseo$DFechaEdit(editarTurno.fecha),
      $M: parseo$MFechaEdit(editarTurno.fecha),
      $y: parseo$yFechaEdit(editarTurno.fecha)
    },
    hora: {
      $m: parseo$mHoraEdit(editarTurno.hora),
      $H: parseo$HHoraEdit(editarTurno.hora)
    },
    corte: editarTurno.corte,
    peinado: editarTurno.peinado,
    alisado: editarTurno.alisado,
    tintura: editarTurno.tintura,
    observacion: editarTurno.observacion
  }

  const { onInputChange, formState, onDatePicker, onTimePicker, agregarCorte, agregarPeinado, agregarAlisado, agregarTintura, validarDatos, handleCancelarEditarTurno, saveEditarTurno } = useFormEdit({initialForm,tipoForm});


  const handleValueDate = (value:IPicketDateSinNull) => {onDatePicker(value)};
  const handleValueTime = (value:IPicketHourSinNull) => {onTimePicker(value)};

  const guardarTurnoEditado = () => {
    const datosValidados = validarDatos(formState);
    if(datosValidados) {
      saveEditarTurno(formState);
    }
  }

  const cancelarTurnoEditado = () => {
    handleCancelarEditarTurno(initialForm);
    finalizarEditarContacto();
  }

  const eliminarTurno = () => {

    dispatch(mostrarCartelConfirmar("¿Quieres eliminar el turno?"));

  }
  useEffect(()=>{
      if(userLogeado.logeado === false && userLogeado.user === "") {
      navigate("/");
    }
  })
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
                value={dayjs(`${formState.fecha.$y}-${formState.fecha.$M}-${formState.fecha.$D}`)}
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
                value={dayjs(`0000-01-01T${formState.hora.$H}:${formState.hora.$m}`)}
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
                iniciarEditarContacto();
                (datosAEditar.boton1 === "Guardar") && guardarTurnoEditado()
              }}
            >{datosAEditar.boton1}</button>
            <button 
              className="custom-btn-cargar btn-14"
              type='submit'
              onClick={(e)=>{
                e.preventDefault();
                (datosAEditar.boton2 === "Cancelar")
                  ? cancelarTurnoEditado()
                  : (datosAEditar.boton2 === "Eliminar") && eliminarTurno()
              }}
            >{datosAEditar.boton2}</button>
            <div className='container-spinner-editar-turno'>
              <Spinner active={stateSpinner.stateEditarTurno}></Spinner>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
