
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { startLocation } from "../../actions/location"
import { EnConstruccion } from "./EnConstruccion"



export const HomeData = () => {

   const dispatch = useDispatch()

   useEffect(() => {
       
       dispatch( startLocation('home'))

   }, [])
   


    return (
        <>
        
        <EnConstruccion/>
      
     
        </>
    )
}