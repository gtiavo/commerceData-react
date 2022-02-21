import { types } from "../types/types";

const initialState = {
    events:[],
    activeEvent: null
}


export const productreducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.eventAdd:
            return{
                ...state
            }
       
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }
        case types.eventDelete:
        return{
            ...state,
            events: action.payload 
          }  

         case types.eventSelect:
             return{
                 ...state,
                 activeEvent:{ 
                     ...action.payload
                    }
             } 
        case types.eventUpdate:
            return{
                ...state,
                activeEvent:{
                    ...action.payload
                }
            }  

        case types.eventSelectOver:
            return{
                ...state,
                activeEvent: null
            } 
        case types.eventOver:
            return{
                ...state,
                events:[],
                activeEvent: null
            }
             
    
        default:
            return state;
    }

}