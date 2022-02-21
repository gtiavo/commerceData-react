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
  }, [ dispatch ])
  


  return (
  <div >
    <div className='crud_prod_contenedor' >
      <div className='crud_produt_title'>
      <h1>Productos</h1><i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <hr/>
      <ul className='crud_prod_ul' >
          { events.map( event => (
         <InventarioLis event={event} key={event.id} />
            ))
            }
      </ul>

    <ul className='crud_prod_ul_edit'>
    <li><i className="fa-solid fa-plus"><Link to='/addproduct'> Agregar productos</Link></i></li>
        <li><i className="fa-solid fa-pen"><Link to='/editproduct'>Editar productos</Link></i></li>
        <li><Link to='/addcategory'>Agregar Categoria</Link></li>
        <li><Link to='/addsubcategory' >Agregar SubCategoria</Link></li>
    </ul>
    
    </div>

  </div>
  )
};


