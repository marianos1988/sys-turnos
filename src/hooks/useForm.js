import { useContext } from 'react';
import { CartelAdvertenciaContext } from '../context/CartelAdvertenciaContext';
import { useReducer, useState } from 'react';

export const useForm = ( initialForm ) => {

  const { handleMostrarCartelAdvertencia } = useContext( CartelAdvertenciaContext )
  const [formState, setFormState] = useState(initialForm);

  const reducerCheckbox = (state, action) => {

    switch(action.type) {
      case "[Checkbox] corte" : setFormState(
        item => ({...item, corte: !item.corte })
      )
;
      break;
      case "[Checkbox] peinado" : setFormState(
        item => ({...item, peinado: !item.peinado })
      );
      break;
      case "[Checkbox] alisado" : setFormState(
        item => ({...item, alisado: !item.alisado })
      );
      break;
      case "[Checkbox] tintura" : setFormState(
        item => ({...item, tintura: !item.tintura })
      );
      break;
    }
  }

  const [listCheckbox, dispatch] = useReducer(reducerCheckbox, formState);

  const agregarCorte = () => {
    const action = {
      type:"[Checkbox] corte"
    }
    dispatch(action);
  }
  const agregarPeinado = () => {
    const action = {
      type:"[Checkbox] peinado"
    }
    dispatch(action);
  }
  const agregarAlisado = () => {
    const action = {
      type:"[Checkbox] alisado"
    }
    dispatch(action);
  }
  const agregarTintura = () => {
    const action = {
      type:"[Checkbox] tintura"
    }
    dispatch(action);
  }


  const onTimePicker = (hora) => {

    setFormState({
      ...formState,
      hora: hora
    });
  }

  const onDatePicker = (fecha) => {
    
    setFormState({
      ...formState,
      fecha: fecha
    });
  }

  const onInputChange = ({ target })=>{

    const {name,value} = target;

    setFormState({
      ...formState,
      [name]: value 
    })
    
  }

  const validarDatos = (form) => {

    if(form.nombreCliente.length > 25) {
      handleMostrarCartelAdvertencia("Nombre demasiado largo");
      return false;  
    }
    else if(form.nombreCliente.length < 4) {
      handleMostrarCartelAdvertencia("Nombre demasiado corto");
      return false; 
    }
    else if(validarSoloNumeros(form.telefono)) {
      handleMostrarCartelAdvertencia("El telefono son solo numeros");
      return false;
    }
    else if(form.fecha === "") {
      handleMostrarCartelAdvertencia("Ingrese una fecha");
      return false;
    }
    else if(form.hora === "") {
      handleMostrarCartelAdvertencia("Ingrese una hora");
      return false;
    }
    else if(!(form.corte === true) && !(form.peinado === true) && !(form.alisado === true) && !(form.tintura === true)) {
      handleMostrarCartelAdvertencia("Debes elegir un tipo de trabajo");
      return false;
    }
    else {
      handleMostrarCartelAdvertencia("Turno registrado");
      return true;
    }


  }

  function validarSoloNumeros(numero) {
    // Valida si se cargo un numero True = No son numeros, False = Son numeros
    let verificaNumero = numero;
    let validar = false;
    for(let digito in verificaNumero){
        if(!(verificaNumero[digito] >= 0) && !(verificaNumero[digito] <= 9)) {
            validar = true;
            return validar;
        } 
    }
    return validar;
    
}
 
  //Destructura el formState para exportar directacd femente
  return {
    formState,
    onInputChange,
    onDatePicker,
    onTimePicker,
    agregarAlisado,
    agregarCorte,
    agregarPeinado,
    agregarTintura,
    validarDatos
    

  }
}
