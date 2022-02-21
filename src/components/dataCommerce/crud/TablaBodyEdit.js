import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, eventSelect } from '../../../actions/events';

 export const TablaBodyEdit = ({event}) => {
  const ulRef = useRef();
  const iRef = useRef()
    const dispatch = useDispatch()

    const {id,nombre, precio, cantidad} = event


    const handleEdit = () =>{
        dispatch( eventSelect(id, {...event}))
    }

    const handleDelete = () => {
      dispatch( deleteProduct (id) );
    }

  
    
    const handleUlShow = () => {
     ulRef.current.classList.toggle('toogle');
     if(iRef.current.classList.contains('fa-plus')){
       iRef.current.classList.replace('fa-plus', 'fa-minus')
     }else{
      iRef.current.classList.replace('fa-minus','fa-plus' )
     }
    }

    

  return (
    <div className='crud_edit_list_container'>
    <div className='crud_edit_product_list_title'>
    <h3 onClick={ handleUlShow }>{nombre}</h3><i ref={ iRef } className="fa-solid fa-plus title_plus animate__animated  animate__rotateIn"></i>
    </div>
    <ul ref={ ulRef } className={`crud_edit_prdouct_ul `}>
      <li>Cantidad: { cantidad }</li>
      <li>Precio:$ {precio}</li>
    </ul>
    <div className='crud_list_product_button'>
    <button><Link 
    onClick={ handleEdit }
    to={`/editproduct/${id}`}
    >Editar</Link>
    </button>
    <button 
    onClick={ handleDelete }
    >Eliminar
    </button>
    </div>
    
    </div>
      )
};