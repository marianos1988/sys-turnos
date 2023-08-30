import { useContext, useState} from 'react'
import { CartelConfirmarContext } from './CartelConfirmarContext'
import { EditarTurnoContext } from './EditarTurnoContext';
import { NuevoTurnoContext } from './NuevoTurnoContext';

export const CartelConfirmarProvider = ({ children }) => {

	const [mostrarCartelConfirmar, setMostrarCartelConfirmar] = useState({

    mostrar: false,
    mensaje: "",

  });
	const { handleEliminarTurno } = useContext(NuevoTurnoContext)
	const { turnoParaEditar } = useContext(EditarTurnoContext)

	const [aplicarCambios, setAplicarCambios] = useState(false)

  const handleMostrarCartelConfirmar = (mensaje) => {
    setMostrarCartelConfirmar({ 
      mostrar: !mostrarCartelConfirmar.mostrar, 
      mensaje: mensaje,
	
    });
  }

	const handleConfirmarCartel = (valor) => {

		setMostrarCartelConfirmar({
			mostrar: !mostrarCartelConfirmar.mostrar,
			mensaje: "",
		})

		setAplicarCambios(valor)

		if(aplicarCambios) {
			handleEliminarTurno(turnoParaEditar)
		}
	}


  return (
    <CartelConfirmarContext.Provider value={{ handleMostrarCartelConfirmar, handleConfirmarCartel, mostrarCartelConfirmar, aplicarCambios }}>
        {children}
    </CartelConfirmarContext.Provider>
  )
}
