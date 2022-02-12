import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startCategories} from '../../../actions/events';
import { startLocation } from '../../../actions/location';
import { InventarioLis } from '../InventarioLis';


export const Productos = () => {

 const dispatch = useDispatch();

 const { events } = useSelector(state => state.event);

 useEffect(() => {
   
   dispatch( startCategories() )
   dispatch(startLocation('productos'))
  }, [])
  


  return (
  <div>
      <h1>Productos</h1>
      <hr/>
      <ul>
          { events.map( event => (
         <InventarioLis event={event} key={event.id} />
            ))
            }
      </ul>

    <li>
        <ul><Link to='/addproduct'> Agregar productos</Link></ul>
        <ul><Link to='/editproduct'>editar productos</Link></ul>
    </li>

  </div>
  )
};


