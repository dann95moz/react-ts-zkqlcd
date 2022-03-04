import {types} from '../types/types';
import {getAuth, signInWithPopup, signInWithEmailAndPassWord, signOut} from "firebase/auth";
import {google} from '../firebase/firebaseConfig';
export const loginEmailPassword = (email, password) =>{
  return (dispatch) =>{
    signInWithEmailAndPassWord(auth, email, password)
    .then(({user}) =>{
      dispatch(
        loginSincrono(user.uid.user.displayName)
      )
    })
    .catch(e =>{

    })
  }
}
export const loginSincrono = (id, displayName) =>{
  return{
    type: types.login,
    payload:{
      id, displayName
    }
  }
}
export const loginSincrono = ()=>{
  return{
    type: types.logout
  }
}