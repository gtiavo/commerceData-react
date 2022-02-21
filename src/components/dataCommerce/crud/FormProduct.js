import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../actions/events";
import { useForm } from "../../../hooks/useForm";


export const FormProduct = () => {
  const dispatch = useDispatch();
  

  const { events } = useSelector((state) => state.event);

  const [values, handleInputChange] = useForm({
    nombre: "",
    precio: 0,
    cantidad: 0,
    categoriaId: "beb",
    subcategoria: ''
  });

  let { categoriaId, subcategoria } = values;

  
  
  const evento = events.filter((item) => item.code === categoriaId);

  let subcategories = evento[0].subCategories
 
  

  const handleAddProduct = (e) => {
    e.preventDefault();
    if(subcategoria !== 'seleccionar' && subcategoria !== ''){
      dispatch(createProduct(values));
      console.log(values);
    }else{
      console.log('debdes de colocar una subcategoria');
    }
  };

  return (
    <div className="crud_form_container">
     
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="nombre"
          placeholder="nombre"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="cantidad"
          placeholder="cantidad"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="precio"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <label>
          Categorias:
          <select
            name="categoriaId"
            // value={categoriaId}
            onChange={handleInputChange}
          >
            {events.map((item) => (
              <option key={item.id} value={item.code}>
                {item.nombre}
              </option>
            ))}
          </select>
        </label>

        <label>
          SubCategoria:
          <select name="subcategoria"  onChange={handleInputChange} >
            <option>Seleccionar</option>
            {subcategories.map((item) => (
              <option key={item.id}  value={item.code}>
                {item.nombre}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};
