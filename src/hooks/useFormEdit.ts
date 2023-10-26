import { useContext } from 'react';
import { CartelAdvertenciaContext } from '../context/CartelAdvertenciaContext';
import { useReducer, useState } from 'react';
import { CheckboxAction, ICartelAdvertenciaContext, IEditarTurno, IPicketDateSinNull, IPicketHourSinNull, InitialForm, InitialFormEdit, OnInputChange } from '../types/interface';


type Props = {
  initialForm:IEditarTurno["editarTurno"]
  tipoForm: InitialForm["tipoForm"]
}
export const useFormEdit = ({ initialForm, tipoForm }:Props) => {

  const { handleMostrarCartelAdvertencia } = useContext<ICartelAdvertenciaContext>( CartelAdvertenciaContext)
  const [formState, setFormState] = useState(initialForm);


  const reducerCheckbox = (state:InitialForm["initialForm"], action:CheckboxAction) => {

    switch(action.type) {
      case "[Checkbox] corte" : setFormState(
        item => ({...item, corte: !item.corte })
      );
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

  const [checkboxx, dispatch]:any = useReducer<any>(reducerCheckbox, formState);

  const agregarCorte = () =>{
    const action= {
      type:"[Checkbox] corte"
    }
    dispatch(action);
  }
  const agregarPeinado = () => {
    const action:{type:string} = {
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


  const onTimePicker = (hora:IPicketHourSinNull) => {

    const newHora = {
      $H: hora.$H,
      $m: hora.$m
    }
    setFormState({
      ...formState,
      hora: newHora
    });
  }

  const onDatePicker = (fecha:IPicketDateSinNull) => {

    const newFecha = {
      $D: fecha.$D,
      $M:fecha.$M,
      $y:fecha.$y
    }
    setFormState({
      ...formState,
      fecha: newFecha
    });
  }

  const onInputChange = ({ target }:OnInputChange)=>{

    const {name,value} = target;

    setFormState({
      ...formState,
      [name]: value 
    })
    
  }

  const validarDatos = (form: InitialForm["initialForm"]) => {

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
      if(tipoForm === "crear") {
        handleMostrarCartelAdvertencia("Turno registrado");
      }
      else if(tipoForm === "editar") {
        handleMostrarCartelAdvertencia("Turno modificado");
      }

      return true;
    }


  }

  function validarSoloNumeros(numero: any) {
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

const handleCancelarEditarTurno = (turno:IEditarTurno["editarTurno"]) => {

  setFormState(
    { 
      id: turno.id,
      nombreCliente: turno.nombreCliente,
      telefono: turno.telefono,
      fecha: turno.fecha,
      hora: turno.hora,
      corte: turno.corte,
      peinado: turno.peinado,
      alisado: turno.alisado,
      tintura: turno.tintura,
      observacion: turno.observacion
    }
  )
}


return {
    formState,
    onInputChange,
    onDatePicker,
    onTimePicker,
    agregarAlisado,
    agregarCorte,
    agregarPeinado,
    agregarTintura,
    validarDatos,
    handleCancelarEditarTurno

  }
}
