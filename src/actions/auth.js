import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";



export const startLogin = ( email, passworsd ) => {
    return ( dispatch ) =>{

       firebase.auth().signInWithEmailAndPassword(email, passworsd)
            .then( ({user}) => {
                dispatch( login( user.uid, user.displayName))

            })
            .catch(err => {
                console.log( err );
            })
    }
}


export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then( ({user}) => {
                dispatch( login(user.uid, user.displayName) )
            })
    }
}


export const startRegister = ( name, email, password ) => {
    return  ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password)
        .then( async ({user}) => {
            await user.updateProfile({displayName : name})
            dispatch( login(user.uid, user.displayName))
        })
        .catch(err => {
            console.log(err);
        })
    }
};

export const startLogout = () => {
    return async ( dispatch ) =>{
       await firebase.auth().signOut();

        dispatch( logout());
    }
}


export const login = ( uid, displayName ) =>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
});


const logout = () => ({
    type: types.logout
})