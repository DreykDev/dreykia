//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import {useAuth0} from "@auth0/auth0-react"
import '../style/navBar.css'
import { LogoutButton } from '../utilities/LogOut';


const NavBar = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <nav className='navBarp'>

      <button
      className='button-login'
      onClick={()=>loginWithRedirect({
        authorizationParams: {
        redirect_uri: "http://localhost:3000"},
      })}
      >
        Log In
      </button>

      <LogoutButton/>

    </nav>
  );
};

export default NavBar;