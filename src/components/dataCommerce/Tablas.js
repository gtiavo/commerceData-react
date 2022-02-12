import { TablaBody } from "./TablaBody";
import { useSelector } from 'react-redux';




export const Tablas = ({event}) => {
    
    const { activeEvent } = useSelector(state => state.event);

    const { producto } = activeEvent;

  const { code } = event

    const productsFilter = producto.filter( item => item.subcategoria === code) 
    

  return (
      <div>
          <table className="tabla data_tabla">
              <tbody >
                  <tr className="tabla">
                      <td>Producto</td>
                      <th>Cantidad</th>
                      <th>Precio</th>
                  </tr>
                  {  productsFilter.map(item => (
                  <TablaBody event={ item } key={item.id} />
                  ))
                    }
              </tbody>
          </table>
      </div>
  )
};


