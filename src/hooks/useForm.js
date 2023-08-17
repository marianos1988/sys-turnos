
import { useState } from 'react';

export const useForm = ( initialForm ) => {

  const [formState, setFormState] = useState(initialForm);
  
  

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

  const onCheckboxChange = (checked) => {
    
  }

  //Destructura el formState para exportar directacd femente
  return {
    formState,
    onInputChange,
    onDatePicker,
    onTimePicker,
    onCheckboxChange

  }
}
