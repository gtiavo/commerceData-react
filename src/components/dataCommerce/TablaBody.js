

 export const TablaBody = ({event}) => {

    const {nombre, precio, cantidad} = event

  return (
    <tr>
    <th>{nombre}</th>
    <td>{cantidad}</td>
    <td>{precio}</td>
    </tr>
      )
};


