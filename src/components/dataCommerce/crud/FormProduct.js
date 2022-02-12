
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../actions/events";
import { useForm } from "../../../hooks/useForm";


export const FormProduct =  () => {

  const dispatch =useDispatch();

 const { events } = useSelector( state => state.event);
  

  const [ values, handleInputChange] = useForm({
    nombre:'',
    precio:0,
    cantidad:0,
    categoriaId:'beb',
    subcategoria:'sinAlcohol'
  });

 const { categoriaId } = values;


  
const evento = events.filter( item => item.code == categoriaId )



const handleAddProduct = ( e ) => {
    e.preventDefault();
    dispatch( createProduct( values ))
}

  return (
    <div className="crud_form_container">
      <form  onSubmit={ handleAddProduct }>
          <input 
          type='text'
           name="nombre"
           placeholder="nombre"
           autoComplete="off"
           onChange={ handleInputChange }
            />

          <input 
          type='number'
           name="precio"
           placeholder="precio"
           autoComplete="off"
           onChange={ handleInputChange }
            />

          <input
           type='number'
            name="cantidad" 
            placeholder="cantidad"
            autoComplete="off"
            onChange={ handleInputChange }
            />
            <label>Categorias: 
           <select name="categoriaId"  value={ categoriaId } onChange={ handleInputChange } >
           { events.map( item => (
              <option key={item.id}  value={item.code}>{item.nombre}</option>
              ))
            }
            </select>
            </label>

            <label>SubCategoria: 
           <select name="subcategoria" onChange={ handleInputChange }>
           { evento[0].subCategories.map( item => (
              <option key={item.id} value={item.code}>{item.nombre}</option>
              ))
            }
            </select>
            </label>

          <button 
          type="submit"
          >
              Agregar
          </button>

      </form>
  </div>
  )
};

