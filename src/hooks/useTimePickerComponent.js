import { useState } from 'react'

export const useTimePickerComponent = () => {
  const horaHoy = new Date();
  const horaHoyFinal = horaHoy.toString();
  const [valor, setValor] = useState(horaHoyFinal);

  const handleOnChange = (newTime) => {
      const { $d } = newTime;
      const hora = new Date($d);
      const horaFinal = hora.toString()
      setValor(horaFinal);  
  }
  return {
    handleOnChange,
    valor,
}
  }

