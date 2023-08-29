import { useState } from "react"

export const useEditarTurno = () => {

  const initialEdicion = {
    boton: "Editar",
    desactivarCampos: true,
    editando: false
  }
  const [datosAEditar, setDatosAEditar] = useState(initialEdicion)


  const editarContacto = () => {

    if(datosAEditar.boton === "Editar") {

      setDatosAEditar({
        boton: "Guardar",
        desactivarCampos: false,
        editando: true

      })
    }
    else if(datosAEditar.boton === "Guardar") {
      setDatosAEditar({
        boton: "Editar",
        desactivarCampos: true,
        editando: false
      })
    }

  }
  return {
    editarContacto,
    datosAEditar
  }
}
