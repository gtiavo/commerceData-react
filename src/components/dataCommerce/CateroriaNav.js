

import { Link } from 'react-router-dom';
import { handleselector, handleselector2, handleselector3, pagActiva } from '../../helpers/selectors'


export const CateroriaNav = ({position}) => {


  pagActiva( position )
  


  return (
  <div className="nav_data_category">
      <ul >
          <li onClick={ handleselector3 } ><Link to='/'><i className="fas fa-home"></i></Link></li>
          <li onClick={ handleselector }><Link  to='/productos'><i className="fab fa-product-hunt"></i></Link></li>
          <li onClick={ handleselector2 }><Link to='/tools'><i className="fas fa-tools"></i></Link></li>
          
      </ul>
    
  </div>
  )
};


