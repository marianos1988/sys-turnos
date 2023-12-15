import React, { useEffect } from 'react'
import { Checkbox } from '@mui/material'
import "../styles/NuevoTurno.css"
import { useFormNew } from '../hooks/useFormNew'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'
import { IPicketDateSinNull, IPicketHourSinNull, IUserLogeado, InitialForm, SpinnerSlice } from '../types/interface'
import { useDispatch, useSelector } from "react-redux";
import { setNuevoTurno } from "../reducer/TurnosSlice"
import { activeSpinner, inactiveSpinner } from '../reducer/SpinnerSlice';

import { useNavigate } from 'react-router-dom'
import { mostrarCartelAdvertencia } from '../reducer/CartelesSlice'
import { Spinner } from '../components/Spinner'



export const NuevoTurno = () => {
  const { userLogeado } = useSelector((state:IUserLogeado) => state.users);
  const { stateSpinner } = useSelector((state:SpinnerSlice) => state.spinner);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialForm: InitialForm["initialForm"]= {
    id: 0,
    nombreCliente: "",
    telefono: "",
    fecha: "",
    hora: "",
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: ""
  }
  const tipoForm: InitialForm["tipoForm"] = "crear";

   
  const { formState, onInputChange, onDatePicker, onTimePicker, agregarCorte, agregarPeinado, agregarAlisado, agregarTintura, validarDatos, handleReloadForm} = useFormNew({initialForm,tipoForm});

  const { nombreCliente, telefono, fecha, hora, corte, peinado, alisado, tintura, observacion } = formState;

  const guardarTurno = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
    e.preventDefault();
    const datosValidados = validarDatos(formState);
    if(datosValidados) {
      // dispatch(setNuevoTurno(formState));
      try {
        dispatch(activeSpinner("nuevoTurno"));
        let objetoHeaderNewTurno = {
                
          method : "POST",
          body : JSON.stringify(
            formState
          ),
          headers : {
              "Content-type" : "application/json"
          }
        }
        const JSONNewTurno = await fetch(`http://localhost:3000/NuevoTurno`,objetoHeaderNewTurno);
        const newTurno = await JSONNewTurno.json();
        dispatch(inactiveSpinner("nuevoTurno"));
        if(newTurno === "Turno registrado") {
          handleReloadForm();
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "Datos incorrectos") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "Nombre demasiado largo") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "Nombre demasiado corto") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "El telefono son solo numeros") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "Ingrese una fecha") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "Ingrese una hora") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "Debes elegir un tipo de trabajo") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }
        else if(newTurno === "La observacion es muy larga") {
          dispatch(mostrarCartelAdvertencia(newTurno));
        }

      } catch (error) {
        console.log(error)
      }

    }
  }

  const handleValueDate = (value: IPicketDateSinNull) => {onDatePicker(value)};
  const handleValueTime = (value: IPicketHourSinNull) => {onTimePicker(value)};

  useEffect(()=>{
    if(userLogeado.logeado === false && userLogeado.user === "") {
    navigate("/");
    }
  })
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
            <div className='container-spinner-nuevo-turno'>
              <Spinner active={stateSpinner.stateNuevoTurno}></Spinner>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
