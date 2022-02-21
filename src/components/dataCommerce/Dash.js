import { Routes, Route} from 'react-router-dom'
import { AddCategory } from './crud/AddCategory';
import { AddProduct } from './crud/AddProduct';
import { AddSubCategory } from './crud/AddSubCategory';
import { EditProduct } from './crud/EditProduct';
import { Productos } from './crud/Productos';
import { TablaEdit } from './crud/TablaEdit';
import { Tools } from './crud/Tools';
import { HomeData } from "./HomeData";
import { Inventario } from './Inventario';
import { Navbar } from "./Navbar";



export const Dash = () => {
  return (
    <>
    <Navbar/>
    <div className='routes_content'>
    <Routes>
    <Route path='/' element={<HomeData/>} />
    <Route path='/tools' element={<Tools/>} />
    <Route path='/productos' element={<Productos/>} />
    <Route path='/addproduct' element={<AddProduct/>} />
    <Route path='/editproduct' element={<TablaEdit/>} />
    <Route path='/editproduct/:id' element={<EditProduct/>} />
    <Route path='/inventario/:id' element={<Inventario/>} />
    <Route path='/addcategory' element={<AddCategory/>} />
    <Route path='/addsubcategory' element={<AddSubCategory/>} />
    </Routes>
    </div>
    
    </>
  )

};


