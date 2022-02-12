import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEvent } from '../../../actions/events'
import { TablaBodyEdit } from "./TablaBodyEdit";


export const TablaBodyEdit2 = () => {


    
    const { events } = useSelector(state => state.event);
  

  return (
    <>
        <table className="tabla data_tabla">
              <tbody >
                  <tr className="tabla">
                      <td>Producto</td>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Codigo</th>
                  </tr>
             { events.map( event => (
                    <TablaBodyEdit event={ event } key={event.id} />
                    )) }
                 
              </tbody>
          </table>
    </>
  )
}

