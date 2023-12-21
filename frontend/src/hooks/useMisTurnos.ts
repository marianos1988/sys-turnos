import { useState } from "react";
import { mostrarCartelAdvertencia } from '../reducer/CartelesSlice';
import { useDispatch } from "react-redux";


export const useMisTurnos = () => {

  const [fechaFiltrada, setFechaFiltrada] = useState<any>({});
  const dispatch = useDispatch();

  const getAllListaTurnos = async () => {

    try {
      const JSONListaTurnos = await fetch("http://localhost:3000/MisTurnos");
      const newListaTurnos = await JSONListaTurnos.json();
      if(newListaTurnos === "No se puede conectar a la base de datos") {
        dispatch(mostrarCartelAdvertencia(newListaTurnos));
      } else {
        if(newListaTurnos.lenght !== 0) {
          return newListaTurnos; 
         }
      }

    } catch (error) {
      dispatch(mostrarCartelAdvertencia("Error al conectar con el servidor"));
      console.log(error)
    }

  }

  const handleSelectDate = (fecha: { $D: number; $M: number; $y: number; }) => {
    setFechaFiltrada({})
    const date = {
      fecha: fecha.$D,
      mes: fecha.$M+1,
      anio: fecha.$y
    }

    setFechaFiltrada(date);
  }

  const searchDateFilter = async (fecha: { fecha: number; mes: number; anio: number; }) => {

    try {
      const URL = `http://localhost:3000/MisTurnos/Search/${fecha.anio}-${fecha.mes}-${fecha.fecha}`;
      const JSONGetDate = await fetch(URL);
      const getDate = await JSONGetDate.json();
      if(getDate === `La fecha es incorrecta` || getDate === `El mes es incorrecto` || getDate === `El año es incorrecto` || getDate === `No existen turnos`) {
        dispatch(mostrarCartelAdvertencia(getDate));
        return undefined;
      }
      else if(getDate === "No se puede conectar a la base de datos") {
        dispatch(mostrarCartelAdvertencia(getDate));
      }
      else {
        return getDate;
      }
    } catch (error) {
      dispatch(mostrarCartelAdvertencia("Error al conectar con el servidor"));
      console.log(error);
      return undefined;
    }

  }

  return {
    handleSelectDate,
    getAllListaTurnos,
    fechaFiltrada,
    searchDateFilter,

  }
}
