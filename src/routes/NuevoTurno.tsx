import React, { useContext } from 'react'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
import { Checkbox } from '@mui/material'
import "../styles/NuevoTurno.css"
import { useForm } from '../hooks/useForm'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import { IPicketDate, IPicketDateSinNull, IPicketHour, IPicketHourSinNull, InitialForm } from '../types/interface'
import { useDispatch } from "react-redux";
import { setNuevoTurno } from "../reducer/TurnosSlice"



export const NuevoTurno = () => {


  const dispatch = useDispatch();
  // const { handleSetListaTurnos } = useContext( NuevoTurnoContext);

  const initialForm: InitialForm["initialForm"]= {
    id: 0,
    nombreCliente: "",
    telefono: "",
    fecha: null,
    hora: null,
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: ""
  }
  const tipoForm: InitialForm["tipoForm"] = "crear";

   
  const { formState, onInputChange, onDatePicker, onTimePicker, agregarCorte, agregarPeinado, agregarAlisado, agregarTintura, validarDatos, handleReloadForm} = useForm({initialForm,tipoForm});

  const { nombreCliente, telefono, fecha, hora, corte, peinado, alisado, tintura, observacion } = formState;

  const guardarTurno = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
    e.preventDefault();
    const datosValidados = validarDatos(formState);
    if(datosValidados) {
      // handleSetListaTurnos(formState); // Enviar al backend
      handleReloadForm();

      dispatch(setNuevoTurno(formState));

    }
  }

  const handleValueDate = (value: IPicketDateSinNull) => {onDatePicker(value)};
  const handleValueTime = (value: IPicketHourSinNull) => {onTimePicker(value)};


  return (
    <>
      <div className='container-nuevo-turno'>
        <div className='group-tittle-nuevoTurno'>
          <h2>Nuevo Turno:</h2>
        </div>
        <form className='submit'>
          <div className='group-input'>
            <h3>Nombre Cliente: </h3>
            <input 
              type="text"
              placeholder='Ingrese Nombre'
              name='nombreCliente'
              value= { nombreCliente }
              onChange={onInputChange}
            />
          </div>
          <div className='group-input'>
            <h3>Telefono: </h3>
            <input 
              placeholder='Ingrese telefono'
              type="number"
              name='telefono'
              value= { telefono }
              onChange={onInputChange}
            />
          </div>
          <div className='group-input'>
            <h3>Seleccionar Fecha</h3>
                <div className="datepicker">
                  <DatePickerComponent
                    name="fecha"
                    handleValue={handleValueDate}
                    value={fecha}
                    disabled={false}
                  />
                </div>
          </div>
          <div className='group-input'>
            <h3>Seleccionar Hora:</h3>
            <div className='timepicker'>
              <TimePickerComponent 
                name="hora"
                handleValue = {handleValueTime}
                value={hora}
                disabled={false}
              />
            </div>
          </div>
          <div className='group-input'>
            <h3>Tipo de Trabajo</h3>
            <div className='group-checkbox'>
              <h4>Corte: </h4>
              <Checkbox
              color="success"
              className='checkbox-tipo-trabajo'
              onChange={agregarCorte}
              value={corte}
              checked={corte}
              />
              <h4>Peinado: </h4>
              <Checkbox 
                color="success"
                className='checkbox-tipo-trabajo'
                onChange={agregarPeinado}
                value={peinado}
                checked={peinado}
              />
              <h4>Alisado: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                onChange={agregarAlisado}
                value={alisado}
                checked={alisado}
              />
              <h4>Tintura: </h4>
              <Checkbox 
                color="success" 
                className='checkbox-tipo-trabajo'
                onChange={agregarTintura}
                value={tintura}
                checked={tintura}
              />
            </div>
          </div>
          <div className='group-input'>
            <h3>Observacion</h3>
            <input
              className='input-observacion' 
              type="text"
              name='observacion'
              placeholder='Ingrese una observacion'
              onChange={onInputChange}
              value= { observacion }
            />
          </div>
          <div className='group-button-nuevo-turno'>
            <button 
              className="custom-btn-cargar btn-14"
              type='submit'
              onClick={guardarTurno }
            >Crear Turno</button>
          </div>
        </form>
      </div>
    </>
  )
}
