
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startEvent } from '../../../actions/events';
import { TablaBodyEdit } from './TablaBodyEdit';
import { TablaBodyEdit2 } from './TablaBodyEdit2';

export const TablaEdit = () => {


  const dispatch = useDispatch()
    
  const { events } = useSelector(state => state.event);


  useEffect(() => {
    
    dispatch(startEvent())
      
    }, [ dispatch ]);

  return (
  <div className='crud_edit_screen_conteiner'>
      <h1>Tabla Edit</h1>
      <hr/>
      
       
      
      <TablaBodyEdit2 />
        
    
        
  </div>
  )
};


