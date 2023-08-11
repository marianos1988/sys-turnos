import { useContext } from 'react'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'
import { DatePickerComponent } from '../components/DatePickerComponent';




export const MisTurnos = () => {

  const fechaHoy = new Date();
  const { listaTurnos } = useContext( NuevoTurnoContext );
  // const [valorFecha, setValorFecha] = useState(fechaHoy);


  return (
    <>
      
    </>
  )
}
