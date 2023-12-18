import { useState } from "react";
import { IPicketEdit, IPicketDate,IPicketHour } from "../types/interface";
import { useSelector } from "react-redux";

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

    return newListaTurnos;

  }
  
  const agregarCero = (num: number):string | number => {
    if(num < 10) {
      return `0${num}`
    }
    return num;
  }

  const mostrarFecha = (fecha:IPicketEdit) => {
    const { $D, $M, $y } = fecha
    const fechaFinal = `${agregarCero($D)}-${agregarCero($M+1)}-${$y}`;
    return fechaFinal;
    
  }

  const mostrarHora = (hora: IPicketEdit) => {
    const {$H, $m} = hora;
    const horaFinal = `${agregarCero($H)}:${agregarCero($m)}hs`;
    return horaFinal;
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
    setListaFiltrada(lista);
  }

  return {
    mostrarFecha,
    mostrarHora,
    handleSelectDate,
    getAllListaTurnos,
    listaFiltrada
  }
}
