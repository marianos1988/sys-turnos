import { useReducer, useState } from 'react';
import { CheckboxAction, IEditarTurno, IPicketDateSinNull, IPicketHourSinNull, InitialForm, OnInputChange } from '../types/interface';
import { mostrarCartelAdvertencia } from "../reducer/CartelesSlice"
import { useDispatch } from 'react-redux';
import { cleanEditarTurno } from "../reducer/TurnosSlice"
import { useEditarTurno } from './useEditarTurno';

type Props = {
  initialForm:IEditarTurno["initialStateEditarTurno"]
  tipoForm: InitialForm["tipoForm"]
}
export const useFormEdit = ({ initialForm, tipoForm }:Props) => {
  const dispatchh = useDispatch();
  const [formState, setFormState] = useState(initialForm);
  const { finalizarEditarContacto } = useEditarTurno();

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

    const newHora:any = {
      $H: hora.$H,
      $m: hora.$m
    }
    setFormState({
      ...formState,
      hora: newHora
    });
  }

  const onDatePicker = (fecha:IPicketDateSinNull) => {

    const newFecha:any = {
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
      dispatchh(mostrarCartelAdvertencia("Nombre demasiado largo"));
      return false;  
    }
    else if(form.nombreCliente.length < 4) {
      dispatchh(mostrarCartelAdvertencia("Nombre demasiado corto"));
      return false; 
    }
    else if(validarSoloNumeros(form.telefono)) {
      dispatchh(mostrarCartelAdvertencia("El telefono son solo numeros"));
      return false;
    }
    else if(form.fecha === "") {
      dispatchh(mostrarCartelAdvertencia("Ingrese una fecha"));
      return false;
    }
    else if(form.hora === "") {
      dispatchh(mostrarCartelAdvertencia("Ingrese una hora"));
      return false;
    }
    else if(form.corte == false && form.peinado == false && form.alisado == false && form.tintura == false) {
      dispatchh(mostrarCartelAdvertencia("Debes elegir un tipo de trabajo"));
      return false;
    }
    else {
      if(tipoForm === "crear") {
        dispatchh(mostrarCartelAdvertencia("Turno registrado"));
      }
      else if(tipoForm === "editar") {
        dispatchh(mostrarCartelAdvertencia("Turno modificado"));
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

const saveEditarTurno = async (turno:IEditarTurno["initialStateEditarTurno"]) => {

  try {
    let objetoHeaderEditTurno = {
                
      method : "POST",
      body : JSON.stringify(
        turno
      ),
      headers : {
          "Content-type" : "application/json"
      }
    }
    const JSONTurnoEditado = await fetch(`http://localhost:3000/EditarTurno/id=${turno.id}`,objetoHeaderEditTurno);
    const turnoEditado = await JSONTurnoEditado.json();
    console.log(turnoEditado)
    
    if(
        turnoEditado === `No es valido el ID para editar` ||
        turnoEditado === `Datos incorrectos` ||
        turnoEditado === `Nombre demasiado largo` ||
        turnoEditado === "Nombre demasiado corto" ||
        turnoEditado === "El telefono son solo numeros" ||
        turnoEditado === "Ingrese una fecha" ||
        turnoEditado === "Ingrese una hora" ||
        turnoEditado === "Debes elegir un tipo de trabajo" ||
        turnoEditado === "La observacion es muy larga" ||
        turnoEditado === `No se puede conectar a la base de datos`
      ) {
          dispatchh(mostrarCartelAdvertencia(turnoEditado));
        }
      else if(turnoEditado === `Turno modificado`) {

        finalizarEditarContacto();
        dispatchh(cleanEditarTurno());
        dispatchh(mostrarCartelAdvertencia(turnoEditado));
      }

  } catch (error) {
    
  }
}

const handleCancelarEditarTurno = (turno:IEditarTurno["initialStateEditarTurno"]) => {

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
    handleCancelarEditarTurno,
    saveEditarTurno

  }
}
