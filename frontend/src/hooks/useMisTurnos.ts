import { useState } from "react";
import { IPicketDate,IPicketHour } from "../types/interface";




interface ListaTurnos {
  turnos: {
    listaTurnos: {
      id: any,
      telefono?: string,
      nombreCliente: string,
      fecha: IPicketDate,
      hora: IPicketHour,
      corte: boolean,
      peinado: boolean,
      alisado: boolean,
      tintura: boolean,
      observacion?: string
    }[]
  }

}

export const useMisTurnos = () => {

  const [listaFiltrada, setListaFiltrada] = useState<any>([]);

  const getAllListaTurnos = async () => {
    const JSONListaTurnos = await fetch("http://localhost:3000/MisTurnos");
    const newListaTurnos = await JSONListaTurnos.json();
    // // dispatch(setAllListaTurnos(newListaTurnos));
    if(newListaTurnos.lenght !== 0) {
     return newListaTurnos; 
    }

  }

  const handleSelectDate = (fecha: { $D: number; $M: number; $y: number; }) => {
    setListaFiltrada([])
    const dia = fecha.$D;
    const mes = fecha.$M;
    const anio = fecha.$y;
    let lista:any[]=[];
    // listaTurnos.forEach((turno: { fecha: any; }) => {
    //   if((dia == turno.fecha.$D) && (mes == turno.fecha.$M) && (anio == turno.fecha.$y)){
    //     lista.push(turno);
    //   }
    // })
    // setListaFiltrada(lista);
  }

  return {
    handleSelectDate,
    getAllListaTurnos,
    listaFiltrada
  }
}
