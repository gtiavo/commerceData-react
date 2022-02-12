import { types } from "../types/types";




export const startLocation = (location) => ({
    type: types.locationOn,
    payload: location
})

export const endLocation = () => ({
    type: types.locationOff
})