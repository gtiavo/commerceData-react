//importamos el componente Provider de react-redux y embolvemos el componete principal
// para proveer la info del store
//cumple la misma funcion que el hook useContex

import { Provider } from 'react-redux'
import { store } from './store/store';
import AppRouter from './components/routers/AppRouter.routes';

const CommerceApp = () => {
  return (
      <div>
        <Provider store={ store }>
          <AppRouter/>
        </Provider>
      </div>
  )
};

export default CommerceApp;
