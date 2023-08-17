import { useContext } from 'react'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
import { Checkbox } from '@mui/material'
import "../styles/NuevoTurno.css"
import { useForm } from '../hooks/useForm'
import { DatePickerComponent } from '../components/DatePickerComponent'
import { TimePickerComponent } from '../components/TimePickerComponent'

export const NuevoTurno = () => {

  const { handleSetListaTurnos } = useContext( NuevoTurnoContext );

  const initialForm = {
    nombreCliente: "",
    telefono: "",
    fecha: "",
    hora: "",
    corte: "",
    peinado: "",
    alisado: "",
    tintura: "",
    observacion: ""

  }
  const { formState, onInputChange, onDatePicker, onTimePicker, onCheckboxChange } = useForm(initialForm);
  const { nombreCliente, telefono, fecha, hora, observacion } = formState;

  const guardarTurno = (e) => {
    e.preventDefault();
    console.log(formState);
    handleSetListaTurnos(formState);
  }

  const handleValueDate = (value) => {onDatePicker(value)};
  const handleValueTime = (value) => {onTimePicker(value)};

  return (
    <div className='container-nuevo-turno'>
      <div className='group-tittle-nuevoTurno'>
        <h2>Nuevo Turno:</h2>
      </div>
      <form>
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
              Value = {fecha}   
            />
          </div>          
        </div>
        <div className='group-input'>
          <h3>Seleccionar Hora:</h3>
          <div className='timepicker'>
            <TimePickerComponent 
              name="hora"
              handleValue = {handleValueTime}
              Value= {hora}
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
             onChange={onCheckboxChange}
             checked={false}

            />
            <h4>Peinado: </h4>
            <Checkbox 
              color="success"
              className='checkbox-tipo-trabajo'
              onChange={onCheckboxChange}
              checked={false}
            />
            <h4>Alisado: </h4>
            <Checkbox 
              color="success" 
              className='checkbox-tipo-trabajo'
              onChange={onCheckboxChange}
              checked={false}
            />
            <h4>Tintura: </h4>
            <Checkbox 
              color="success" 
              className='checkbox-tipo-trabajo'
              onChange={onCheckboxChange}
              checked={false} 
            />
          </div>
        </div>
        <div className='group-input'>
          <h3>Observacion</h3>
          <input
            className='input-observacion' 
            type="text"
            name='observacion'
            onChange={onInputChange}
            value= { observacion }
          />
        </div>
        <div className='group-button-nuevo-turno'>
        <button 
          className="custom-btn-cargar btn-14"
          onClick={guardarTurno}
        >Crear Turno</button>
        </div>
      </form>
    </div>
  )
}
