import { useState } from 'react'

export const useDatePickerComponent = () => {

    const [valor, setValor] = useState();

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
