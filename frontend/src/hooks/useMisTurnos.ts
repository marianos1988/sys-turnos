import { useState } from "react";
import { mostrarCartelAdvertencia } from '../reducer/CartelesSlice';
import { useDispatch } from "react-redux";




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
  const dispatch = useDispatch();

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
      mes: fecha.$M+1,
      anio: fecha.$y
    }
    setFechaFiltrada(date)
  }

  const searchDateFilter = async (fecha: { fecha: number; mes: number; anio: number; }) => {

    const URL = `http://localhost:3000/MisTurnos/Search/${fecha.anio}-${fecha.mes}-${fecha.fecha}`;
    const JSONGetDate = await fetch(URL);
    const getDate = await JSONGetDate.json();
    if(getDate === `La fecha es incorrecta` || getDate === `El mes es incorrecto` || getDate === `El año es incorrecto` || getDate === `No hay turnos`) {
      dispatch(mostrarCartelAdvertencia(getDate));
      return [];
    } else {
      return getDate;
    }
  }

  return {
    handleSelectDate,
    getAllListaTurnos,
    fechaFiltrada,
    searchDateFilter,

  }
}
