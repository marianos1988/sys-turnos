import { useContext,useState } from "react";
import { NuevoTurnoContext } from "../context/NuevoTurnoContext";


export const useMisTurnos = () => {

  const { listaTurnos } = useContext(NuevoTurnoContext);
  const [listaFiltrada, setListaFiltrada] = useState([])

  const agregarCero = (num) => {
    if(num < 10) {
      return `0${num}`
    }
    return num;
  }

  const mostrarFecha = (fecha) => {
    const { $D, $M, $y } = fecha
    const fechaFinal = `${agregarCero($D)}-${agregarCero($M+1)}-${$y}`;
    return fechaFinal;
    
  }

  const mostrarHora = (hora) => {
    const {$H, $m} = hora;
    const horaFinal = `${agregarCero($H)}:${agregarCero($m)}hs`;
    return horaFinal;
  }

  const handleSelectDate = (fecha) => {
    setListaFiltrada([])
    const dia = fecha.$D;
    const mes = fecha.$M;
    const anio = fecha.$y;
    
    listaTurnos.forEach(turno => {
      if((dia == turno.fecha.$D) && (mes == turno.fecha.$M) && (anio == turno.fecha.$y)){
        setListaFiltrada([...listaFiltrada,turno]);
      }
    })
  }

  return {
    mostrarFecha,
    mostrarHora,
    handleSelectDate,
    listaFiltrada
  }
}
