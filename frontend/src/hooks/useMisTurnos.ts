import { useState } from "react";
import { IPicketDate,IPicketHour } from "../types/interface";




// interface ListaTurnos {
//   turnos: {
//     listaTurnos: {
//       id: any,
//       telefono?: string,
//       nombreCliente: string,
//       fecha: IPicketDate,
//       hora: IPicketHour,
//       corte: boolean,
//       peinado: boolean,
//       alisado: boolean,
//       tintura: boolean,
//       observacion?: string
//     }[]
//   }

// }

export const useMisTurnos = () => {

  const [fechaFiltrada, setFechaFiltrada] = useState<any>({});

  const getAllListaTurnos = async () => {
    const JSONListaTurnos = await fetch("http://localhost:3000/MisTurnos");
    const newListaTurnos = await JSONListaTurnos.json();

    if(newListaTurnos.lenght !== 0) {
     return newListaTurnos; 
    }

  }

  const handleSelectDate = (fecha: { $D: number; $M: number; $y: number; }) => {
    setFechaFiltrada({})
    const date = {
      fecha: fecha.$D,
      mes: fecha.$M,
      anio: fecha.$y
    }
    setFechaFiltrada(date)
  }

  return {
    handleSelectDate,
    getAllListaTurnos,
    fechaFiltrada
  }
}
