import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core"
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from "./reducer"

function Login() {
    const [state,dispatch] =useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result =>{ // we are updating the datalayer with the user, user is 1st define as null in reducer
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error)=> alert(error.mesage));


    }
    return (
        <div className="login">
           <div className="login__logo">
           <img  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="fb"/>
           <h1>Facebook</h1>
               
           </div>
           <Button type="submit" onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
