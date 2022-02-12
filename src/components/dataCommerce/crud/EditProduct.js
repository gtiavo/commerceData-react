import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { eventSelectOver, updateProduct } from "../../../actions/events";
import { useForm } from "../../../hooks/useForm";

export const EditProduct = () => {

  const dispatch = useDispatch();
  

  const { activeEvent } = useSelector(state => state.event);
  

  const {id ,nombre, precio, cantidad, categoriaId, subcategoria} = activeEvent;

    const [ values, handleInputChange] = useForm({
        nombre:nombre,
        precio: precio,
        cantidad: cantidad,
        categoriaId: categoriaId,
        subcategoria: subcategoria
      });


    
      
    
    const handleEditProduct = ( e ) => {
        e.preventDefault();
        dispatch( updateProduct( id, values ));
        
    };
  

    useEffect(() => {
    
      return () => {
        dispatch( eventSelectOver())
      };
    }, [ dispatch ]);
    

  return (
 <div className="crud_form_container">
      <form  onSubmit={ handleEditProduct }>
        <label>Producto
          <input 
          type='text'
           name="nombre"
           placeholder="nombre"
           autoComplete="off"
           value={ values.nombre}
           onChange={ handleInputChange }
            />
          </label>


          <label>Cantidad
          <input
           type='number'
            name="cantidad" 
            placeholder="cantidad"
            autoComplete="off"
            value={ values.cantidad}
            onChange={ handleInputChange }
            />
            </label>
            
          <label>Precio
          <input 
          type='number'
           name="precio"
           placeholder="precio"
           autoComplete="off"
           value={ values.precio}
           onChange={ handleInputChange }
            />
            </label>

          <button 
          type="submit"
          >
              Editar
          </button>

      </form>
  </div>
  )
};


