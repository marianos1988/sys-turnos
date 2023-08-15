import { useState } from 'react'

export const useTimePickerComponent = () => {
  const horaHoy = new Date();
  const horaHoyFinal = horaHoy.toString();
  const [valor, setValor] = useState(horaHoyFinal);

  const handleOnChange = (newTime) => {
      const { $d } = newTime;
      setValor($d);
  }
  return {
    handleOnChange,
    valor,
}
  }

