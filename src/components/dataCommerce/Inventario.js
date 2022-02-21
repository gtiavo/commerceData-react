import { useDispatch, useSelector } from 'react-redux';
import { Tablas } from './Tablas';
import { eventSelectOver } from '../../actions/events'
import { useEffect } from 'react';


export const Inventario = () => {

  const dispatch = useDispatch();


    
    const { activeEvent } = useSelector(state => state.event);
  
    const {  subCategories, nombre } =activeEvent

    useEffect(() => {
    
      return () => {
        dispatch( eventSelectOver())
      };
    }, [ dispatch ]);

  return (
    <>
    <div className='data_inventario_container'>
    
        <h1>{nombre.toUpperCase()}</h1>
        <hr/>
      { subCategories.map(item => (
      <div key={item.id}>
        <h3>{item.nombre}</h3>
        < Tablas event={ item }/>
       </div>
        ))
      } 
    </div>
    </>
  )
}

