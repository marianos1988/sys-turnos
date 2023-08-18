
import { useReducer, useState } from 'react';

export const useForm = ( initialForm ) => {

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
 


  //Destructura el formState para exportar directacd femente
  return {
    formState,
    onInputChange,
    onDatePicker,
    onTimePicker,
    agregarAlisado,
    agregarCorte,
    agregarPeinado,
    agregarTintura
    

  }
}
