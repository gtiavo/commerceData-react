import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, deleteCategory } from "../../../actions/events";
import { useForm } from "../../../hooks/useForm";


export const AddCategory = () => {

 const { events } = useSelector( state => state.event);


 const sectionOn = useRef()

const [values, handleInputChange ] = useForm();
const dispatch = useDispatch()


const handleDelete =( id ) => {
dispatch( deleteCategory(id))
}


  const handleCategory = (e) => {
    e.preventDefault()
    dispatch( createCategory(values));
  }

  const handleShowSection = () =>{
    sectionOn.current.classList.toggle('toogle')
  }

  return (
    <div className="crud_addcategory_sreen">
      <h1>Agregar Categoria</h1>
      <hr/> 
      <div className="crud_form_container">
      <form 
      onSubmit={ handleCategory }
      >
        <input 
        type='text'
         name="nombre" 
         autoComplete="off"
         onChange={ handleInputChange }
         placeholder='Nombre'
          />
        <input 
        type='text'
         name="code" 
         onChange={ handleInputChange }
         placeholder='Codigo'
          />
        <button 
        type="submit"
         >
           Crear
         </button>
      </form> 
      </div>

      <section className="crud_category_delete_section">
        <h3 onClick={ handleShowSection }>Eliminar Categorias</h3>
    <section ref={ sectionOn } className="crud_category_show">
        <p>Recuerde que al eliminar una categoria, 
          debe elimiar ademas los productos 
          y subcategorias asociados</p>
    <div className="crud_category_delete_ul">
      {events.map( items => (
      <article key={items.id} >
      <div >{items.nombre} </div><i onClick={ () => handleDelete(items.id) } className="fa-solid fa-trash"></i>
      </article>
      ))
      }
    </div>
    </section>
      </section>
    </div>
  )
}

