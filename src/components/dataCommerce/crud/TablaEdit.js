
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
  <div>
      <h1>Tabla Edit</h1>
      <hr/>
      
       <div>
      
      <TablaBodyEdit2 />
        </div>
    
        
  </div>
  )
};


