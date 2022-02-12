
//creamos el store, que le brinda toda la data a nuestra aplicacion desde cualquier lado donde se la solicite
// el store se puede crear gracias a la instalacion de redux y react-redux '$ npm install react-redux redux'
// en el store iremos agregando nuestros reducers, para mas info ver la documentacion:
// 'https://es.redux.js.org/', 'https://react-redux.js.org/introduction/getting-started'
// el store se debe expórtar al punto mas alto de la aplicacion para que pueda compartir 
//la informacion con la misma


import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk' //importamos thunk una vez instalado las dependencias necesarias:
// '$ npm install firebase@8.10.0', '$ npm install redux-thunk' (https://www.npmjs.com/package/redux-thunk), (https://firebase.google.com/docs/web/modular-upgrade)
import { authReducer } from '../reducers/authReducer';
import { productreducer } from '../reducers/productReducer';
import { navigationReducer } from '../reducers/navigationReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//una vez instalado thunk volvemos a 'https://github.com/zalmoxisus/redux-devtools-extension#usage', y copiamos
// y pegamos la constante composeEnhancers

const reducers = combineReducers({
    auth: authReducer,
    event: productreducer,
    location: navigationReducer
    
})




export const store = createStore( 
    reducers,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // argumento que se toma de 'https://github.com/zalmoxisus/redux-devtools-extension#usage', con esto redux funciona en el navegador
   composeEnhancers(
       applyMiddleware( thunk )
   )
    )