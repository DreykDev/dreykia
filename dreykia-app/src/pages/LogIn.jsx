import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

const LogIn = () => {


  
    const {loginWithRedirect} = useAuth0();


    return (
      <>
        <p>LOGIIIIIIIIIIIIIIIIN</p>
        <button
      className='button-login'
      onClick={()=>loginWithRedirect({
        authorizationParams: {
        redirect_uri: "http://localhost:3000"},
      })}
      >
        Log In
      </button>
      </>
    )
  
}

export default LogIn;
