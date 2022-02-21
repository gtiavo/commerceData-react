

import { Link } from 'react-router-dom';
import { pagActiva } from '../../helpers/selectors'


export const CateroriaNav = ({position}) => {


  pagActiva( position )
  


  return (
  <div className="nav_data_category">
      <ul >
          <li ><Link to='/'><i className="fas fa-home"></i></Link></li>
          <li ><Link  to='/productos'><i className="fab fa-product-hunt"></i></Link></li>
          <li ><Link to='/tools'><i className="fas fa-tools"></i></Link></li>
          
      </ul>
    
  </div>
  )
};


