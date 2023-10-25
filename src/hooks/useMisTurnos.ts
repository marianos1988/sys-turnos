import { useContext,useState } from "react";
import { NuevoTurnoContext } from "../context/NuevoTurnoContext"
import { INuevoTurnoContext, IPicketEdit } from "../types/interface";



export const useMisTurnos = () => {

  const { listaTurnos } = useContext<INuevoTurnoContext>(NuevoTurnoContext);
  const [listaFiltrada, setListaFiltrada] = useState<any>([]);


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
    listaTurnos.forEach((turno: { fecha: any; }) => {
      if((dia == turno.fecha.$D) && (mes == turno.fecha.$M) && (anio == turno.fecha.$y)){
        lista.push(turno);
      }
    })
    setListaFiltrada(lista);
  }

  return {
    mostrarFecha,
    mostrarHora,
    handleSelectDate,
    listaFiltrada,

  }
}