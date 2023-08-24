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
    corte: false,
    peinado: false,
    alisado: false,
    tintura: false,
    observacion: ""
  }


  const { formState, onInputChange, onDatePicker, onTimePicker, agregarCorte, agregarPeinado, agregarAlisado, agregarTintura, validarDatos, handleReloadForm, handleReloadForm2, reloadForm} = useForm(initialForm);

  const { nombreCliente, telefono, fecha, hora, observacion } = formState;

  const guardarTurno = (e) => {
    e.preventDefault();
    const datosValidados = validarDatos(formState);
    if(datosValidados) {
      handleSetListaTurnos(formState); // Enviar al backend
      handleReloadForm();
      setInterval(handleReloadForm2,500);
    }
  }

  const handleValueDate = (value) => {onDatePicker(value)};
  const handleValueTime = (value) => {onTimePicker(value)};


  return (
    <>
      {
        (reloadForm)
        ?
          (
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
                        />
                      </div>
                </div>
                <div className='group-input'>
                  <h3>Seleccionar Hora:</h3>
                  <div className='timepicker'>
                    <TimePickerComponent 
                      name="hora"
                      handleValue = {handleValueTime}
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
                    />
                    <h4>Peinado: </h4>
                    <Checkbox 
                      color="success"
                      className='checkbox-tipo-trabajo'
                      onChange={agregarPeinado}
                    />
                    <h4>Alisado: </h4>
                    <Checkbox 
                      color="success" 
                      className='checkbox-tipo-trabajo'
                      onChange={agregarAlisado}
                    />
                    <h4>Tintura: </h4>
                    <Checkbox 
                      color="success" 
                      className='checkbox-tipo-trabajo'
                      onChange={agregarTintura}
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
                onClick={guardarTurno}
              >Crear Turno</button>
              </div>
            </form>
          </div>
          )
        :
          (<div></div>) 
      } 
    </>
  )
}
