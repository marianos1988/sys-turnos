import { useState } from 'react'

export const useDatePickerComponent = () => {
    const fechaHoy = new Date();
    const fechaHoyFinal = fechaHoy.toString();

    const [valor, setValor] = useState(fechaHoyFinal);

    const handleOnChange = (newDate) => {
      const { $d } = newDate;
      const fecha = new Date($d);
      const fechaFinal = fecha.toString()
      setValor(fechaFinal);
    
    }

  return {

    handleOnChange,
    valor,

  }
}
