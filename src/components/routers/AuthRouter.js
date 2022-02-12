import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login';
import Register from '../auth/Register';

const AuthRouter = () => {
  return (
      <>
      <div className='auth_main'>
        <Routes>
            <Route path='/' element={ <Login/>} />
            <Route path='/register' element={ <Register/>} />
        </Routes>
      </div>
      </>
  )
};

export default AuthRouter;
