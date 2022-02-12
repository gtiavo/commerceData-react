import { types } from "../types/types";



const initialState ={
    ok: false,
    position: null
}


export const navigationReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.locationOn:
            return {
                ...state,
                ok: true,
                position: action.payload
            }

            case types.locationOff:
            return {
                ...state,
                ok: false,
                position:null
            }
        
        default:
            return state;
    }
}