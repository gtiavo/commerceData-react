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

export const createCategory = ( event ) =>{
    return async ( dispatch ) => {
        try { 
            const resp = await fetchEnd('categorias', event, 'POST');
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


export const deleteCategory = (  id ) => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchEnd(`categorias/${id}`, {} , 'DELETE');
            const body = await resp.json();

            if(body.ok ){
                const resp = await fetchEnd('categorias');
                const body2 = await resp.json();
          
              const event = body2.allCategory
             dispatch( eventDelete( event ) )

            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const createSubCategory = ( event ) =>{
    return async ( dispatch ) => {
        try { 
            const resp = await fetchEnd('subcategorias', event, 'POST');
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


export const deleteSubCategory = (  id ) => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchEnd(`subcategorias/${id}`, {} , 'DELETE');
            const body = await resp.json();

            if(body.ok ){
                const resp = await fetchEnd('subcategorias');
                const body2 = await resp.json();
          
              const event = body2.subcate
             dispatch( eventDelete( event ) )

            }

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


export const subCategoryLoad = () => {
    return async ( dispatch ) => {

        try {
            const resp = await fetchEnd('subcategorias');
            const body = await resp.json();
      
          const event = body.subcate
      
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
    type: types.eventAdd
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

export const eventEnd = (  ) => ({
    type: types.eventOver
});