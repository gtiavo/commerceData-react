import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Navigation, Routes, Route} from 'react-router-dom';
import { login } from '../../actions/auth';
import { firebase } from '../../firebase/firebase-config'
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {Dash} from '../dataCommerce/Dash';
import { Cargando } from '../dataCommerce/Cargando';

const AppRouter = () => {

  const dispatch = useDispatch()

const [ checking, setChecking] = useState( true );
const [ isLoged, setIsLoged] = useState( false );


useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) =>{
        if(user?.uid){
            dispatch(login(user.uid, user.displayName ));
            setIsLoged(true)
        } else {
            setIsLoged(false)
        }
        setChecking( false )
    } )
    
}, [dispatch, setChecking, setIsLoged]);


   if( checking ) {
       return ( <Cargando/> )
   }

  return (
      <Navigation>
          <Routes>
              <Route path='/login/*' element={ <PublicRoute isAuthenticated={ isLoged }>
                < AuthRouter />
              </PublicRoute> } />

              <Route path='/*' element={ <PrivateRoute isAuthenticated={ isLoged }>
              <Dash/>
              </PrivateRoute> } />
          </Routes>
      </Navigation>
  )
};

export default AppRouter
