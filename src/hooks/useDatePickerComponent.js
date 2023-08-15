import { useState } from 'react'

export const useDatePickerComponent = () => {
    const fechaHoy = new Date();
    const fechaHoyFinal = fechaHoy.toString();

    const [valor, setValor] = useState(fechaHoyFinal);

    const handleOnChange = (newDate) => {
      const { $d } = newDate;
      setValor($d);
    
    }

  return {

    handleOnChange,
    valor,

  }
}
