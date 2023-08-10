
import { useState } from 'react';

export const useForm = (initialForm = {}, check = false) => {

  const [formState, setFormState] = useState(initialForm);
  const [checked, setChecked] = useState(check)


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
    onInputChange

  }
}
