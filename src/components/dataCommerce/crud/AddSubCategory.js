import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubCategory, deleteSubCategory, eventEnd, subCategoryLoad } from "../../../actions/events";
import { useForm } from "../../../hooks/useForm";

export const AddSubCategory = () => {




  const { events } = useSelector( state => state.event);

  const sectionOn = useRef()

  const [values, handleInputChange ] = useForm();
const dispatch = useDispatch();


useEffect(() => {
  dispatch( subCategoryLoad())
}, [])

useEffect(() => {
  return () => {
    dispatch(eventEnd())
  }
}, [])



const handleDelete =( id ) => {
  dispatch( deleteSubCategory(id));
  }


  const handleSubCategory = (e) => {
    e.preventDefault()
    dispatch( createSubCategory(values));
  }

  const handleShowSection = () =>{
    sectionOn.current.classList.toggle('toogle')
  }

  return (
    <div className="crud_addcategory_sreen">
    <h1>Agregar SubCategoria</h1>
    <hr/> 
    <div className="crud_form_container">
    <form 
    onSubmit={ handleSubCategory }
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
         <input 
      type='text'
       name="categoriaId" 
       onChange={ handleInputChange }
       placeholder='Relacion Categoria'
        />
      <button 
      type="submit"
       >
         Crear
       </button>
    </form> 
    </div>

    <section className="crud_category_delete_section">
        <h3 onClick={ handleShowSection }>Eliminar SubCategorias</h3>
    <section ref={ sectionOn } className="crud_category_show">
        <p>Recuerde que al eliminar una Subcategoria, 
          debe elimiar ademas los productos 
          y categorias asociados</p>
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

