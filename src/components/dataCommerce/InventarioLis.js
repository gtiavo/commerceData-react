import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eventSelect } from '../../actions/events'

export const InventarioLis = ({event}) => {

    const dispatch = useDispatch();
    const {id, nombre, code} = event

    const handleInventario = () =>{
        dispatch( eventSelect(code, {...event} ))
      }

  return (
    <li>
    <Link
     onClick={ handleInventario } 
     to={`/inventario/${code}`}
    >
    {(nombre).toUpperCase()}
    </Link>
    </li>
  )
}

