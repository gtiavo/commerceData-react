import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../actions/auth";
import { endLocation, startLocation } from "../../../actions/location";

export const Tools = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      
      dispatch(startLocation('tools'))
      
    }, [])
    
    
    
    const handleLogout = () =>{
      dispatch( startLogout());
      dispatch( endLocation())
    }

  return (
  <div className="crud_tools_container">
      <div className="crud_tools_title" >
      <h1>Tools</h1>
      </div>
      <hr/>

      <span
        onClick={  handleLogout }
      >
          Cerrar secion
      </span>
  </div>
  )
};


