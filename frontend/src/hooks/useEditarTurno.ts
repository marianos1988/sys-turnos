import { useState } from "react"

export const useEditarTurno = () => {

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

  return {
    iniciarEditarContacto,
    finalizarEditarContacto,
    datosAEditar
  }
}
