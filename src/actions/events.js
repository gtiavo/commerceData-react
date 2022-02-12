import { types } from "../types/types";
import { fetchEnd } from '../helpers/fetch'


export const createProduct = ( event ) => {
    return async ( dispatch ) => {
        try { 
            const resp = await fetchEnd('productos', event, 'POST');
            const body = await resp.json();
            if( body.ok ){
                
                dispatch( eventAdd( ) );
            }

            
        } 
        catch (error) {
            console.log(error);
        }
    }
}

export const updateProduct = ( id, event ) => {
    return async ( dispatch ) => {

        try { 
            const resp = await fetchEnd(`productos/${id}`, event, 'PUT');
            const body = await resp.json();
            
            if( body.ok ){
                const resp = await fetchEnd(`productos/${id}`);
                const body2 = await resp.json();
          
              const event = body2.products
            dispatch( eventUpdate( event ) );

            }

            
        } 
        catch (error) {
            console.log(error);
        }
    }
};

export const deleteProduct = (  id ) => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchEnd(`productos/${id}`, {} , 'DELETE');
            const body = await resp.json();

            if(body.ok ){
                const resp = await fetchEnd('productos');
                const body2 = await resp.json();
          
              const event = body2.products
             dispatch( eventDelete( event ) )

            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const startCategories = () => {
    return async ( dispatch ) => {

        try {
            const resp = await fetchEnd('categorias');
            const body = await resp.json();
      
          const event = body.allCategory
      
          dispatch( eventLoaded( event ));
            
        } catch (error) {
            console.log(error);
        }

    }
}



export const startEvent = () => {
    return async ( dispatch ) => {

        try {
            const resp = await fetchEnd('productos');
            const body = await resp.json();
      
          const event = body.products
      
          dispatch( eventLoaded( event ));
            
        } catch (error) {
            console.log(error);
        }

    }
}

const eventLoaded = ( event ) => ({
    type: types.eventLoaded,
    payload: event
});

const eventAdd = ( ) => ({
    type: types.eventAdd,
})

export const eventSelect = ( id, event ) => ({
    type: types.eventSelect,
    payload: {
        id,
        ...event
    }
});

export const eventUpdate = ( event ) => ({
    type: types.eventUpdate,
    payload: event
});

export const eventSelectOver = (  ) => ({
    type: types.eventSelectOver
});

export const eventDelete = ( event ) => ({
    type: types.eventDelete,
    payload: event
});