

import {  useSelector } from "react-redux";

import { CateroriaNav } from "./CateroriaNav";


export const Navbar = () => {

 
 const { name } = useSelector(state => state.auth)

 const { position } = useSelector(state => state.location);


   

  return (
    <>
  <div className="nav_content"  >

    { (position === 'home') &&
     <nav className="nav_nav animate__animated animate__backInDown" >
          <h1>{ name[0] }</h1>
        <div className="nav_searchContain">
        <input type='text' name="search" className="nav_search" autoComplete="off" />
        <i className="fas fa-search"></i>
        </div>
      </nav>
     }
 
      <CateroriaNav position={ position }/>
  </div>
  </>
  )
};


