// import { useContext } from 'react'
import React from 'react'
import "../styles/EditarTurno.css"
import { Checkbox } from '@mui/material'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import dayjs from 'dayjs';
import { EditarTurnoContext } from '../context/EditarTurnoContext'
import { useSelector, useDispatch } from "react-redux";
import { useEditarTurno } from '../hooks/useEditarTurno'
import { useFormEdit } from '../hooks/useFormEdit'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
// import { CartelConfirmarContext } from '../context/CartelConfirmarContext'
import { IEditarTurno, ICartelConfirmarContext, IPicket, IEditarTurnoContext, IPicketDateSinNull, IPicketHourSinNull, InitialFormEdit } from '../types/interface'
import { cleanEditarTurno, saveEditarTurno } from "../reducer/TurnosSlice"
import { mostrarCartelAdvertencia } from "../reducer/CartelesSlice"
import { mostrarCartelConfirmar } from '../reducer/CartelesSlice'

export const EditarTurno = () => {
  const dispatch = useDispatch();
  // const { handleMostrarCartelConfirmar, aplicarCambios }= useContext<ICartelConfirmarContext>(CartelConfirmarContext);
  const { editarTurno } = useSelector((state:IEditarTurno) => state.turnos);
  // const { turnoParaEditar } = useContext<IEditarTurnoContext>(EditarTurnoContext);
  const  { iniciarEditarContacto, finalizarEditarContacto, datosAEditar } = useEditarTurno();
  // const {handleModificarTurno } = useContext(NuevoTurnoContext)
  const tipoForm:InitialFormEdit["tipoForm"] = "editar";

  const initialForm = {

    nombreCliente: editarTurno.nombreCliente,
    telefono: editarTurno.telefono,
    fecha: editarTurno.fecha,
    hora: editarTurno.hora,
    corte: editarTurno.corte,
    peinado: editarTurno.peinado,
    alisado: editarTurno.alisado,
    tintura: editarTurno.tintura,
    observacion: editarTurno.observacion
  }



  const { onInputChange, formState, onDatePicker, onTimePicker, agregarCorte, agregarPeinado, agregarAlisado, agregarTintura, validarDatos, handleCancelarEditarTurno } = useFormEdit({initialForm,tipoForm});

  

  const handleValueDate = (value:IPicketDateSinNull) => {onDatePicker(value)};
  const handleValueTime = (value:IPicketHourSinNull) => {onTimePicker(value)};

  const guardarTurnoEditado = () => {
    const datosValidados = validarDatos(formState);
    if(datosValidados) {
      finalizarEditarContacto();
      // handleModificarTurno(formState)
      dispatch(saveEditarTurno(formState));
      dispatch(cleanEditarTurno());
      dispatch(mostrarCartelAdvertencia("Turno modificado"));

    }
  }

  const cancelarTurnoEditado = () => {
    handleCancelarEditarTurno(editarTurno);
    finalizarEditarContacto();
  }

  const eliminarTurno = () => {

    dispatch(mostrarCartelConfirmar("¿Quieres eliminar el turno?"));

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
          </div>
        </form>
      </div>
    </>
  )
}
