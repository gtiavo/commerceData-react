import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, eventSelect } from '../../../actions/events';

 export const TablaBodyEdit = ({event}) => {

    const dispatch = useDispatch()

    const {id,nombre, precio, cantidad, categoriaId} = event


    const handleEdit = () =>{
        dispatch( eventSelect(id, {...event}))
    }

    const handleDelete = () => {
      dispatch( deleteProduct (id) );
    }

  return (
    <tr>
    <th>{nombre}</th>
    <td>{ cantidad }</td>
    <td>{precio}</td>
    <td>{categoriaId}</td>
    
    <td><Link 
    onClick={ handleEdit }
    to={`/editproduct/${id}`}
    > Edit 
    </Link></td>
    <td
    onClick={ handleDelete }
    >
       X
       </td>
    </tr>
      )
};