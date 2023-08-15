import { useContext } from 'react'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'



export const MisTurnos = () => {


  const { listaTurnos } = useContext( NuevoTurnoContext );
  console.log(listaTurnos);
  // const [valorFecha, setValorFecha] = useState(fechaHoy);


  return (
    <>
      <div></div>
    </>
  )
}
