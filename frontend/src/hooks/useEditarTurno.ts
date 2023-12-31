import { useState } from "react"
import { useDispatch } from "react-redux";
import { activeSpinner, inactiveSpinner} from "../reducer/SpinnerSlice"
import { mostrarCartelAdvertencia } from "../reducer/CartelesSlice";
import { cleanEditarTurno } from "../reducer/TurnosSlice"
import { useNavigate } from 'react-router-dom'

export const useEditarTurno = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialEdicion = {
    boton1: "Editar",
    boton2: "Eliminar",
    desactivarCampos: true,
    editando: false
  }
  const [datosAEditar, setDatosAEditar] = useState(initialEdicion)


  const iniciarEditarContacto = () => {

    if(datosAEditar.boton1 === "Editar") {

      setDatosAEditar({
        boton1: "Guardar",
        boton2: "Cancelar",
        desactivarCampos: false,
        editando: true

      })
    }
  }

  const finalizarEditarContacto = () => {
    if(datosAEditar.boton1 === "Guardar") {

      setDatosAEditar({
        boton1: "Editar",
        boton2: "Eliminar",
        desactivarCampos: true,
        editando: false
      })
    }
  }

  const parseo$mHoraEdit = (hora:string): number=>{
    const new$m = hora.slice(3,5);
    return parseInt(new$m);
  }

  const parseo$HHoraEdit = (hora:string): number => {
    const new$H = hora.slice(0,2)
    return parseInt(new$H);
  }

  const parseo$DFechaEdit = (fecha:string): number => {
    const new$D = fecha.slice(0,2)
    return parseInt(new$D);
  }

  const parseo$MFechaEdit = (fecha:string): number => {
    const new$M = fecha.slice(3,5);
    return parseInt(new$M);
  }

  const parseo$yFechaEdit = (fecha:string): number => {
    const new$y = fecha.slice(6,10);
    return parseInt(new$y);
  }

  const deleteEditarTurno = async (id:string) => {

    try {
      dispatch(activeSpinner("editarTurno"));
      const JSONIDDelete = await fetch(`http://localhost:3000/EditarTurno/id=${id}`);
      const IDDelete = await JSONIDDelete.json();
      dispatch(inactiveSpinner("editarTurno"));
      if(IDDelete === `Turno eliminado`) {
        dispatch(mostrarCartelAdvertencia(IDDelete));
        dispatch(cleanEditarTurno());
        navigate("/MisTurnos");

      }
      else if(IDDelete === `El numero ID es incorrecto`) {
        dispatch(mostrarCartelAdvertencia(IDDelete));
      }
      
    } catch (error) {
      
    }
  }

  return {
    iniciarEditarContacto,
    finalizarEditarContacto,
    datosAEditar,
    parseo$mHoraEdit,
    parseo$HHoraEdit,
    parseo$DFechaEdit,
    parseo$MFechaEdit,
    parseo$yFechaEdit,
    deleteEditarTurno
  }
}
